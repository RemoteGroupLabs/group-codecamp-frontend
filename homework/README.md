
# 关于作业
> 此文档方便学员作业提交时参考使用，如果还有其他疑问，在“赴日前端-辅导群”咨询同学或老师。

所有作业：会议周数+主题 + .html后缀命名.

## 作业完成流程

1. 学员课程结束后，更新最新的库到本地

```
git fetch
```

2. 更新后，在自己的分支上合并dev分支代码

```
git merge --no-ff dev
```
> git merge 用户git分支代码合并，上面代码意思是合并dev分支到当前分支

3. 查看0-homework文件夹下对应周的作业，并复制到自己的homework文件夹下

> 自己分支如果没有homework文件夹，使用`mkdir homework`创建。

比如：

命令行复制

```
cp 0-homework/Week1-Google-practice.html homework/Week1-Google-practice.html
```

手动复制
略

4. 完成开发

5. 提交到自己分支到对应远程分支

第一步，添加需要提交的文件

```
git add homework/Week1-Google-practice.html
```

第二步，确认提交文件

```
git commit -m "Finish week 1 homework"
```
> `-m` 后面的字符串是为了简单描述你当前提交操作，方便后面追溯，比如定位某个需求的代码。

第三步，推送到远程分支。

> 前面两步，只是完成了代码在本地的合并步骤，但是还没有推送到远程服务器上，为方便其他人也能访问我们的代码，需要远程推送。

使用`git push`命令

```
git push origin main
```

6. (可选) 访问GitHub网站，切换自己分支，查看代码是否成功提交。
7. (可选) 发起代码review。