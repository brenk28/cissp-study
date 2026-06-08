import json
from collections import Counter

def verify():
    with open('all_questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    print(f"Total questions: {len(questions)}")
    
    domains = Counter()
    difficulties = Counter()
    types = Counter()
    
    for q in questions:
        domains[q.get('domain', 'Unknown')] += 1
        difficulties[q.get('difficulty', 'Unknown')] += 1
        types[q.get('type', 'Unknown')] += 1
        
    print("\n--- By Domain ---")
    for d, c in domains.most_common():
        print(f"{d}: {c}")
        
    print("\n--- By Difficulty ---")
    for d, c in difficulties.most_common():
        print(f"Difficulty {d}: {c}")
        
    print("\n--- By Type ---")
    for t, c in types.most_common():
        print(f"{t}: {c}")

if __name__ == '__main__':
    verify()
