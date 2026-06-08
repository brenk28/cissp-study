import json

def extract():
    with open('all_questions.json', 'r', encoding='utf-8-sig') as f:
        questions = json.load(f)
    
    target_questions = []
    for q in questions:
        if q.get('difficulty') == 1 and len(q.get('exp', '')) < 80:
            target_questions.append(q)
            
    print(f"Found {len(target_questions)} questions with difficulty 1 and exp < 80 chars.")
    
    with open('short_exp_questions.json', 'w', encoding='utf-8') as f:
        json.dump(target_questions, f, indent=2)

if __name__ == '__main__':
    extract()
