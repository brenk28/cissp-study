import json
import os
import glob

def merge_all():
    # Load original questions
    with open('all_questions.json', 'r', encoding='utf-8-sig') as f:
        all_q = json.load(f)
        
    # Create a dictionary for quick lookup by ID to replace modified questions
    q_dict = {q['id']: q for q in all_q}
    
    # 1. Merge rewritten short explanations
    if os.path.exists('short_exp_questions_rewritten.json'):
        with open('short_exp_questions_rewritten.json', 'r', encoding='utf-8') as f:
            rewritten = json.load(f)
            for rq in rewritten:
                q_dict[rq['id']] = rq
                
    # 2. Add all new generated questions
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
            
    # Reconstruct the list
    final_q = list(q_dict.values())
    
    # Sort by ID
    final_q.sort(key=lambda x: x['id'])
    
    # Save back to all_questions.json
    with open('all_questions.json', 'w', encoding='utf-8') as f:
        json.dump(final_q, f, indent=2)
        
    print(f"Merge complete! The bank now has {len(final_q)} questions.")

if __name__ == '__main__':
    merge_all()
