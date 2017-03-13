import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class Getup extends React.Component {
  render() {
    const md = () => (
      '# React 博客工程 上线 \n \n' +

      '## bg \n' +
      '* 许久之前用 [react-redux-starter-kit](https://github.com/poorbug/react-redux-starter-kit) 做了一个静态的博客工程，名为 Blog \n' +
      '* 许久之前买了一个阿里云服务器 \n' +
      '* 许久之前买了两个域名 \n \n' +

      '## Initial state \n' +
      '* Blog 在本地可正常启动 \n' +
      '* 服务器全新状态 \n' +
      '* 域名全新状态没用过 \n' +
      '* 没有自己搞过服务器 \n \n' +

      '## 服务器初始设置 \n \n' +

      '![welcome](http://omhr7p9e5.bkt.clouddn.com/blog/welcome.png) \n \n' +

      '### 安装 Node \n \n' +
      '第一个想到的就是 Node ，从来没有搞过服务器，因此我连怎么装都不知道... \n \n' +

      '![without Node](http://omhr7p9e5.bkt.clouddn.com/blog/without%20node.png) \n \n' +

      '查了一下官方文档，和 Google 结果，据说 [apt-get](http://baike.baidu.com/item/apt-get) （我也是第一回知道 apt-get 这个东西）会安装一个非常老的版本，例如 2.x 之类的；6.x 与 7.x 的安装方法又不一样，于是向运维同学请教得知以下命令（有人指点果然省事许多）： \n' +
      '``` \n' +
      '## 都在 root 用户下执行 \n \n' +

      'apt-get update \n \n' +

      'apt-get install python-software-properties -y \n \n' +

      'curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - \n \n' +

      'apt-get install nodejs -y  # 这步时间比较久，因为是在 \n \n' +

      'node -v   # 查看一下版本，然后可以安装个 nvm 去切换版本 \n \n' +

      '--- \n' +
      '上面那个是 安装 7.7.1 的 node， 比较新，也可以直接 apt-get install nodejs ， 这样装的话，版本比较旧 \n' +
      '``` \n' +
      '到 curl 又卡住，curl 是什么东西... \n \n' +

      '### 安装 [curl](https://curl.haxx.se/) \n \n' +

      '![curl](http://omhr7p9e5.bkt.clouddn.com/blog/curl.png) \n \n' +

      '> command line tool and library  \n' +
      '> for transferring data with URLs \n \n' +

      '根据控制台提示 `apt-get install curl` , done.  \n' +
      '然后继续安装 Node , done. \n \n' +

      '### 安装 Git \n' +
      '`apt-get git` \n' +
      '但是博客工程是一个私有工程，需要给配秘钥，以前在开发 [Frimap](http://www.wandoujia.com/apps/com.frimap) 的时候给配过，但是早已忘记了，于是 [Google](https://docs.gitlab.com/ce/ssh/README.html) 之。 \n' +
      '> `ssh-keygen -t rsa -C "your.email@example.com" -b 4096` \n \n' +

      '![~/.ssh/id_rsa.pub](http://omhr7p9e5.bkt.clouddn.com/blog/ssh.png) \n' +
      '得到一串 ssh-rsa 开头的长串，粘到 Git 工程中的 Deploy keys 中；在服务器目录下： \n' +
      '``` \n' +
      'git clone xxxxxxxxxxxxx \n \n' +

      'git pull \n' +
      '``` \n' +
      '工程即可得。 \n \n' +

      '### 安装 [cnpm](https://npm.taobao.org/) \n' +
      '试着 `npm install` 一下，发现没有梯子果然很慢，甚至根本 install 不了... \n' +
      'cnpm 早有耳闻，一直有梯，从未用过。服务器搭梯子有点费劲，用 cnpm 还是比较省事儿的。 \n \n' +

      '> `npm install -g cnpm --registry=https://registry.npm.taobao.org   # 安装cnpm` \n \n' +

      '则，可 `cnpm install` \n' +
      '然后，`npm start` 工程成功启动。 \n \n' +

      '### 安装 [NGINX](https://nginx.org/en/) \n' +
      '之前搞公司前端测试服务器的时候曾经搞过一点 NGINX 相关的配置，但是只是很皮毛的东西，无非是写一些路由配置。 \n' +
      '[Google: nginx ubuntu 的第一个结果](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts)： \n' +
      '> `sudo apt-get install nginx` \n \n' +

      'NGINX, done.  \n \n' +

      '### 域名解析 \n' +
      '在阿里云的控制台中找域名解析，讲服务器 ip 填入即可。 \n \n' +

      '### NGINX 配置 \n' +
      '![配置文件路径](http://omhr7p9e5.bkt.clouddn.com/blog/nginx%20default.png) \n' +
      '``` \n' +
      'server { \n' +
      '  listen 80; \n' +
      '  server_name your.domain; \n' +
      '  location / { \n' +
      '   proxy_pass                          http://your ip address:port/; \n' +
      '    proxy_set_header Host               $host; \n' +
      '    proxy_set_header X-Real-IP          $remote_addr; \n' +
      '    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for; \n' +
      '    client_body_buffer_size             128k; \n' +
      '    client_max_body_size                1m; \n' +
      '    proxy_connect_timeout               90; \n' +
      '    proxy_send_timeout                  90; \n' +
      '    proxy_buffer_size                   4k; \n' +
      '    proxy_buffers                       4 32k; \n' +
      '    proxy_busy_buffers_size             64k; \n' +
      '  } \n' +
      '} \n' +
      '``` \n' +
      '保存，启动 NGINX。 \n' +
      '``` \n' +
      'sudo nginx \n \n' +

      'sudo nginx -s reload \n' +
      '``` \n \n' +


      '## 访问 \n' +
      '直到目前为止，我认为一切都OK了。 \n' +
      '* 域名已解析 \n' +
      '* `npm start` 已启动 \n' +
      '* NGINX 已配置并启动 `sudo nginx` \n \n' +

      '浏览器访问 poorbug.tech ，能够成功访问。✌️ \n \n' +

      '但是，当我晚上试着访问时，发现页面 502 了，目测是工程挂了，上去一看确实是，于是到公司的工程中翻找同事写的上线脚本，发现了一丝线索。 \n \n' +

      '> `run(\'forever start -c "npm run start-prod" .\')` \n \n' +

      '[forever](https://www.npmjs.com/package/forever) 又是什么鬼? \n' +
      '> A simple CLI tool for ensuring that a given script runs continuously (i.e. forever). \n \n' +

      '`$ [sudo] npm install forever -g` 如提示安装 \n \n' +

      'run command `forever start -c "npm run start-prod"` \n' +
      '报错！不解，Google 了一下，得到此解 [https://github.com/foreverjs/forever/issues/540](https://github.com/foreverjs/forever/issues/540)。  \n' +
      '细看后发现原来在同事的脚本中后面有一个 . 表示路径，被我忽略了。于是重新 run command ， done.  \n \n' +

      '## 尾声 \n' +
      '到此，Blog 工程跑起来了。感觉在这个过程中，**分而治之**的思想很好的解决了这个问题，把每一个工具都安装配置调试好了，那么工程就跑起来了。 \n' +
      '完美。 \n'
    )

    return (
      <ReactMarkdown source={ md() }/>
    )
  }
}
