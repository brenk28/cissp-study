import json

def extract():
    with open('all_questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    scenarios = [q for q in questions if q.get('type') == 'scenario']
            
    print(f"Found {len(scenarios)} scenario questions.")
    
    with open('all_scenarios_to_fix.json', 'w', encoding='utf-8') as f:
        json.dump(scenarios, f, indent=2)

if __name__ == '__main__':
    extract()
