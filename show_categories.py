import json

# 读取数据
with open('games10-data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 按类别分组
categories = {}
for item in data:
    cat = item['category']
    if cat not in categories:
        categories[cat] = []
    categories[cat].append(item)

# 显示各类别示例
print('各类别示例:\n')
for cat, items in sorted(categories.items()):
    print(f'{cat.upper()} ({len(items)}个):')
    for item in items[:2]:  # 每个类别显示前2个
        print(f'  - {item["name"]}')
        print(f'    {item["description"][:120]}...')
    print()
