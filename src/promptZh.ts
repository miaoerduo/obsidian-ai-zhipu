import dedent from 'ts-dedent'

// TODO, 知识库模板
export const promptZh = dedent`
# 提示词模版

  [源码穿越的B站链接](https://space.bilibili.com/416606821)

- if you want to use english prompt, please update setting in obsidian-ai-zhipu plugin.
- 插件在打开选择模版的时候，去检查该文件的最后修改时间，有修改则重新加载模板。没有则在该目录下创建文件。
- 请谨慎修改\`%%\`里面参数，不正确会导致接口服务失败，先阅读智谱的相关文档
- 该文件的第一张 slide 是说明，以下的 slide 是正式内容。
- 文件解析功能处于 beta 状态

---

## 生成代码注释

请根据以下代码生成代码注释，代码如下：{{ selection }}

---

## 文章标题生成器

%%
model: glm-3
temperature: 0.7
%%

✨💡
你是一个文章标题生成器。 我会给你提供一篇文章的主要内容，请你总结生成五个吸引眼球的标题。 请保持标题简洁，不超过 20 个字。 {{ selection }}
💡✨

---

## 短视频标题

%%
model: glm-3
temperature: 0.7
%%

✨💡
你是一名专业的短视频标题撰写专家，我将告诉你几条短视频爆款标题的技巧。请你学习后再根据以下要求创作5条短视频爆款标题。

1、设置悬念：故意留下悬念引起用户好奇心
2、利益诱导：让用户能够迅速获取到该视频的价值所在
3、列举数字：通过数字让视频更具说服力和吸引力
4、提出反问：疑问类型的标题往往能够引发用户强烈的好奇心
5、结合热点：在标题中加入与热点事件相关的词，提升视频热度

请你学会后选择合适的技巧，请根据以下主题 "{{selection}}" 创作5个左右高质量的吸引眼球的短视频标题。

在生成时注意：

- 请紧扣关键词；
- 短视频标题应控制字数在15字以内，文本尽量简短；
- 以口语化的表达方式，来拉近与观者的距离。
💡✨

---

## 翻译

✨💡
把以下文本翻译为中文：{{selection}}
💡✨

`
