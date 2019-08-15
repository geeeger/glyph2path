# glyph2path

一般工具, 自用，无普适性

### 开发原因

UI团队断代，无UI历史资源可查，但需要一些单个svg资源，于是开发之。

### 原理

提取 svg font(1.1) 中相关信息，转换成单个path svg文件

设 viewBox 为 (x, y, width, height)

其中 

height = abs(font.ascent) + abs(font.descent)

width = font.horiz-adv-x || glyph.horiz-adv-x

x = 0

y = 0

path.d = glyph.d

则可把iconfont.svg中资源拆出

### 不足

由于font坐标系的缘故，转换成path以后，位置明显有-90度的旋转。由于时间有限，谁有时间谁修吧。
