<template>
  <div>
    <my-header></my-header>
    <div class="notification my-container">
      <div class="row">
        <div class="aside col-4" >
          <my-aside></my-aside>
        </div>
        <div class="main col-8" >
          <div class="menu">全部简书</div>
          <ul class="jianxin-list ">
            <li class="clearfix" v-for="(chat,index) in chats" :key="index">
              <div class="pull-right">
                <span class="time">{{chat.last_message_created_at |formdate}}</span>
                 <i class="fa fa-angle-down" @click.stop="is_down(index)"></i>
                 <!--下拉框-->
                  <ul class="dropdown-menu" v-if="downIndex.includes(index)">
                    <li v-for="(down,index) in dropdowns" :key="index">
                      <a href="javascript:void(0)">
                        <i :class="down.icon"></i>
                         {{down.title}}
                      </a>
                    </li>
                  </ul>
              </div>
              <nuxt-link to="/u/123" class="avatar">
              <img :src="chat.user.avatar_source" alt="">
              </nuxt-link>
               <div class="info">
                <nuxt-link to="/u/123" class="name">
                 {{chat.user.nickname}}
              </nuxt-link>
              <a href="javascript:void(0)" class="wrap">
                <p>{{chat.last_message_content}}</p>
              </a>
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
import MyAside from '~/components/MyAside';
export default {
  name: "chats",
  data(){
    return{
      chats:[
        {
          id:578894688,
          last_message_content:"你怎么什么都不会？",
          last_message_created_at:1517802828368,
          user:{
            id:9498139,
            nickname:"云卷云舒",
            avatar_source:"/89731766ca20.jpg",
            is_blocking_user:false
          }
        },
             {
          id:578894690,
          last_message_content:"我想去南京秦淮河 夫子庙玩 想不想一起去？",
          last_message_created_at:1517802828368,
          user:{
            id:9498139,
            nickname:"云卷云舒",
            avatar_source:"/13-394c31a9cb492fcb39c27422ca7d2815.jpg",
            is_blocking_user:false
          }
        }
      ],
      dropdowns:[
        {
          icon:'fa fa-trash-o',
          title:'删除会话'
        },
        {
          icon:'fa fa-ban',
          title:'加入黑名单'
        },
        {
          icon:'fa fa-flag-o',
          title:'举报用户'
        }
      ],
      downIndex:[],
    }
  },
  methods:{
    is_down(value){
     let index=this.downIndex.indexOf(value);
      if(this.downIndex.includes(value)){
        this.downIndex.splice(index,1);
      }else{
       this.downIndex.push(value);
      }
      //判断长度
      if(this.downIndex.length>=2){
        this.downIndex.splice(0,1);
      }
    },
   handClose(){
      this.downIndex.splice(0,this.downIndex.length);
   }
  },
    mounted(){
      document.addEventListener('click',this.handClose);
   let dom1=document.querySelector('.aside ul li:nth-of-type(2)');
   dom1.className="asideActive";
   document.querySelector('.nav-list li:nth-of-type(3) a').className="headerActive";
  },
  filters:{
    formdate(value){
      let now = new Date(value);
      let month = (now.getMonth() + 1).toString().padStart(2, 0);
      let date = now.getDate().toString().padStart(2, 0);
      let hour = now.getHours().toString().padStart(2, 0);
      let minute = now.getMinutes().toString().padStart(2, 0);
      return `${month}.${date} ${hour}:${minute}`;
    }
  },
  components: {
    MyHeader,
    MyAside
  }
};
</script>
<style scoped>
.notification .aside {
  margin-top: 30px;
  padding: 0 0 30px;
  max-width: 280px;
  overflow: auto;
}
.notification .main {
  margin-top: 30px;
  padding-left: 30px;
}
.notification .main .menu {
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
}
.notification .main .jianxin-list li{
position: relative;
border-top: 1px solid #f0f0f0;
}
.notification .main .jianxin-list .pull-right{
  margin: 20px 20px 0 0;
  font-size: 13px;
}
.notification .main .jianxin-list .pull-right .time{
  color:#9b9b9b;
}
.notification .main .jianxin-list .pull-right i{
  color: #9b9b9b;
  margin-left: 5px;
  cursor: pointer;
}
.notification .main .jianxin-list .pull-right .dropdown-menu{
  top: auto;
  left: auto;
  right: 15px;
  color: #333;
  display: block;
  min-width: inherit;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}
.notification .main .jianxin-list .pull-right .dropdown-menu li{
  border: none;
  line-height: 20px;
}
.notification .main .jianxin-list .pull-right .dropdown-menu a:hover{
  background-color: #f5f5f5;
}
.notification .main .jianxin-list .pull-right .dropdown-menu a{
  display: block;
  font-weight: 400;
  color: #333;
  clear: both;
  line-height: 1.4;
  padding: 10px 20px;
  white-space: nowrap;
}
.notification .main .jianxin-list .pull-right .dropdown-menu i{
  margin-right: 10px;
  color: #333;
}
.notification .main .jianxin-list .avatar{
 float: left;
 width: 48px;
 height: 48px;
 margin: 20px 10px 20px 20px;
}
.notification .main .jianxin-list .name{
  position:absolute;
  top: 25px;
  font-size: 15px;
}
.notification .main .jianxin-list .wrap{
  display:block;
  padding: 20px 20px 20px 0;
  min-height:80px;
}
.notification .main .jianxin-list p{
  margin-top:28px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}

</style>
