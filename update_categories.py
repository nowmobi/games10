import json
import re

# 读取数据
with open('games10-data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 定义关键词映射
keywords = {
    'sports': ['sport', 'ball', 'football', 'soccer', 'basketball', 'tennis', 'golf', 'hockey', 'swim', 'race track', 'athlete'],
    'action': ['shoot', 'fight', 'battle', 'combat', 'war', 'attack', 'defend', 'hero', 'warrior', 'ninja', 'stickman', 'zombie', 'monster', 'enemy', 'weapon', 'gun', 'sword'],
    'adventure': ['adventur', 'explore', 'quest', 'journey', 'treasure', 'escape', 'mystery', 'discover', 'survive', 'dungeon'],
    'racing': ['race', 'car', 'drive', 'speed', 'fast', 'vehicle', 'motor', 'bike', 'truck', 'drift'],
    'puzzle': ['puzzle', 'match', 'merge', 'sort', 'logic', 'brain', 'block', 'tile', 'number', 'word', 'jigsaw', 'maze', 'solve'],
    'girl': ['girl', 'dress', 'makeup', 'fashion', 'beauty', 'princess', 'salon', 'wedding', 'cute', 'pretty'],
    'kids': ['kid', 'children', 'baby', 'learn', 'educational', 'school', 'coloring', 'animal', 'fun game']
}

def categorize(desc):
    """根据描述内容分类"""
    desc_lower = desc.lower()
    scores = {}
    
    for cat, words in keywords.items():
        score = 0
        for word in words:
            # 完整单词匹配权重更高
            if re.search(r'\b' + word + r'\b', desc_lower):
                score += 2
            elif word in desc_lower:
                score += 1
        scores[cat] = score
    
    # 返回得分最高的类别，如果没有匹配则默认为 puzzle
    max_score = max(scores.values())
    if max_score > 0:
        return max(scores, key=scores.get)
    else:
        return 'puzzle'

# 更新每个游戏的 category
for item in data:
    description = item.get('description', '')
    item['category'] = categorize(description)

# 保存数据
with open('games10-data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f'成功更新 {len(data)} 个游戏记录的 category 字段')

# 统计各类别数量
category_count = {}
for item in data:
    cat = item['category']
    category_count[cat] = category_count.get(cat, 0) + 1

print('\n分类统计:')
for cat, count in sorted(category_count.items()):
    print(f'{cat}: {count}')
