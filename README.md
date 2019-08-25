# OJ

---

## how to use

### install dependence
```bash
npm install
```

## setup Environment

### start a EC2 instance (ubuntu 18.04 LTS) in AWS

### update package
```bash
sudo apt-get update && sudo apt-get upgrade
```

## install node12

```bash
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash  -
sudo apt-get install nodejs
```
 
### install fish shell
```bash
sudo apt-add-repository ppa:fish-shell/release-3
sudo apt-get update
sudo apt-get install fish
# change default shell
which fish
sudo chsh ubuntu -s /usr/bin/fish
```

### update git
```bash
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update
sudo apt-get install git -y
```

### JS

```bash
npm init                                                        # 初始化项目
npm install --save mnemonist                                    # 算法库
npm install --save-dev @babel/core @babel/cli @babel/preset-env # 设置 babel
npm install --save-dev babel-register                           # 注册器
npm install --save-dev babel-polyfill                           # 垫片库
npm install --save-dev @babel/node                              # babel-node
npm install --save-dev chai                                     # 断言库
npm install --save-dev mocha                                    # 测试框架
npm install --save-dev mochawesome                              # 测试report
npm install --save-dev eslint                                   # Lint           
#----------------------------------------------------- 
npm install --save-dev @babel/plugin-proposal-export-default-from \
@babel/plugin-proposal-logical-assignment-operators               \
@babel/plugin-proposal-optional-chaining                          \
@babel/plugin-proposal-pipeline-operator                          \
@babel/plugin-proposal-nullish-coalescing-operator                \
@babel/plugin-proposal-do-expressions                             \
@babel/plugin-proposal-decorators                                 \
@babel/plugin-proposal-function-sent                              \
@babel/plugin-proposal-export-namespace-from                      \
@babel/plugin-proposal-numeric-separator                          \
@babel/plugin-proposal-throw-expressions                          \
@babel/plugin-syntax-dynamic-import                               \
@babel/plugin-syntax-import-meta                                  \
@babel/plugin-proposal-class-properties                           \
@babel/plugin-proposal-json-strings

npx babel-upgrade --write
```

### Dependence & Script

- package.json

### Lint

- .eslintrc.json

### Babel

- .babelrc

### VSCode Debuger

- .vscode/launch.json

### VSCode WorkSpace

- oj.code-workspace