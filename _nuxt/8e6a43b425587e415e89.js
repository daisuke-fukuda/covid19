(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{252:function(t,e,n){"use strict";e.a=function(data){if(data){var t=Date.parse(data),e=new Date(t),n=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2),o=("0"+e.getHours()).slice(-2),l=("0"+e.getMinutes()).slice(-2),c=("0"+e.getSeconds()).slice(-2);return e.getFullYear()+"/"+n+"/"+r+" "+o+":"+l+":"+c}return""}},253:function(t,e,n){"use strict";n(296);var r=n(68),o=n(277),l={name:"DataSelector",props:{value:{type:String,required:!1,default:""}}},c=(n(300),n(4)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null).exports,h=n(278),f=(n(304),{name:"DateSelectSlider",props:{chartData:{type:Array,required:!0},value:{type:Array,required:!0},sliderMax:{type:Number,required:!0,default:1}},data:function(){var t=this;return{sliderValue:this.value,rules:[function(e){return Math.abs(e[0]-e[1])>14||t.$t("表示期間の最小範囲は１４日間です")}]}},watch:{sliderMax:function(){this.sliderValue=[0,this.sliderMax]},sliderValue:function(t,e){Math.abs(t[0]-t[1])<=14?this.sliderValue=e:this.$emit("sliderInput",t)}},methods:{getSliderLabels:function(t){return this.chartData&&0!==this.chartData.length?this.$moment(this.chartData[t].label).format("M/D"):1}}}),m=Object(c.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-range-slider",{staticStyle:{"padding-top":"35px"},attrs:{value:t.sliderValue,label:t.$t("表示期間"),rules:t.rules,max:t.sliderMax,min:0,"thumb-label":"always"},scopedSlots:t._u([{key:"thumb-label",fn:function(e){return[t._v("\n    "+t._s(t.getSliderLabels(e.value))+"\n  ")]}}]),model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})}),[],!1,null,null,null).exports,v={components:{DataView:o.a,DataSelector:d,DataViewBasicInfoPanel:h.a,DateSelectSlider:m,ScaleLoader:r.a},props:{title:{type:String,required:!1,default:""},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},unit:{type:String,required:!1,default:""},sourceFrom:{type:String,required:!1,default:""},sourceLink:{type:String,required:!1,default:""},defaultDataKind:{type:String,required:!1,default:"transition"},supplement:{type:String,required:!1,default:""},showButton:{type:Boolean,required:!1,default:!0},loaded:{type:Boolean,required:!0,default:!1},titleId:{type:String,required:!1,default:""}},data:function(){return{dataKind:this.defaultDataKind,graphRange:[0,1]}},computed:{sliderMax:function(){return this.chartData&&0!==this.chartData.length?this.chartData.length-1:1},displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e).toLocaleString()},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e).toLocaleString()},displayInfo:function(){return this.chartData&&0!==this.chartData.length?"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:this.$t("実績値（前日比：{change} {unit}）",{change:this.displayTransitionRatio,unit:this.unit}),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:this.$t("{date} 累計値（前日比：{change} {unit}）",{date:this.$moment(this.chartData.slice(-1)[0].label).format("MM/DD"),change:this.displayCumulativeRatio,unit:this.unit}),unit:this.unit}:{lText:"",sText:"",unit:""}},displayData:function(){return this.chartData&&0!==this.chartData.length?"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:"#1c8df0",borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:"#1c8df0",borderWidth:0}]}:{}},displayOption:function(){var t=this.unit;return this.chartData&&0!==this.chartData.length?{animation:!1,tooltips:{displayColors:!1,callbacks:{label:function(e){return"".concat(parseInt(e.value).toLocaleString()," ").concat(t)}}},responsive:!0,legend:{display:!1},scales:{xAxes:[{type:"time",offset:!0,time:{tooltipFormat:"MM/DD",unit:"day",unitStepSize:1,displayFormats:{day:"M/D"},round:"day"},stacked:!0,gridLines:{display:!1},ticks:{max:this.chartData[this.graphRange[1]].label,min:this.chartData[this.graphRange[0]].label,fontSize:10,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}}:{}}},methods:{sliderUpdate:function(t){this.graphRange=t},formatDayBeforeRatio:function(t){switch(Math.sign(t)){case 1:return"+".concat(t);case-1:default:return"".concat(t)}}}},x=(n(307),Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,date:t.date,loaded:t.loaded,"source-from":t.sourceFrom,"source-link":t.sourceLink,"title-id":t.titleId},scopedSlots:t._u([!0===t.showButton?{key:"button",fn:function(){return[n("data-selector",{model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0}:null,{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}],null,!0)},[t._v(" "),n("v-overlay",{attrs:{absolute:"",value:!t.loaded,"justify-center":"","align-center":""}},[n("scale-loader",{attrs:{color:"#1268d8"}})],1),t._v(" "),n("v-layout",{class:{loading:!t.loaded},attrs:{column:""}},[n("bar",{attrs:{"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),n("date-select-slider",{attrs:{"chart-data":t.chartData,value:[0,t.sliderMax],"slider-max":t.sliderMax},on:{sliderInput:t.sliderUpdate}}),t._v(" "),""!==t.supplement?n("v-footer",{staticClass:"TimeBarChart-Footer"},[n("ul",{staticClass:"supplementTexts"},[n("li",{staticClass:"supplementText"},[t._v("\n          "+t._s(t.$t("補足:"))+"\n        ")]),t._v(" "),n("li",{staticClass:"supplementText2"},[t._v("\n          "+t._s(t.supplement)+"\n        ")])])]):t._e()],1)],1)}),[],!1,null,null,null));e.a=x.exports},264:function(t,e,n){var content=n(299);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("353de640",content,!1,{sourceMap:!1})},265:function(t,e,n){var content=n(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("14842cd4",content,!1,{sourceMap:!1})},266:function(t,e,n){var content=n(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("725df030",content,!1,{sourceMap:!1})},267:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7634a41c",content,!1,{sourceMap:!1})},268:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("009d70e2",content,!1,{sourceMap:!1})},271:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["日陽性数"];isNaN(o)||(n+=o,t.push({label:r,transition:o,cumulative:n}))})),t}},272:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["小計"];isNaN(o)||(n+=o,t.push({label:r,transition:o,cumulative:n}))})),t}},273:function(t,e,n){"use strict";n(109),n(57),n(23),n(19),n(20);var r=n(3),o=n(68),l=n(277),c=n(278),d={components:{DataView:l.a,DataViewBasicInfoPanel:c.a,ScaleLoader:o.a},props:{title:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,required:!1,default:function(){}},sourceFrom:{type:String,required:!1,default:""},sourceLink:{type:String,required:!1,default:""},loaded:{type:Boolean,required:!0,default:!1},sortBy:{type:String,required:!1,default:""},sortDesc:{type:Boolean,required:!1,default:!1}}},h=(n(309),n(4)),f=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,loaded:t.loaded,date:t.date,"source-from":t.sourceFrom,"source-link":t.sourceLink},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info?t.info.lText:"","s-text":t.info?t.info.sText:"",unit:t.info?t.info.unit:""}})]},proxy:!0}])},[t._v(" "),n("v-overlay",{attrs:{absolute:"",value:!t.loaded,"justify-center":"","align-center":""}},[n("scale-loader",{attrs:{color:"#1268d8"}})],1),t._v(" "),n("v-layout",{class:{loading:!t.loaded},attrs:{column:""}},[n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.chartData?t.chartData.headers:[],items:t.chartData?t.chartData.datasets:[],"items-per-page":-1,"hide-default-footer":!0,height:300,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"fixed-header":!0,"mobile-breakpoint":0}})],1)],1)}),[],!1,null,null,null).exports,m=n(34),v=n.n(m),x=[{text:"日付",value:"リリース日"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"}],D=n(252),w=n(271),y={name:"PatientsCard",components:{DataTable:f},data:function(){return{patients:{loaded:!1,last_update:""},sumInfoOfPatients:{lText:"",sText:"",unit:""},patientsTable:{},convertToDateFromData:D.a}},created:function(){this.getPatientsTableFromAPI(),this.getPatientsSummaryGraphFromAPI()},methods:{getPatientsTableFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/patients.json").then((function(e){var data,n;t.patientsTable=(data=e.data,n={headers:x,datasets:[]},data.forEach((function(t){var e,r,o,l,c={"リリース日":(e=v()(t["リリース日"]).format("MM/DD"),null!=e?e:"不明"),"居住地":(r=t["居住地"],null!=r?r:"不明"),"年代":(o=t["年代"],null!=o?o:"不明"),"性別":(l=t["性別"],null!=l?l:"不明")};n.datasets.push(c)})),n.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),n);var r=!0,o=!1,l=void 0;try{for(var c,d=t.patientsTable.headers[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var header=c.value;header.text="退院"===header.value?t.$t("退院※"):t.$t(header.value)}}catch(t){o=!0,l=t}finally{try{r||null==d.return||d.return()}finally{if(o)throw l}}var h=!0,f=!1,m=void 0;try{for(var D,w=t.patientsTable.datasets[Symbol.iterator]();!(h=(D=w.next()).done);h=!0){var y=D.value;y["居住地"]=t.$t(y["居住地"]),y["性別"]=t.$t(y["性別"]),y["退院"]=t.$t(y["退院"]),"非公表性"===y["性別"]&&(y["性別"]=t.$t("非公表"));var _=y["年代"].match(/^([0-9]+)代$/);y["年代"]=_?t.$t("{age}代",{age:_[1]}):t.$t(y["年代"])}}catch(t){f=!0,m=t}finally{try{h||null==w.return||w.return()}finally{if(f)throw m}}t.patients.last_update=e.last_update,t.patients.loaded=!0})).catch((function(e){t.$emit("failed","陽性患者の属性データ ")}));case 2:case"end":return e.stop()}}),e)})))()},getPatientsSummaryGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/patients_summary.json").then((function(e){var n=Object(w.a)(e.data);t.sumInfoOfPatients={lText:n[n.length-1].cumulative.toLocaleString(),sText:t.$t("{date}の累計",{date:t.$moment(n[n.length-1].label).format("MM/DD")}),unit:t.$t("人")}})).catch((function(e){t.$emit("failed2","陽性患者数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},_=Object(h.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{"chart-data":this.patientsTable,"chart-option":{},date:this.convertToDateFromData(this.patients.last_update),info:this.sumInfoOfPatients,loaded:this.patients.loaded,"sort-by":"日付","sort-desc":!0,"source-from":this.$t("北海道 オープンデータポータル"),title:this.$t("陽性患者の属性"),"title-id":"patients","source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=_.exports},274:function(t,e,n){"use strict";n(20);var r=n(3),o=n(253),l=n(252),c={name:"InspectionsCard",components:{TimeBarChart:o.a},data:function(){return{inspections:{loaded:!1,last_update:""},inspectionsGraph:[],convertToDateFromData:l.a}},created:function(){this.getInscpectionsGraphFromAPI()},methods:{getInscpectionsGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/inspections.json").then((function(e){var data,n,r,o;return t.inspectionsGraph=(data=e.data,n=[],r=new Date,o=0,data.filter((function(t){return new Date(t["日付"])<r})).forEach((function(t){var e=new Date(t["日付"]),r=t["日検査数"];isNaN(r)||(o+=r,n.push({label:e,transition:r,cumulative:o}))})),n),t.inspections.last_update=e.last_update,t.inspections.loaded=!0,!0})).catch((function(e){t.$emit("failed","検査数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},d=n(4),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{"chart-data":t.inspectionsGraph,date:t.convertToDateFromData(t.inspections.last_update),"default-data-kind":"cumulative",loaded:t.inspections.loaded,"show-button":!1,"source-from":t.$t("北海道 オープンデータポータル"),supplement:t.$t("3月3日以前のデータが公開されていないため、グラフは3月3日以降となります。"),title:t.$t("検査数"),unit:t.$t("人"),"title-id":"inspections","source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},275:function(t,e,n){"use strict";n(20);var r=n(3),o=n(253),l=n(252),c={name:"CurrentPatientsCard",components:{TimeBarChart:o.a},data:function(){return{current_patients:{loaded:!1,last_update:""},currentPatientsGraph:[],convertToDateFromData:l.a}},created:function(){this.getCurrentPatientsGraphFromAPI()},methods:{getCurrentPatientsGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/current_patients.json").then((function(e){var data,n,r,o;t.currentPatientsGraph=(data=e.data,n=[],r=new Date,o=0,data.filter((function(t){return new Date(t["日付"])<r})).forEach((function(t){var e=new Date(t["日付"]),r=t["患者数"];isNaN(r)||(o+=r,n.push({label:e,transition:r,cumulative:o}))})),n),t.current_patients.last_update=e.last_update,t.current_patients.loaded=!0})).catch((function(e){t.$emit("failed","現在患者数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},d=n(4),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{"chart-data":t.currentPatientsGraph,date:t.convertToDateFromData(t.current_patients.last_update),"default-data-kind":"cumulative",loaded:t.current_patients.loaded,"source-from":t.$t("北海道 オープンデータポータル"),supplement:t.$t("現在患者数とは、陽性患者数から治療終了者数と死亡者数を除いた人数です。なお、ご覧いただいている時間によっては累計されている日付が違う場合がありますのでご注意ください。死亡者数は北海道のホームページを参照してください。"),title:t.$t("現在患者数"),unit:t.$t("人"),"title-id":"current-patients","source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},276:function(t,e,n){"use strict";n(20);var r=n(3),o=n(253),l=n(252),c={name:"DischargesCard",components:{TimeBarChart:o.a},data:function(){return{discharges_summary:{loaded:!1,last_update:""},dischargesGraph:[],convertToDateFromData:l.a}},created:function(){this.getDischargesSummaryGraphFromAPI()},methods:{getDischargesSummaryGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/discharges_summary.json").then((function(e){var data,n,r,o;t.dischargesGraph=(data=e.data,n=[],r=new Date,o=0,data.filter((function(t){return new Date(t["日付"])<r})).forEach((function(t){var e=new Date(t["日付"]),r=t["日治療終了数"];isNaN(r)||(o+=r,n.push({label:e,transition:r,cumulative:o}))})),n),t.discharges_summary.last_update=e.last_update,t.discharges_summary.loaded=!0})).catch((function(e){t.$emit("failed","治療終了者数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},d=n(4),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{"chart-data":t.dischargesGraph,date:t.convertToDateFromData(t.discharges_summary.last_update),"default-data-kind":"cumulative",loaded:t.discharges_summary.loaded,"source-from":t.$t("北海道 オープンデータポータル"),supplement:t.$t("治療終了者数とは道発表の「陰性確認済累計」と同じものです。「陰性確認済累計」とは、陽性の患者が軽快してから48時間後の1回目のPCR検査で陰性が確認され、それから12時間後の2回目のPCR検査でも陰性が確認された方の累計のことです。（3/9 鈴木知事のツイートから引用）"),title:t.$t("治療終了者数"),"title-id":"discharges-summary",unit:t.$t("人"),"source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},277:function(t,e,n){"use strict";var r=n(1).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},info:{},loaded:{type:Boolean,default:!1},sourceFrom:{type:String,default:""},sourceLink:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,overlayContent:""}},computed:{formattedDate:function(){return""},graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'+this.permalink(!0,!0)+'" frameborder="0"></iframe>';return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyLink:function(){var t=this,e=this;navigator.clipboard.writeText(this.permalink(!0,!1)).then((function(){e.closeShareMenu(),e.overlayContent=t.$t("共有リンクをコピーしました"),e.showOverlay=!0,setTimeout((function(){e.showOverlay=!1}),2e3)}))},copyEmbedCode:function(){var t=this,e=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){e.closeShareMenu(),e.overlayContent=t.$t("埋め込みリンクをコピーしました"),e.showOverlay=!0,setTimeout((function(){e.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/"+this.titleId;return embed&&(e+="?embed=true"),e=this.localePath(e),t&&(e=location.protocol+"//"+location.host+e),e},twitter:function(){var t="https://twitter.com/intent/tweet?text="+this.title+" / "+this.$t("北海道")+" "+this.$t("新型コロナウイルス{mobileBreak}まとめサイト",{mobileBreak:""})+"&url="+this.permalink(!0)+"&hashtags=JUST道IT,StopCovid19JP,COVID19Japan";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink(!0);window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink(!0);window.open(t)}}}),o=(n(298),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header"},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t._t("infoPanel"),t._v(" "),t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-CardText"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",{staticClass:"Footer-Left"},[n("div",[t.loaded?n("v-footer",{staticClass:"DataView-Footer"},[n("a",{staticClass:"DataView-Footer",attrs:{target:"_blank",rel:"noopener",href:t.sourceLink}},[t._v(t._s(t.$t("出典: {sourceFrom}",{sourceFrom:t.sourceFrom}))+"\n              "),n("v-icon",{attrs:{size:"15"}},[t._v("mdi-open-in-new")])],1)]):n("v-footer",{staticClass:"DataView-Footer"})],1),t._v(" "),t.loaded?n("div",[n("a",{staticClass:"Permalink"},[t._v("\n            "+t._s(t.$t("{date} 更新",{date:t.date}))+"\n          ")])]):n("div",[n("a",{staticClass:"Permalink"})])]),t._v(" "),"true"!=this.$route.query.embed?n("div",{staticClass:"Footer-Right"},[n("button",{staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},[n("v-icon",[t._v("\n            mdi-share-variant\n          ")])],1),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n              mdi-close\n            ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v("\n              mdi-content-copy\n            ")]):t._e(),t._v("\n            "+t._s(t.graphEmbedValue)+"\n          ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("シェアリンクをコピー",{title:t.title})},on:{click:t.copyLink}},[n("picture",[n("img",{staticClass:"icon-resize link",attrs:{src:"/link.png",alt:"link"}})])]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[n("picture",[n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[n("picture",[n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[n("picture",[n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])])])]):t._e()]):t._e()])]),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.overlayContent)+"\n    ")]),t._v(" "),n("v-footer",{staticClass:"DataView-Footer"},[n("time",{attrs:{datetime:t.date}},[t._v(t._s(t.$t("{date} 更新",{date:t.date})))]),t._v(" "),t._t("footer")],2)],1):t._e()])}),[],!1,null,null,null);e.a=component.exports},278:function(t,e,n){"use strict";var r=n(1).default.extend({props:{lText:{type:String,required:!0},sText:{type:String,required:!0},unit:{type:String,required:!0}}}),o=(n(302),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataInfo"},[n("span",{staticClass:"DataView-DataInfo-summary"},[t._v("\n    "+t._s(t.lText)+"\n    "),n("small",{staticClass:"DataView-DataInfo-summary-unit"},[t._v(t._s(t.unit))]),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"DataView-DataInfo-date"},[t._v(t._s(t.sText))])])])}),[],!1,null,null,null);e.a=component.exports},279:function(t,e,n){"use strict";n(20);var r=n(3),o=n(253),l=n(272),c=n(252),d={name:"QuerentsCard",components:{TimeBarChart:o.a},data:function(){return{querents:{loaded:!1,last_update:""},querentsGraph:[],convertToDateFromData:c.a}},created:function(){this.getQuerentsGraphFromAPI()},methods:{getQuerentsGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/querents.json").then((function(e){t.querentsGraph=Object(l.a)(e.data),t.querents.last_update=e.last_update,t.querents.loaded=!0})).catch((function(e){t.$emit("failed","帰国者・接触者電話相談センター相談件数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},h=n(4),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("帰国者・接触者電話相談センター相談件数(札幌市保健所値)"),"chart-data":this.querentsGraph,date:this.convertToDateFromData(this.querents.last_update),"source-from":this.$t("DATA-SMART CITY SAPPORO"),"source-link":"https://ckan.pf-sapporo.jp/dataset/covid_19_soudan",loaded:this.querents.loaded,"title-id":"querents",unit:this.$t("件")}})],1)}),[],!1,null,null,null);e.a=component.exports},280:function(t,e,n){"use strict";n(20);var r=n(3),o=n(253),l=n(271),c=n(252),d={name:"PatientsSummaryCard",components:{TimeBarChart:o.a},data:function(){return{patients_summary:{loaded:!1,last_update:""},patientsGraph:[],convertToDateFromData:c.a}},created:function(){this.getPatientsSummaryGraphFromAPI()},methods:{getPatientsSummaryGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/patients_summary.json").then((function(e){t.patientsGraph=Object(l.a)(e.data),t.patients_summary.last_update=e.last_update,t.patients_summary.loaded=!0})).catch((function(e){t.$emit("failed","陽性患者数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},h=n(4),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{"chart-data":this.patientsGraph,date:this.convertToDateFromData(this.patients_summary.last_update),"default-data-kind":"cumulative",loaded:this.patients_summary.loaded,"source-from":this.$t("北海道 オープンデータポータル"),title:this.$t("陽性患者数"),unit:this.$t("人"),"title-id":"patients-summary","source-link":"https://www.harp.lg.jp/opendata/dataset/1369.html"}})],1)}),[],!1,null,null,null);e.a=component.exports},281:function(t,e,n){"use strict";n(20);var r=n(3),o=n(253),l=n(272),c=n(252),d={name:"ContactsCard",components:{TimeBarChart:o.a},data:function(){return{contacts:{loaded:!1,last_update:""},contactsGraph:[],convertToDateFromData:c.a}},created:function(){this.getContactsGraphFromAPI()},methods:{getContactsGraphFromAPI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/contacts.json").then((function(e){t.contactsGraph=Object(l.a)(e.data),t.contacts.last_update=e.last_update,t.contacts.loaded=!0})).catch((function(e){t.$emit("failed","新型コロナコールセンター相談件数データ ")}));case 2:case"end":return e.stop()}}),e)})))()}}},h=n(4),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{"chart-data":this.contactsGraph,date:this.convertToDateFromData(this.contacts.last_update),loaded:this.contacts.loaded,"source-from":this.$t("DATA-SMART CITY SAPPORO"),title:this.$t("新型コロナコールセンター相談件数(札幌市保健所値)"),unit:this.$t("件"),"title-id":"contacts","source-link":"https://ckan.pf-sapporo.jp/dataset/covid_19_soudan"}})],1)}),[],!1,null,null,null);e.a=component.exports},296:function(t,e,n){var r=n(8);r(r.S,"Math",{sign:n(297)})},297:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},298:function(t,e,n){"use strict";var r=n(264);n.n(r).a},299:function(t,e,n){(e=n(11)(!1)).push([t.i,".DataView{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;height:100%}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1278px){.DataView-Header{width:100%;flex-flow:row;flex-wrap:wrap;padding:0}}.DataView-DataInfo-summary{color:#4d4d4d;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px;white-space:nowrap}.DataView-DataInfo-summary-unit{font-size:.6em;width:100%}.DataView-DataInfo-date{font-size:12px;line-height:12px;color:grey;width:100%;display:inline-block}.DataView-Inner{display:flex;flex-flow:column;justify-content:space-between;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;font-size:1.25rem;line-height:1.5;font-weight:400;color:#4d4d4d}@media screen and (min-width:1278px){.DataView-Title{width:50%;margin-bottom:0}}.DataView-CardText{margin:16px 0}.DataView-CardTextForXS{margin-bottom:46px;margin-top:70px}.DataView-Embed{background-color:#f8f9fa}.DataView-Footer{font-size:12px;font-size:.75rem;padding:0!important;display:flex;justify-content:space-between;text-align:right;text-decoration:none;background-color:#fff!important}.DataView-Footer,.DataView-Footer .Permalink{color:grey!important}.DataView-Footer .OpenDataLink{text-decoration:none}.DataView-Footer .OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}.DataView-Footer .Footer-Left{text-align:left}.DataView-Footer .Footer-Right{position:relative;display:flex;align-items:flex-end}.DataView-Footer .Footer-Right .DataView-Share-Opener{cursor:pointer;margin-right:6px}.DataView-Footer .Footer-Right .DataView-Share-Opener>svg{width:auto!important}.DataView-Footer .Footer-Right .DataView-Share-Buttons{position:absolute;padding:8px;right:-4px;bottom:1.5em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;font-size:1rem;z-index:1}.DataView-Footer .Footer-Right .DataView-Share-Buttons>*{padding:4px 0}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:grey}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:12px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:grey}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%;width:30px;height:30px;font-size:30px;margin-left:4px;margin-right:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.b-link{color:#000}.DataView .overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.DataView .overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important}textarea{font:400 11px system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;width:100%;height:2.4rem}",""]),t.exports=e},300:function(t,e,n){"use strict";var r=n(265);n.n(r).a},301:function(t,e,n){(e=n(11)(!1)).push([t.i,".DataSelector{margin-top:3px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none!important;margin:2px;border-radius:4px!important;height:24px!important;font-size:12px!important;color:#333!important;background-color:#fff!important}.DataSelector-Button:before{background-color:inherit}.DataSelector .v-btn--active{background-color:#4d4d4d!important;color:#fff!important}",""]),t.exports=e},302:function(t,e,n){"use strict";var r=n(266);n.n(r).a},303:function(t,e,n){(e=n(11)(!1)).push([t.i,".DataView-DataInfo{padding-bottom:3px}@media screen and (min-width:1278px){.DataView-DataInfo{text-align:right;width:50%;padding-top:10px}.DataView-DataInfo-summary{display:inline-block;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px}.DataView-DataInfo-summary-unit{font-size:.6em}.DataView-DataInfo-date{white-space:normal;display:inline-block;font-size:12px;line-height:12px;color:grey}}.DataView-DataInfo-summary{display:inline-block;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:15px}.DataView-DataInfo-summary-unit{font-size:.6em}.DataView-DataInfo-date{white-space:normal;display:inline-block;font-size:12px;line-height:10px;color:grey}",""]),t.exports=e},304:function(t,e,n){"use strict";var r=n(6),o=n(29),l=n(36),c=n(110),d=n(80),h=n(17),f=n(58).f,m=n(82).f,v=n(16).f,x=n(305).trim,D=r.Number,w=D,y=D.prototype,_="Number"==l(n(81)(y)),S="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=S?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!D(" 0o1")||!D("0b1")||D("+0x1")){D=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof D&&(_?h((function(){y.valueOf.call(n)})):"Number"!=l(n))?c(new w(C(e)),n,D):C(e)};for(var k,$=n(9)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;$.length>F;F++)o(w,k=$[F])&&!o(D,k)&&v(D,k,m(w,k));D.prototype=y,y.constructor=D,n(18)(r,"Number",D)}},305:function(t,e,n){var r=n(8),o=n(35),l=n(17),c=n(306),d="["+c+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=o[t]=d?e(v):c[t];n&&(o[n]=h),r(r.P+r.F*d,"String",o)},v=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},306:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},307:function(t,e,n){"use strict";var r=n(267);n.n(r).a},308:function(t,e,n){(e=n(11)(!1)).push([t.i,".TimeBarChart-Footer{background-color:#fff!important;text-align:left;margin:0;flex-direction:row-reverse;font-size:12px;font-size:.75rem;color:grey!important;text-decoration:none}.supplementTexts{display:flex;list-style-type:none}.supplementText{width:3em}.supplementText2{width:100%}.loading{visibility:hidden}",""]),t.exports=e},309:function(t,e,n){"use strict";var r=n(268);n.n(r).a},310:function(t,e,n){(e=n(11)(!1)).push([t.i,".cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr:nth-child(odd) td{background:hsla(0,0%,85.1%,.3)}.cardTable.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border:none}.loading{visibility:hidden}",""]),t.exports=e}}]);