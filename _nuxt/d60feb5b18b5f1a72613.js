(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{362:function(t,e,o){var content=o(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("29fc5700",content,!0,{sourceMap:!1})},394:function(t,e,o){"use strict";var n=o(362);o.n(n).a},395:function(t,e,o){(e=o(9)(!1)).push([t.i,".DataView{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;height:100%}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1278px){.DataView-Header{width:100%;flex-flow:row;flex-wrap:wrap;padding:0}}.DataView-DataInfo-summary{color:#4d4d4d;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px;white-space:nowrap}.DataView-DataInfo-summary-unit{font-size:.6em;width:100%}.DataView-DataInfo-date{font-size:12px;line-height:12px;color:grey;width:100%;display:inline-block}.DataView-Inner{display:flex;flex-flow:column;justify-content:space-between;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;font-size:1.25rem;line-height:1.5;font-weight:400;color:#4d4d4d}@media screen and (min-width:1278px){.DataView-Title{width:50%;margin-bottom:0}}.DataView-CardText{margin:16px 0}.DataView-CardTextForXS{margin-bottom:46px;margin-top:70px}.DataView-Embed{background-color:#f8f9fa}.DataView-Footer{font-size:12px;font-size:.75rem;padding:0!important;display:flex;justify-content:space-between;text-align:right;text-decoration:none;background-color:#fff!important}.DataView-Footer,.DataView-Footer .Permalink{color:grey!important}.DataView-Footer .OpenDataLink{text-decoration:none}.DataView-Footer .OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}.DataView-Footer .Footer-Left{text-align:left}.DataView-Footer .Footer-Right{position:relative;display:flex;align-items:flex-end}.DataView-Footer .Footer-Right .DataView-Share-Opener{cursor:pointer;margin-right:6px}.DataView-Footer .Footer-Right .DataView-Share-Opener>svg{width:auto!important}.DataView-Footer .Footer-Right .DataView-Share-Buttons{position:absolute;padding:8px;right:-4px;bottom:1.5em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;font-size:1rem;z-index:1}.DataView-Footer .Footer-Right .DataView-Share-Buttons>*{padding:4px 0}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:grey}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:12px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:grey}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%;width:30px;height:30px;font-size:30px;margin-left:4px;margin-right:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.b-link{color:#000}.DataView .overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.DataView .overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important}textarea{font:400 11px system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;width:100%;height:2.4rem}",""]),t.exports=e},481:function(t,e,o){"use strict";o.r(e);var n=o(0).a.extend({components:{PictureLoader:function(){return o.e(1).then(o.bind(null,499))}},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},info:{},loaded:{type:Boolean,default:!1},sourceFrom:{type:String,default:""},sourceLink:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,overlayContent:""}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'+this.permalink(!0,!0)+'" frameborder="0"></iframe>';return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyLink:function(){var t=this,e=this;navigator.clipboard.writeText(this.permalink(!0,!1)).then((function(){e.closeShareMenu(),e.overlayContent=t.$t("シェアリンクをコピーしました"),e.showOverlay=!0,setTimeout((function(){e.showOverlay=!1}),2e3)}))},copyEmbedCode:function(){var t=this,e=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){e.closeShareMenu(),e.overlayContent=t.$t("埋め込み用コードをコピーしました"),e.showOverlay=!0,setTimeout((function(){e.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=(new Date).getTime(),o="/cards/"+this.titleId;return embed?o+="?embed=true":o=o+"?t="+e,o=this.localePath(o),t&&(o=location.protocol+"//"+location.host+o),o},twitter:function(){var t="https://twitter.com/intent/tweet?text="+this.title+" / "+this.$t("北海道")+" "+this.$t("新型コロナウイルス{mobileBreak}まとめサイト",{mobileBreak:""})+"&url="+this.permalink(!0)+"&hashtags=JUST道IT,StopCovid19JP,COVID19Japan";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink(!0);window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink(!0);window.open(t)}}}),r=(o(394),o(14)),l=o(49),d=o.n(l),c=o(359),h=o(482),f=o(143),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"DataView"},[o("div",{staticClass:"DataView-Inner"},[o("div",{staticClass:"DataView-Header"},[o("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t._t("infoPanel"),t._v(" "),t._t("button")],2),t._v(" "),o("div",{staticClass:"DataView-CardText"},[t._t("default")],2),t._v(" "),o("div",{staticClass:"DataView-Footer"},[o("div",{staticClass:"Footer-Left"},[o("div",[t.loaded?o("v-footer",{staticClass:"DataView-Footer"},[o("a",{staticClass:"DataView-Footer",attrs:{target:"_blank",rel:"noopener",href:t.sourceLink}},[t._v(t._s(t.$t("出典: {sourceFrom}",{sourceFrom:t.sourceFrom}))+"\n              "),o("v-icon",{attrs:{size:"15"}},[t._v("mdi-open-in-new")])],1)]):o("v-footer",{staticClass:"DataView-Footer"})],1),t._v(" "),t.loaded?o("div",[o("a",{staticClass:"Permalink"},[t._v("\n            "+t._s(t.$t("{date} 更新",{date:t.date}))+"\n          ")])]):o("div",[o("a",{staticClass:"Permalink"})])]),t._v(" "),"true"!==this.$route.query.embed?o("div",{staticClass:"Footer-Right"},[o("button",{staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},[o("v-icon",[t._v("\n            mdi-share-variant\n          ")])],1),t._v(" "),t.displayShare?o("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[o("div",{staticClass:"Close-Button"},[o("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n              mdi-close\n            ")])],1),t._v(" "),o("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),o("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?o("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v("\n              mdi-content-copy\n            ")]):t._e(),t._v("\n            "+t._s(t.graphEmbedValue)+"\n          ")],1),t._v(" "),o("div",{staticClass:"Buttons"},[o("button",{attrs:{"aria-label":t.$t("シェアリンクをコピー",{title:t.title})},on:{click:t.copyLink}},[o("PictureLoader",{attrs:{filename:"link",alt:"link",classname:"icon-resize link"}})],1),t._v(" "),o("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[o("PictureLoader",{attrs:{filename:"line",alt:"LINE",classname:"icon-resize line"}})],1),t._v(" "),o("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[o("PictureLoader",{attrs:{filename:"twitter",alt:"Twitter",classname:"icon-resize twitter"}})],1),t._v(" "),o("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[o("PictureLoader",{attrs:{filename:"facebook",alt:"facebook",classname:"icon-resize facebook"}})],1)])]):t._e()]):t._e()])]),t._v(" "),t.showOverlay?o("div",{staticClass:"overlay"},[o("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.overlayContent)+"\n    ")]),t._v(" "),o("v-footer",{staticClass:"DataView-Footer"},[o("time",{attrs:{datetime:t.date}},[t._v(t._s(t.$t("{date} 更新",{date:t.date})))]),t._v(" "),t._t("footer")],2)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:c.a,VFooter:h.a,VIcon:f.a})}}]);