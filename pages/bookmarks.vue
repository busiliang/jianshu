<template>
  <div>
  <my-header></my-header>
  <div class="my-container bookmarks">
      <div class="row">
          <div class="main">
              <img src="../static/bookmarks.png" alt="" class="tag-banner">
              <!--收藏列表-->
              <ul class="nost-list">
                  <li>
                      <div class="content">
                          <div class="author">
                              <nuxt-link to="/u/123" class="avatar">
                              <img src="../assets/img/zhang.jpg" alt="">
                              </nuxt-link>
                              <div class="info">
                                  <nuxt-link to="/u/123" class="nickname">风雪之人</nuxt-link>
                                   <span class="time">前天 15:31</span>
                              </div>
                          </div>
                          <nuxt-link to="/p/123" class="title">
                              妈妈的拿手菜
                          </nuxt-link>
                          <p class="abstract">
                              美食，是人最深的乡愁。一个人长大后，总有些滋味，只能停留在回忆里。无论去过多少地方，吃过多少珍馐佳肴，你最怀念的，还是妈妈做的家常菜。因为，时光将味道烙在了我们的味蕾上，随生...
                          </p>
                          <div class="meta">
                              <nuxt-link to="/p/123">
                              <i class="fa fa-eye"></i> 84
                              </nuxt-link>
                              <nuxt-link to="/p/123">
                              <i class="fa fa-comment"></i> 5
                              </nuxt-link>
                              <span>
                                  <i class="fa fa-heart"></i> 30
                              </span>
                              <a href="javascript:void(0)" class="cancel">取消收藏</a>
                          </div>
                      </div>
                  </li>
                  <li class="have-img">
                       <nuxt-link to="/p/123" class="wrap-img">
                       <img src="../assets/img/jimu.jpg" alt="" >
                       </nuxt-link>
                    <div class="content">
                          <div class="author">
                              <nuxt-link to="/u/123" class="avatar">
                              <img src="../assets/img/xicheng.png" alt="">
                              </nuxt-link>
                              <div class="info">
                                  <nuxt-link to="/u/123" class="nickname">甜到齁的白日梦</nuxt-link>
                                   <span class="time">02.07 03:00</span>
                              </div>
                          </div>
                          <nuxt-link to="/p/123" class="title">
                              决定你前途的，不是学历，而是能力
                          </nuxt-link>
                          <p class="abstract">
                              昨天晚上，正在我准备睡觉的时候，小武给我打来电话说：“我这辈子算是毁在学历上了。” 聊了许久，我才知道，小武去应聘培训机构的老师被拒绝了。那家培训机构的对学历的要求是98...
                          </p>
                          <div class="meta">
                              <nuxt-link to="/p/123">
                              <i class="fa fa-eye"></i> 184
                              </nuxt-link>
                              <nuxt-link to="/p/123">
                              <i class="fa fa-comment"></i> 56
                              </nuxt-link>
                              <span>
                                  <i class="fa fa-heart"></i> 730
                              </span>
                              <a href="javascript:void(0)" class="cancel">取消收藏</a>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  </div>
</template>
<script>
import MyHeader from "~/components/MyHeader";
export default {
  name:'bookmarks',
  components:{
      MyHeader
  }
}
</script>
<style scoped>
.bookmarks .main{
    padding-top: 30px;
    margin-left: 12.5%;
    width: 75%;
}
.bookmarks .main .tag-banner{
    width: 100%;
    margin-bottom: 30px;
    min-height: 100px;
}
.bookmarks .main .nost-list li{
    position: relative;
    width: 100%;
    margin: 0 0 17px;
    padding: 0 2px 17px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
} 
.bookmarks .main .nost-list .author{
 margin-bottom: 7px;
 font-size: 13px;
}
.bookmarks .main .nost-list .author .avatar{
    display: inline-block;
    margin-right: 5px;
}
.bookmarks .main .nost-list .author .info{
    display: inline-block;
    vertical-align: middle;
}
.nost-list .author .info span{
    padding-left: 3px;
    color: #969696;

}
.nost-list .content .title{
 margin-bottom: 4px;
 font-size: 18px;
 font-weight: 700;
 display: inline-block;
}
.nost-list .abstract{
    margin-bottom: 8px;
    font-size: 13px;
    line-height: 24px;
}
.nost-list .meta{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #b4b4b4;
}
.nost-list .meta a{
    margin-right: 10px;
}
.nost-list .meta span{
    margin-right: 10px;
}
.nost-list li.have-img{
    min-height: 140px;
}
.nost-list .have-img .wrap-img{
    position: absolute;
    right: 0;
    top:50%;
    margin-top: -68px;
    width: 150px;
    height: 120px;
}
.nost-list .have-img .wrap-img img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
}
.nost-list .have-img>div{
    padding-right: 160px;
}
</style>
