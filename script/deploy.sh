# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 重新打包组件库

yarn build

# 打包生成静态文件
yarn run docs:build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'

# 部署到 https://.github.io/
git push -f git@github.com:Zhaojing-0221/zhaojing.github.io.git master
# https://github.com/Zhaojing-0221/zhaojing.github.io.git

# 提交所有代码到github
cd ../../../
git add .
git cm -m 'update'
git push
