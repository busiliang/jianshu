<!-- 组件的模板 -->
<template>
    <div>
        <my-header></my-header>
        <div class="index my-container">
            <div class="row">
                <div class="col-8 main">
                    <!--banner-->
                    <div v-swiper:mySwiper="swiperOption" class="banner" @mouseover="bannerBtn" @mouseout="bannerDtn">
                         <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="banner in banners">
                                <img :src="banner">
                            </div>
                        </div>

                        <div class="swiper-pagination swiper-pagination-white" v-show="true"></div>
                        <div class="swiper-button-prev swiper-button-white" v-show="bannerObj"></div>
                        <div class="swiper-button-next swiper-button-white" v-show="bannerObj"></div>
                    </div>
                    <!--热门专题-->
                    <div class="recommend-collection">
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/1.jpg" alt="">
                            <span>故事</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/2.jpg" alt="">
                            <span>手绘</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/3.jpg" alt="">
                            <span>读书</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/4.jpg" alt="">
                            <span>社会热点</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/5.jpg" alt="">
                            <span>人文社科</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/3.jpg" alt="">
                            <span>读书</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/1.jpg" alt="">
                            <span>故事</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/4.jpg" alt="">
                            <span>社会热点</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../static/collection/5.jpg" alt="">
                            <span>人文社科</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="more-hot-collection">
                            更多热门专题
                            <i class="fa fa-angle-right"></i>
                        </nuxt-link>
                    </div>
                    <!--分割线-->
                    <div class="split-line"></div>
                        <!--文章列表-->
                        <div class="list-container">
                            <ul class="note-list">
                                <li class="have-img">
                                    <nuxt-link to="/p/123" class="wrap-img">
                                        <img src="../static/article/huanxiang.jpg" alt="">
                                    </nuxt-link>
                                    <div class="content">
                                        <div class="author">
                                            <nuxt-link to="" class="avatar"><img src="../assets/img/xicheng.png" alt=""></nuxt-link>
                                            <div class="info">
                                                <nuxt-link to="/u/123" class="nickname">一只西城</nuxt-link>
                                                <span class="time">42分钟</span>
                                            </div>
                                        </div>
                                        <nuxt-link class="title" to="/p/123">
                                            #还乡手记#一个大学生的返乡思考
                                        </nuxt-link>
                                        <p class="abstract">
                                            01 没味道的春节 春节，回老家后，我最常听到的话是：“没年味了。”“过年没意思了。”“如果不是老人还在世，谁回老家？”文艺一点儿的，会说：“融不进的城市，回不去的乡愁。” ...
                                        </p>
                                        <div class="meta">
                                            <nuxt-link to="/collection/123" class="collection-tag">
                                                社会热点
                                            </nuxt-link>
                                            <nuxt-link to="/p/123" class="tag">
                                                <i class="fa fa-eye"> 106</i>
                                            </nuxt-link>
                                            <nuxt-link to="/p/123" class="tag">
                                                <i class="fa fa-comment"> 14</i>
                                            </nuxt-link>
                                            <span>
                                                <i class="fa fa-heart"> 13</i>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                    
                                    <li class="have-img">
                                            <nuxt-link to="/p/123" class="wrap-img">
                                                <img src="../static/article/nvzi.jpg" alt="">
                                            </nuxt-link>
                                            <div class="content">
                                                <div class="author">
                                                    <nuxt-link to="" class="avatar"><img src="../assets/img/zhang.jpg" alt=""></nuxt-link>
                                                    <div class="info">
                                                        <nuxt-link to="/u/123" class="nickname">张女子</nuxt-link>
                                                        <span class="time">7小时前</span>
                                                    </div>
                                                </div>
                                                <nuxt-link class="title" to="/p/123">
                                                    愿得一心人，白首不相离
                                                </nuxt-link>
                                                     <p class="abstract">
                                                         我真的渴望一生都去钟爱一个男人，无论贫穷还是富贵，两个人始终不离不弃。 01.和暴力丈夫离婚 我和丈夫离婚时，孩子已经上小学了。离婚前，亲朋们都劝我说，不沾花惹草、对家庭能负...
                                                     </p>
                                                <div class="meta">
                                                    <nuxt-link to="/collection/123" class="collection-tag">
                                                        故事
                                                    </nuxt-link>
                                                    <nuxt-link to="/p/123" class="tag">
                                                        <i class="fa fa-eye"> 1914</i>
                                                    </nuxt-link>
                                                    <nuxt-link to="/p/123" class="tag">
                                                        <i class="fa fa-comment"> 61</i>
                                                    </nuxt-link>
                                                    <span>
                                                        <i class="fa fa-heart"> 75</i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                                <div class="content">
                                                    <div class="author">
                                                        <nuxt-link to="" class="avatar"><img src="../assets/img/jimu.jpg" alt=""></nuxt-link>
                                                        <div class="info">
                                                            <nuxt-link to="/u/123" class="nickname">极目远眺</nuxt-link>
                                                            <span class="time">1小时前</span>
                                                        </div>
                                                    </div>
                                                    <nuxt-link class="title" to="/p/123">
                                                        今生为你歌唱
                                                    </nuxt-link>
                                                    <p class="abstract">
                                                        我愿化作山谷的溪水 拉着春天的阳光 沿途 收割两岸 一朵又一朵桃花的芬芳 酿成一曲悠扬的歌谣 当月亮升起时 踩着蛙鸣的节奏 在你的窗外 轻声歌唱 不知道 深情的歌声 像瀑布...
                                                          </p>
                                                    <div class="meta">
                                                        <nuxt-link to="/collection/123" class="collection-tag">
                                                            睡在诗歌里
                                                        </nuxt-link>
                                                        <nuxt-link to="/p/123" class="tag">
                                                            <i class="fa fa-eye"> 326</i>
                                                        </nuxt-link>
                                                        <nuxt-link to="/p/123" class="tag">
                                                            <i class="fa fa-comment"> 25</i>
                                                        </nuxt-link>
                                                        <span>
                                                            <i class="fa fa-heart"> 64</i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                            </ul>
                        </div>
                        <!--阅读更多-->
                        <nuxt-link to="/" class="load-more">阅读更多</nuxt-link>   
                 <!--底部-->
                  <footer>
                     <ul class="about">
                      <li v-for="(a,index) in abouts" :key="index"><nuxt-link to="">{{a.name}}</nuxt-link></li>
                    </ul>
                  </footer>
                    </div>
                <div class="col-4 aside">
                    <div class="board">
                        <nuxt-link to="/">
                            <img src="../assets/img/1.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/2.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/3.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/4.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/5.png" alt="">
                        </nuxt-link>
                    </div>
                    <!--下载-->     
                    <a href="javascript:void(0)" class="download" @mouseover="downMe" @mouseout="downOut">
                      <img src="../assets/img/about.png" alt="" class="qrcode">
                       <span>关于作者 <i class="fa fa-angle-right"></i></span>
                    </a>
                    <div class="suspend" v-show="downObj">
                    <div class="popover"></div>
                    <img src="../assets/img/GitHub.png" alt="" class="me">
                    <div class="san"></div>
                    </div>
                    <!--推荐作者-->
                    <div class="recommend-author">
                        <div class="title">
                            <span>推荐作者</span>
                            <a class="page-change" href="javascript:void(0)" @click="rotate">
                                <i class="fa fa-refresh" ref="refresh"></i>
                                换一批
                            </a>
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">云卷云舒</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                              <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">云卷云舒</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                              <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">云卷云舒</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                              <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">云卷云舒</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                              <li>
                                <nuxt-link to="" class="avatar">
                                    <img src="../assets/img/user.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="" class="follow">
                                  <i class="fa fa-plus-square-o"></i>
                                    关注
                                </nuxt-link>
                                   <nuxt-link class="name" to="">云卷云舒</nuxt-link>
                                <p>写了70.6k字 · 10.9k喜欢</p>
                            </li>
                        </ul>
                        <a href="javascript:void(0)" class="find-more">
                             查看全部 <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<!-- 组件的模型 -->
