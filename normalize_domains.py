import json

def normalize():
    with open('all_questions.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    for q in questions:
        domain = q.get('domain', '')
        # Normalize Identity and Access Management
        if 'Identity and Access Management' in domain or 'Domain 5' in domain:
            q['domain'] = 'Identity and Access Management (IAM)'
        # Normalize Security Assessment and Testing
        elif 'Security Assessment' in domain or 'Domain 6' in domain:
            q['domain'] = 'Security Assessment and Testing'
        # Normalize Security Architecture and Engineering
        elif 'Security Architecture' in domain or 'Domain 3' in domain:
            q['domain'] = 'Security Architecture and Engineering'
        elif 'Professional Ethics' in domain:
            q['domain'] = 'Professional Ethics' # Kept as is

    # Save
    with open('all_questions.json', 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2)

if __name__ == '__main__':
    normalize()
