import{g as f,h as d,i as x,j as c,r as S,_ as y,o as I,c as v,n as z}from"./B-mN8qLx.js";const g=f({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u,{expose:p}){p(),d(e=>({"5f6f638d-iconUrl":l.value}));const t=x(),n=u,a=c(()=>{var e,o;return(o=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&o[n.name]?t.nuxtIcon.aliases[n.name]:n.name}),i=c(()=>S(a.value)),l=c(()=>{var s,r;const e=(r=(s=t.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${i.value.prefix}/${i.value.name}.svg')`}),m=c(()=>{var o,s,r;if(!n.size&&typeof((o=t.nuxtIcon)==null?void 0:o.size)=="boolean"&&!((s=t.nuxtIcon)!=null&&s.size))return;const e=n.size||((r=t.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e}),_={appConfig:t,props:n,iconName:a,resolvedIcon:i,iconUrl:l,sSize:m};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}});function b(u,p,t,n,a,i){return I(),v("span",{style:z({width:n.sSize,height:n.sSize})},null,4)}const U=y(g,[["render",b],["__scopeId","data-v-5f6f638d"],["__file","/Volumes/one/dev/vue/nuxt-storybook-temp/storybook-nuxtui/node_modules/.pnpm/nuxt-icon@0.6.10_nuxt@3.11.2_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_@types+node@18.19_te2lgubxyixa2zhuq3rm3ofvqy/node_modules/nuxt-icon/dist/runtime/IconCSS.vue"]]);export{U as default};
//# sourceMappingURL=DPzph-1r.js.map
