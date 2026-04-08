import json

# 读取数据
with open('games10-data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 更新 image 字段为本地路径
for item in data:
    game_id = item.get('id')
    if game_id:
        item['image'] = f'./icons/{game_id}.jpg'

# 保存数据
with open('games10-data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f'成功更新 {len(data)} 个游戏记录的 image 字段为本地路径')

# 显示前几个示例
print('\n示例:')
for item in data[:3]:
    print(f'  ID {item["id"]}: {item["image"]}')
