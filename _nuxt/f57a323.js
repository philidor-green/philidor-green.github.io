(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{225:function(t,e,n){"use strict";n.r(e);var r=n(2),l=(n(32),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).only(["title","description","slug","created_at"]).sortBy("created_at","desc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=n(42),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"mb-5 text-xl"},[t._v("Hello! I'm a self-taught software engineer.\nI'm experienced in Web, Bot, API programming,\nCloud Deployment, AWS, K8S, blockchain Bitcoin and Ethereum.")]),t._m(0),e("p",{staticClass:"mb-5 text-xl"},[t._v("Some useful guides and tips:")]),e("div",{staticClass:"w-full divide-y-2 divide-gray-500 divide-dotted"},t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"py-2"},[e("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[e("div",{staticClass:"flex flex-col"},[e("h2",{staticClass:"text-lg font-semibold text-lightslategray-400"},[t._v(" "+t._s(article.title)+" ")]),e("h2",{staticClass:"text-xs font-semibold text-lightslategray-500"},[t._v(t._s(t.formatDate(article.created_at)))])]),e("p",{staticClass:"text-sm text-lightslategray-200"},[t._v(t._s(article.description))])])],1)})),0)])}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-5 text-sm text-lightslategray-200"},[e("a",{attrs:{target:"_blank",href:"/CV.pdf"}},[t._v("Download my CV")]),t._v(".")])}],!1,null,null,null);e.default=component.exports}}]);