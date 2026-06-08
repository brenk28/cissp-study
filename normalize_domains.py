import json

def normalize():
    with open('all_questions.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    for q in data:
        domain = str(q.get('domain', ''))
        
        if '1' in domain and 'Risk' not in domain:
            q['domain'] = 'Security and Risk Management'
        elif 'Risk' in domain:
            q['domain'] = 'Security and Risk Management'
        elif '2' in domain and 'Asset' not in domain:
            q['domain'] = 'Asset Security'
        elif 'Asset' in domain:
            q['domain'] = 'Asset Security'
        elif '3' in domain and 'Architecture' not in domain:
            q['domain'] = 'Security Architecture and Engineering'
        elif 'Architecture' in domain:
            q['domain'] = 'Security Architecture and Engineering'
        elif '4' in domain and 'Network' not in domain:
            q['domain'] = 'Communication and Network Security'
        elif 'Network' in domain:
            q['domain'] = 'Communication and Network Security'
        elif '5' in domain and 'Identity' not in domain:
            q['domain'] = 'Identity and Access Management (IAM)'
        elif 'Identity' in domain:
            q['domain'] = 'Identity and Access Management (IAM)'
        elif '6' in domain and 'Assessment' not in domain:
            q['domain'] = 'Security Assessment and Testing'
        elif 'Assessment' in domain:
            q['domain'] = 'Security Assessment and Testing'
        elif '7' in domain and 'Operations' not in domain:
            q['domain'] = 'Security Operations'
        elif 'Operations' in domain:
            q['domain'] = 'Security Operations'
        elif '8' in domain and 'Software' not in domain:
            q['domain'] = 'Software Development Security'
        elif 'Software' in domain:
            q['domain'] = 'Software Development Security'
        elif 'Ethics' in domain:
            q['domain'] = 'Professional Ethics'
            
    with open('all_questions.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
        
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write("const questionBank = ")
        json.dump(data, f, indent=2)
        f.write(";\n")

if __name__ == '__main__':
    normalize()
