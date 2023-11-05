# 关于本项目 

赴日工作-前端学习小组项目源码，作业，任务相关。


## 关于作业提交

### 分支介绍

**main**

该分支用于保管和发布成员提交的稳定代码，包括作业源码和任意其他已完成源码。

**docs**

该分支用于保管成员内部编写分享的在线文档。

**gh-pages**

该分支用于自动发布运行docs分支的文档。

### 提交流程

1. 拉取当前库到本地

使用终端或编辑器：

```
git clone git@github.com:168-platform/frontend-study.git
```
2. 新建分支

```
git branch xxx
```
3. 完成作业（添加或修改）

4. 添加并提交
```
// 添加当前文件夹及所有子文件夹
git add .

// 或添加某个文件
git add src/index.html

```
5. 提交并推送
```
// 先提交
git commit -m "Add index.html"

// 第一次推送，远程由于没有你本地刚新建的分支，所以采用
git push origin xxx:xxx

// 之后推送，直接使用
git push
```
6. 访问GitHub官网，查看commits，提交review

7. Review完成后
  a. 更新Github Projects状态
  b. 更新Roadmap状态


## 成员简介

**辅导员**

职责：主要就是定学习计划，跟踪，技术指导，反馈答疑。

**学员**

职责：负责完成学习计划，完成作业，完成实战任务和产出知识文档。

<!-- readme: contributors -start -->
<!-- readme: contributors -end -->
