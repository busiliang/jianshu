<template>
    <div>
        <ul>
            <li v-for="(nav,index) in navs" :key="index" ref="aside_ref">
                <nuxt-link :to="nav.url"><i :class="nav.icon"></i><span>{{nav.title}}</span></nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "my-setting",
        data(){
            return {
                navs: [
                    {url:"/settings/basic",icon: "fa fa-navicon", title: "基础设置" },
                    {url:"/settings/profile",icon: "fa fa-address-card-o", title: "个人资料" },
                    {url:"/settings/misc",icon: "fa fa-gear", title: "账号管理" },
                ]
            }
        },
        components:{


        },

    }
</script>

<style scoped>
    ul li{
        line-height: 20px;
    }
    ul li.active a{
        background-color: #f0f0f0;
        border-radius: 4px;
    }
    ul a{
        height: auto;
        padding: 10px 25px;
        line-height: 30px;
        display: block;
        font-size: 15px;
    }
    ul i{
        margin-right: 15px;
        font-size: 24px;
        color: rgb(160,160,160);
        vertical-align: middle;
    }
    ul li:hover{
        background-color: #f0f0f0;
        border-radius: 4px;
    }

    ul span{
        font-size: 15px;
        vertical-align: middle;
    }

</style>