<script>
import MyHeader from "~/components/MyHeader";
export default {
  // 组件的名称
  name: "Index",
  data() {
    return {
     downObj:false,
     bannerObj:false,
      banners: [
        "/banner1.jpg",
        "/banner2.jpg",
        "/banner3.jpg",
        "/banner4.jpg",
        "/banner5.jpg",
        "/banner6.jpg"
      ],
      abouts: [
        { name: "不思量自难忘的伪简书" },
        { name: "不思量的手机号：13203878630" },
        { name: "自难忘的GitHub账号: www.github.com/busiliangzinanwang" }
      ],
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        //disableOnInteraction,如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      deg: 360
    };
  },
  mounted(){
      document.querySelector('.nav-list li:first-child a').className="headerActive";
  },
  components: {
    MyHeader
  },
  methods: {
    rotate() {
      this.$refs.refresh.style.transform = `rotate(${this.deg}deg)`;
      this.deg = this.deg + 360;
    },
    downMe(){
      this.downObj=true;
    },
    downOut(){
      this.downObj=false;
    },
    bannerBtn(){
        this.bannerObj=true;
    },
    bannerDtn(){
        this.bannerObj=false;
    }
    
  }
};
</script>

<!-- 组件的样式 -->
<style>
.swiper-button-prev,
.swiper-button-next {
  background-color: rgba(0, 0, 0, 0.4) !important;
  border-radius: 4px;
}
</style>