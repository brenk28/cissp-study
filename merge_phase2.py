import json
import glob
import os

def merge_phase2():
    with open('all_questions.json', 'r', encoding='utf-8') as f:
        all_q = json.load(f)
        
    q_dict = {q['id']: q for q in all_q}
    
    # Merge fixed scenarios
    for sf in ['scenarios_fixed_1.json', 'scenarios_fixed_2.json']:
        if os.path.exists(sf):
            print(f"Merging fixed scenarios from {sf}...")
            with open(sf, 'r', encoding='utf-8') as f:
                fixed = json.load(f)
                for q in fixed:
                    q_dict[q['id']] = q
                    
    # Merge new domain questions
    new_files = glob.glob('new_q_*.json')
    for nf in new_files:
        print(f"Merging {nf}...")
        try:
            with open(nf, 'r', encoding='utf-8') as f:
                new_qs = json.load(f)
                for nq in new_qs:
                    q_dict[nq['id']] = nq
        except Exception as e:
            print(f"Error merging {nf}: {e}")
            
    final_q = list(q_dict.values())
    final_q.sort(key=lambda x: x['id'])
    
    with open('all_questions.json', 'w', encoding='utf-8') as f:
        json.dump(final_q, f, indent=2)
        
    print(f"Phase 2 Merge complete! The bank now has {len(final_q)} questions.")
    
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write("const questionBank = ")
        json.dump(final_q, f, indent=2)
        f.write(";\n")
    print("Updated questions.js with new questions.")

if __name__ == '__main__':
    merge_phase2()
