import { Author, Msgboard } from 'components/'

import React from 'react'
import SubitleBox from './subtitleBox'
import TitleBox from './titleBox'

const PATH = 'resume'
export default class Resume extends React.Component {

  render() {
    return (
      <div>
        <article>
          <h1>简历</h1>
          <Author time='2017.06.01' path={PATH} />
          <TitleBox title='李白翔'>
            <ul>
              <li>2015 届 本科</li>
              <li>东北大学 软件工程</li>
              <li>15040051932</li>
              <li><a href='mailto:poorbug@126.com'>poorbug@126.com</a></li>
            </ul>
          </TitleBox>
          <TitleBox title='经历'>
            <ul>
              <li>高一开始学习算法与数据结构，高二进入 NOIP 决赛</li>
              <li>本科四年全外教授课（国际班）</li>
              <li>毕业半年成为团队核心成员</li>
              <li>2015 年在东软熙康获得特殊加薪</li>
              <li>2016 年独自负责野兽骑行所有前端业务近半年</li>
              <li>2016 年野兽骑行优秀员工</li>
            </ul>
          </TitleBox>
          <TitleBox title='项目经验'>
            <SubitleBox title='掌上云医院' link='http://www.xikang.cn/ch/commons/downloadApp.html'>
              <li>2015 年 7 月  至  2016 年 3 月</li>
              <li>东软熙康健康科技有限公司</li>
              <li>Java 后端 & Hybrid 前端</li>
            </SubitleBox>
            <SubitleBox title='Frimap' link='http://www.wandoujia.com/apps/com.frimap'>
              <li>2015 年 9 月  至  2016 年 3 月</li>
              <li>产品 & Ionic 前端</li>
              <li>和小伙伴工作之余开发的应用</li>
            </SubitleBox>
            <SubitleBox title='野兽骑行官网' link='https://www.speedx.com/'>
              <li>2016 年 4 月 至 今</li>
              <li>原生 & React</li>
              <li>侧重动画特效</li>
              <li>SEO & GA & GTM</li>
            </SubitleBox>
            <SubitleBox title='野兽骑行 Hybrid 工程' link='https://www.speedx.com/app/activity/list.html'>
              <li>2016 年 4 月 至 今</li>
              <li>原生 & React</li>
            </SubitleBox>
            <SubitleBox title='野兽骑行电商平台' link='https://shop.speedx.com/'>
              <li>2016 年 12 月 至 今</li>
              <li>React</li>
              <li>侧重业务逻辑</li>
            </SubitleBox>
            <SubitleBox title='野兽骑行车店审核系统'>
              <li>2016 年 8 月</li>
              <li>React</li>
            </SubitleBox>
          </TitleBox>
          <TitleBox title='其他'>
            <ul>
              <li>喜欢做饭</li>
              <li>喜欢骑车</li>
              <li>热爱生活</li>
            </ul>
          </TitleBox>
        </article>
        <Msgboard path={PATH} />
      </div>
    )
  }
}