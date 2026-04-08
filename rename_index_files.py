import os
import shutil

def process_game_folders(base_dir='games'):
    """处理游戏文件夹,重命名 index 文件"""
    
    # 获取所有游戏文件夹
    game_folders = [f for f in os.listdir(base_dir) 
                   if os.path.isdir(os.path.join(base_dir, f))]
    
    processed_count = 0
    skipped_count = 0
    
    print(f"找到 {len(game_folders)} 个游戏文件夹\n")
    
    for folder in sorted(game_folders):
        folder_path = os.path.join(base_dir, folder)
        index_html = os.path.join(folder_path, 'index.html')
        index_clean_html = os.path.join(folder_path, 'index_clean.html')
        index1_html = os.path.join(folder_path, 'index1.html')
        
        # 检查是否存在 index_clean.html
        if not os.path.exists(index_clean_html):
            skipped_count += 1
            continue
        
        try:
            # 如果存在 index.html,先重命名为 index1.html
            if os.path.exists(index_html):
                if os.path.exists(index1_html):
                    # 如果 index1.html 已存在,先删除
                    os.remove(index1_html)
                    print(f"⚠ {folder}: 删除已存在的 index1.html")
                
                shutil.move(index_html, index1_html)
                print(f"✓ {folder}: index.html → index1.html")
            
            # 将 index_clean.html 重命名为 index.html
            shutil.move(index_clean_html, index_html)
            print(f"✓ {folder}: index_clean.html → index.html")
            
            processed_count += 1
            
        except Exception as e:
            print(f"✗ {folder}: 处理失败 - {str(e)}")
    
    print(f"\n{'='*50}")
    print(f"处理完成!")
    print(f"成功处理: {processed_count} 个文件夹")
    print(f"跳过(无 index_clean.html): {skipped_count} 个文件夹")
    print(f"{'='*50}")

if __name__ == '__main__':
    process_game_folders()
