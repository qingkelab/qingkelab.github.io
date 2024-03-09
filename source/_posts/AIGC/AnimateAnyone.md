---
title: 2天狂拦2300star，AnimateAnyone到底是什么来头
date: 2023-12-02 15:11:21
categories: AIGC
tags: 
cover: https://qingkelab.github.io/2023/12/02/AIGC/AnimateAnyone/image-20231202102239007-1483760.png
---

> 周末加班干活了～

<!--more-->

![image-20231202102239007](AnimateAnyone/image-20231202102239007-1483760.png)

```shell
Project page: https://humanaigc.github.io/animate-anyone/
Code: https://github.com/HumanAIGC/AnimateAnyone
Arxiv: https://arxiv.org/pdf/2311.17117.pdf
Youtube Video: https://www.youtube.com/watch?v=8PCn5hLKNu4
```

### 前言

Animate Anyone是阿里巴巴通义实验室XR Lab最新推出的成果，只需要单张图片和Openpose动作就可以让图片动起来并保持稳定性。

具体来说，Animate Anyone是基于Diffusion model (扩散模型结构)来进行pose2video的生成，通过如2D openpose的姿态骨架skeleton，来引导(guide)网络生成和参考图像reference image一致的角度动态效果。

Animate Anyone也是第一个在Pose2Video领域生成角色动画达到80分成绩的方法。Twitter上各路大V都在转。

![image-20231202103247319](AnimateAnyone/image-20231202103247319-1484369.png)

在Reddit的SD channel热度排名第1！

![https://www.reddit.com/r/StableDiffusion/comments/187csur/new_techanimate_anyone_consistent_and/](AnimateAnyone/image-20231202102642392-1484004.png)

### 核心贡献

![image-20231202103350285](AnimateAnyone/image-20231202103350285-1484431.png)

- **ReferenceNet：** ReferenceNet这个组件能够将参考图(reference image)中的细节，集成(integrate)通过spatial attention(空间attention机制)到diffusion model。此网络是保持复杂的外观特征与reference image一致性的关键。

> 青稞🤔： 这个spatial attention和Stable Diffusion (Latent Diffusion Model)中的self attention机制很像，主要是通过self attention/spatial attention对加噪图像特征的融合，来把参考图像的特征和控制视频动态的2D skeleton pose图像融合在一起。

- **Pose Guider：** 将姿态控制信号集成到去噪过程(denoising process)中的轻量级组件，确保角色运动的可控性和连续性。

> 青稞🤔：Pose Guider这种设计是Video Diffusion model中的一个比较常见的设计，但是, 虽然设计本身并不复杂，能够通过Pose Guider生成稳定连续的角色动画/视频也是很难的。之前的工作解决的也都不是很理想。**可以说，AnimateAnyone第一次把Pose2Video做到了80分的水平！**

- **Temporal attention Layer：** 其作用是确保视频帧间的**平滑过渡和连续性**，解决角色动画生成时的稳定性(stability)和连续性(continuity)。

另外,，还想和大家分享下作者对于训练策略的思考：Animate Anyone首先是基于Diffusion text-to-image框架进行修改，把prompt的特征(bs, 77, 768)部分改成clip特征，然后适配多帧输入以用于视频生成。

其训练策略是**二阶段**(two-stage)的，stage 1阶段重点研究没有时间层的单个视频帧(single video frame)，在得到一个稳定的基模后，在stage 2阶段引入temporal layer，相当于在stage 1阶段的基础上进一步finetune和优化模型来进行video synthesis(视频合成)。

> 青稞🤔认为, 这个逻辑是视频稳定性的核心, 后续小伙伴也可以参考Animate Anyone的方法来进行分析和设计。

### 看看效果

<video  autoplay="autoplay" src="https://humanaigc.github.io/animate-anyone/static/videos/demo11.mp4" /></video>

<video  autoplay="autoplay" src="https://humanaigc.github.io/animate-anyone/static/videos/demo3.mp4" /></video>

- 值得注意的是：本方法相比同期的工作，如字节跳动的MagicDance，生成的角色动画视频稳定性显著提升。效果展示

![](AnimateAnyone/animateanyone4.gif)

### 缺陷和不足

虽然AnimateAnyone非常好, 但还是有一些可以优化的空间.

- 该模型有时难以为**生成**稳定的**手部运动生成**结果，从而导致**扭曲(distortion)**和**运动模糊(motion blur)**。

- 由于参考图一般是正视图，对于背后或者unseen part的生成可能不是很理想。(需要base model有更强的生成人体的prior)

- 由于引入DDPM，导致需要引入多步采样，推理时间和训练成本相比GAN等生成方法**较高**。

### 作者

![image-20231202101954286](AnimateAnyone/image-20231202101954286-1483599.png)

一作是Li Hu，硕士毕业于浙江大学，现从事video diffusion相关研究和业务工作；Li Hu主要是做video segmentation和image segmentation等相关方向的研究。



![image-20231202102010872](AnimateAnyone/image-20231202102010872-1483612.png)

二作Xin Gao，硕士毕业于浙江大学；主要做基于图像的2D虚拟试衣等研究方向。

Ke Sun，HRNet（4-5年前很火的Backbone）一作，目前HRNet的Google Scholar citation已经来到了3000+，妥妥的大佬了。

阿里巴巴通义实验室XR Lab是Liefeng Bo领导的团队，旗下主要方向有2D/3D数字人，3D AIGC(人、物、场重建和生成)，AR/VR电商等板块。
