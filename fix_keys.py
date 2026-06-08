import json
import glob

files = glob.glob('new_q_*.json')

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except Exception:
            continue
            
    modified = False
    for q in data:
        if 'format' in q:
            q['type'] = q.pop('format')
            modified = True
        if 'text' in q:
            q['q'] = q.pop('text')
            modified = True
        if 'answers' in q:
            q['answer'] = q.pop('answers')
            modified = True
        if 'explanation' in q:
            q['exp'] = q.pop('explanation')
            modified = True
        if 'domain' in q:
            if isinstance(q['domain'], int):
                q['domain'] = str(q['domain'])
                modified = True
        if 'difficulty' not in q:
            q['difficulty'] = 3
            modified = True
            
    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
        print(f"Fixed {file}")
