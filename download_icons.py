import json
import os
import requests
from PIL import Image
from io import BytesIO
import time

def download_and_process_image(item, output_dir='icons'):
    """下载并处理图片"""
    image_url = item.get('image')
    game_id = item.get('id')
    
    if not image_url or not game_id:
        print(f"跳过 ID {game_id}: 缺少 image 或 id 字段")
        return False
    
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    # 输出文件路径
    output_path = os.path.join(output_dir, f"{game_id}.jpg")
    
    # 如果文件已存在,跳过
    if os.path.exists(output_path):
        print(f"跳过 ID {game_id}: 文件已存在")
        return True
    
    try:
        # 下载图片,添加 User-Agent 避免 403 错误
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(image_url, headers=headers, timeout=30)
        response.raise_for_status()
        
        # 打开图片
        img = Image.open(BytesIO(response.content))
        
        # 转换为 RGB 模式(如果是 RGBA 或其他模式)
        if img.mode in ('RGBA', 'P', 'LA'):
            img = img.convert('RGB')
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 计算缩放比例,使短边约为 300px
        width, height = img.size
        if width < height:
            new_width = 300
            new_height = int(height * (300 / width))
        else:
            new_height = 300
            new_width = int(width * (300 / height))
        
        # 高质量缩放
        img_resized = img.resize((new_width, new_height), Image.LANCZOS)
        
        # 保存为 JPG,调整质量以控制文件大小在 20KB 左右
        # 从高质量开始尝试,逐步降低直到文件大小接近 20KB
        quality = 85
        target_size = 20 * 1024  # 20KB
        
        while quality > 30:
            buffer = BytesIO()
            img_resized.save(buffer, format='JPEG', quality=quality, optimize=True, dpi=(96, 96))
            file_size = len(buffer.getvalue())
            
            if file_size <= target_size:
                # 找到合适的质量,保存文件
                with open(output_path, 'wb') as f:
                    f.write(buffer.getvalue())
                print(f"✓ ID {game_id}: 成功 ({new_width}x{new_height}, {file_size/1024:.1f}KB, quality={quality})")
                return True
            
            quality -= 5
        
        # 如果质量降到 30 还是太大,强制保存
        buffer = BytesIO()
        img_resized.save(buffer, format='JPEG', quality=30, optimize=True, dpi=(96, 96))
        with open(output_path, 'wb') as f:
            f.write(buffer.getvalue())
        file_size = len(buffer.getvalue())
        print(f"⚠ ID {game_id}: 文件较大 ({new_width}x{new_height}, {file_size/1024:.1f}KB, quality=30)")
        return True
        
    except Exception as e:
        print(f"✗ ID {game_id}: 失败 - {str(e)}")
        return False

def main():
    """主函数"""
    # 读取数据
    data_file = 'games10-data.json'
    if not os.path.exists(data_file):
        print(f"错误: 找不到文件 {data_file}")
        return
    
    with open(data_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f"共有 {len(data)} 个游戏需要处理\n")
    
    # 统计
    success_count = 0
    fail_count = 0
    skip_count = 0
    
    # 处理每个游戏
    for i, item in enumerate(data, 1):
        print(f"[{i}/{len(data)}] ", end='')
        result = download_and_process_image(item)
        
        if result is True:
            if os.path.exists(os.path.join('icons', f"{item.get('id')}.jpg")):
                success_count += 1
            else:
                skip_count += 1
        else:
            fail_count += 1
        
        # 每处理 10 个暂停一下,避免请求过快
        if i % 10 == 0:
            time.sleep(1)
    
    print(f"\n{'='*50}")
    print(f"处理完成!")
    print(f"成功: {success_count}")
    print(f"跳过: {skip_count}")
    print(f"失败: {fail_count}")
    print(f"{'='*50}")

if __name__ == '__main__':
    main()
