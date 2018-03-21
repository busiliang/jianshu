import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7c631751 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _587260ea = () => import('..\\pages\\sign-up.vue' /* webpackChunkName: "pages/sign-up" */).then(m => m.default || m)
const _2788d108 = () => import('..\\pages\\bookmarks.vue' /* webpackChunkName: "pages/bookmarks" */).then(m => m.default || m)
const _43dc0a74 = () => import('..\\pages\\sign-in.vue' /* webpackChunkName: "pages/sign-in" */).then(m => m.default || m)
const _13f517f8 = () => import('..\\pages\\notifications\\chats.vue' /* webpackChunkName: "pages/notifications-chats" */).then(m => m.default || m)
const _3b63382a = () => import('..\\pages\\notifications\\requests.vue' /* webpackChunkName: "pages/notifications-requests" */).then(m => m.default || m)
const _d4a6d04e = () => import('..\\pages\\settings\\blacklist.vue' /* webpackChunkName: "pages/settings-blacklist" */).then(m => m.default || m)
const _5b86d776 = () => import('..\\pages\\subscriptions\\timeline.vue' /* webpackChunkName: "pages/subscriptions-timeline" */).then(m => m.default || m)
const _4c4d5961 = () => import('..\\pages\\settings\\weibo-auth.vue' /* webpackChunkName: "pages/settings-weibo-auth" */).then(m => m.default || m)
const _3100c1b4 = () => import('..\\pages\\settings\\reward-setting.vue' /* webpackChunkName: "pages/settings-reward-setting" */).then(m => m.default || m)
const _77e76bca = () => import('..\\pages\\notifications\\comments.vue' /* webpackChunkName: "pages/notifications-comments" */).then(m => m.default || m)
const _8082a9ea = () => import('..\\pages\\notifications\\follows.vue' /* webpackChunkName: "pages/notifications-follows" */).then(m => m.default || m)
const _0b6f772c = () => import('..\\pages\\settings\\basic.vue' /* webpackChunkName: "pages/settings-basic" */).then(m => m.default || m)
const _04182b65 = () => import('..\\pages\\settings\\profile.vue' /* webpackChunkName: "pages/settings-profile" */).then(m => m.default || m)
const _0cbfd860 = () => import('..\\pages\\settings\\misc.vue' /* webpackChunkName: "pages/settings-misc" */).then(m => m.default || m)
const _e897b1b6 = () => import('..\\pages\\notifications\\likes.vue' /* webpackChunkName: "pages/notifications-likes" */).then(m => m.default || m)
const _7f607e6b = () => import('..\\pages\\u\\liked_notes.vue' /* webpackChunkName: "pages/u-likednotes" */).then(m => m.default || m)
const _83fa3d4a = () => import('..\\pages\\p\\_id.vue' /* webpackChunkName: "pages/p-id" */).then(m => m.default || m)
const _f91bd214 = () => import('..\\pages\\u\\_id.vue' /* webpackChunkName: "pages/u-id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _7c631751,
			name: "index"
		},
		{
			path: "/sign-up",
			component: _587260ea,
			name: "sign-up"
		},
		{
			path: "/bookmarks",
			component: _2788d108,
			name: "bookmarks"
		},
		{
			path: "/sign-in",
			component: _43dc0a74,
			name: "sign-in"
		},
		{
			path: "/notifications/chats",
			component: _13f517f8,
			name: "notifications-chats"
		},
		{
			path: "/notifications/requests",
			component: _3b63382a,
			name: "notifications-requests"
		},
		{
			path: "/settings/blacklist",
			component: _d4a6d04e,
			name: "settings-blacklist"
		},
		{
			path: "/subscriptions/timeline",
			component: _5b86d776,
			name: "subscriptions-timeline"
		},
		{
			path: "/settings/weibo-auth",
			component: _4c4d5961,
			name: "settings-weibo-auth"
		},
		{
			path: "/settings/reward-setting",
			component: _3100c1b4,
			name: "settings-reward-setting"
		},
		{
			path: "/notifications/comments",
			component: _77e76bca,
			name: "notifications-comments"
		},
		{
			path: "/notifications/follows",
			component: _8082a9ea,
			name: "notifications-follows"
		},
		{
			path: "/settings/basic",
			component: _0b6f772c,
			name: "settings-basic"
		},
		{
			path: "/settings/profile",
			component: _04182b65,
			name: "settings-profile"
		},
		{
			path: "/settings/misc",
			component: _0cbfd860,
			name: "settings-misc"
		},
		{
			path: "/notifications/likes",
			component: _e897b1b6,
			name: "notifications-likes"
		},
		{
			path: "/u/liked:notes?",
			component: _7f607e6b,
			name: "u-likednotes"
		},
		{
			path: "/p/:id?",
			component: _83fa3d4a,
			name: "p-id"
		},
		{
			path: "/u/:id?",
			component: _f91bd214,
			name: "u-id"
		}
    ],
    fallback: false
  })
}
