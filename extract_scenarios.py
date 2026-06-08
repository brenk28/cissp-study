import json

with open('c:/projects/cissp/target_scenarios_utf8.json', 'r', encoding='utf-8-sig') as f:
    data = json.load(f)

target = [s for s in data if 257 <= s.get('id', 0) <= 263]

with open('c:/projects/cissp/temp_scenarios_utf8.json', 'w', encoding='utf-8') as f:
    json.dump(target, f, indent=2)
