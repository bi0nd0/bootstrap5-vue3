(function(C,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("bootstrap")):typeof define=="function"&&define.amd?define(["exports","vue","bootstrap"],e):(C=typeof globalThis<"u"?globalThis:C||self,e(C.BootstrapVue={},C.Vue,C.Bootstrap))})(this,function(C,e,L){"use strict";var Pt=Object.defineProperty;var Tt=(C,e,L)=>e in C?Pt(C,e,{enumerable:!0,configurable:!0,writable:!0,value:L}):C[e]=L;var z=(C,e,L)=>Tt(C,typeof e!="symbol"?e+"":e,L);const ue={class:"toast-header"},me=["textContent"],fe=["textContent"],ke={class:"toast-body"},he=["textContent"],ye=e.defineComponent({__name:"Toast",props:{visible:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},body:{default:""},animation:{type:Boolean,default:!0},autohide:{type:Boolean,default:!0},delay:{default:15e3},variant:{}},emits:["hide","hidden","show","shown"],setup(t,{expose:l,emit:c}){const n=t,f=c,{visible:a,animation:i,autohide:s,delay:p}=e.toRefs(n),u=e.ref(),_=e.ref();e.watch(a,V=>{r()},{immediate:!0});function E(){u.value.show()}function g(){u.value.hide()}function S(){u.value.dispose()}function k(){u.value.isShown()}function d(){u.value.getOrCreateInstance()}function b(){u.value.getInstance()}function r(){u.value&&(a.value===!0?E():g())}function y(){f("hide",u.value)}function o(){f("hidden",u.value)}function m(){f("show",u.value)}async function $(){f("shown",u.value)}const h={show:E,hide:g,dispose:S,isShown:k,getOrCreateInstance:d,getInstance:b};return l({...h}),e.onMounted(()=>{_.value.addEventListener("hide.bs.toast",y),_.value.addEventListener("hidden.bs.toast",o),_.value.addEventListener("show.bs.toast",m),_.value.addEventListener("shown.bs.toast",$),u.value=new L.Toast(_.value,{animation:i.value,autohide:s.value,delay:p.value}),r()}),(V,A)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"toastRef",ref:_,class:e.normalizeClass(["toast",[V.variant?`text-bg-${V.variant}`:""]]),role:"alert","aria-live":"assertive","aria-atomic":"true"},[e.renderSlot(V.$slots,"header",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("div",ue,[e.renderSlot(V.$slots,"title",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("strong",{class:"me-auto",textContent:e.toDisplayString(V.title)},null,8,me)],!0),e.renderSlot(V.$slots,"subtitle",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("small",{textContent:e.toDisplayString(V.subtitle)},null,8,fe)],!0),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:g})])],!0),e.renderSlot(V.$slots,"body",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("div",ke,[e.renderSlot(V.$slots,"default",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("span",{textContent:e.toDisplayString(V.body)},null,8,he)],!0)])],!0)],2))}}),D=(t,l)=>{const c=t.__vccOpts||t;for(const[n,f]of l)c[n]=f;return c},I=D(ye,[["__scopeId","data-v-c0cdbae8"]]);function be(){let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){const n=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(c=="x"?n:n&3|8).toString(16)})}const _e={id:"toast-wrapper"};let q;const K=D(e.defineComponent({__name:"Toaster",setup(t,{expose:l}){const c={visible:!0,title:"",subtitle:"",body:"",animation:!0,autohide:!0,delay:5e3,variant:void 0},n=e.ref(new Map);q=(a,i="top right")=>{const s=be(),p={...c,...a,id:s};let u=n.value.get(i);u instanceof Set||(u=new Set),u.add(p),n.value.set(i,u)};function f(a,i){const s=n.value.get(a);s==null||s.delete(i)}return l({toast:q}),(a,i)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",_e,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.value,([s,p])=>(e.openBlock(),e.createElementBlock("div",{key:s,class:e.normalizeClass(["toast-group",`${s}`])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p,(u,_)=>(e.openBlock(),e.createBlock(I,e.mergeProps({key:u.id,ref_for:!0},u,{onHidden:E=>f(s,u)}),null,16,["onHidden"]))),128))],2))),128))])]))}}),[["__scopeId","data-v-786d1c50"]]);var M=(t=>(t.SMALL="sm",t.STANDARD="",t.LARGE="lg",t.EXTRA_LARGE="xl",t))(M||{});const O=(t,l="")=>{let c=t.toLowerCase();return!Object.values(M).includes(c)||c==""?"":`${l}${c}`},ge={class:"modal-content"},Ce={class:"modal-header"},Be=["innerHTML"],Ee={class:"modal-body"},$e=["innerHTML"],we={class:"modal-footer"},Se=["innerHTML"],Ve=["innerHTML"],F=e.defineComponent({__name:"Modal",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{type:[Boolean,String],default:!0},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean,default:!1},okOnly:{type:Boolean,default:!1},size:{default:M.STANDARD},btnSize:{default:M.SMALL},visible:{type:Boolean,default:!1}},emits:["onShown","onHidden"],setup(t,{expose:l,emit:c}){const n=t,{backdrop:f,keyboard:a,focus:i,disableOutsideClick:s,size:p,btnSize:u}=e.toRefs(n),_=c,E=e.computed(()=>O(p.value,"modal-")),g=e.computed(()=>O(u.value,"btn-")),S=e.ref();let k;e.getCurrentInstance();const d=()=>document.querySelectorAll(".modal.show").length,b=1055,r=e.ref(b),y=()=>{const B=d();r.value=b+B};let o;function m(){return new Promise((T,At)=>{y(),k==null||k.show(),o=T,_("onShown",k)})}function $(B=!0){k==null||k.hide(),typeof o=="function"&&o(B),_("onHidden",k)}function h(){k==null||k.toggle()}e.onMounted(()=>{k=new L.Modal(S.value,{backdrop:f==null?void 0:f.value,keyboard:a.value,focus:i.value}),e.watchEffect(()=>{(n==null?void 0:n.visible)===!0?k==null||k.show():k==null||k.hide()})});function V(B){(f==null?void 0:f.value)!=="static"&&$(!1)}function A(){$(!1)}function H(){$(!1)}function P(){$(!0)}l({modal:k,show:m,hide:$,toggle:h,onHeaderCloseClicked:A,onCancelClicked:H,onOkCLicked:P});const w={show:m,hide:$,toggle:h,modal:k};return(B,T)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({ref_key:"modalElement",ref:S,class:"modal fade",tabindex:"-1"},{...B.$attrs},{onClick:e.withModifiers(V,["self"]),style:{zIndex:r.value}}),[e.createElementVNode("div",{class:e.normalizeClass(["modal-dialog",E.value])},[e.createElementVNode("div",ge,[e.renderSlot(B.$slots,"header",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("div",Ce,[e.renderSlot(B.$slots,"title",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("h5",{class:"modal-title",innerHTML:B.title},null,8,Be)]),e.renderSlot(B.$slots,"header-close-button",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:A})])])]),e.createElementVNode("div",Ee,[e.renderSlot(B.$slots,"default",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("span",{innerHTML:B.body},null,8,$e)])]),e.createElementVNode("div",we,[e.renderSlot(B.$slots,"footer",e.normalizeProps(e.guardReactiveProps({...w})),()=>[B.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["btn btn-secondary",g.value]),onClick:H},[e.renderSlot(B.$slots,"button-cancel",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("span",{innerHTML:B.textCancel},null,8,Se)])],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",g.value]),onClick:P},[e.renderSlot(B.$slots,"button-ok",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("span",{innerHTML:B.textOk},null,8,Ve)])],2)])])])],2)],16))}}),U=e.defineComponent({__name:"ModalManager",setup(t,{expose:l}){const c=e.ref(void 0),n=e.ref({});function f(i={}){var s;return i.okOnly=!1,n.value=i,(s=c.value)==null?void 0:s.show()}function a(i={}){var s;return i.okOnly=!0,n.value=i,(s=c.value)==null?void 0:s.show()}return l({confirm:f,alert:a}),(i,s)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createVNode(F,e.mergeProps({ref_key:"modalRef",ref:c},{...n.value}),null,16)]))}}),Ne={"data-header":"",class:"border-bottom"},ze={class:"d-flex gap-2 p-2"},Me={class:"p-2"},De={"data-footer":"",class:"border-top p-2"},Pe={class:"buttons"},Te=e.defineComponent({__name:"DialogBox",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{type:[Boolean,String],default:!0},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean,default:!1},okOnly:{type:Boolean,default:!1},size:{default:M.STANDARD},btnSize:{default:M.SMALL},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:!1}},setup(t,{expose:l}){const c=t,{backdrop:n,disableOutsideClick:f,modal:a,size:i,btnSize:s}=e.toRefs(c),p=()=>document.querySelectorAll("dialog[open]").length,u=1056,_=e.ref(u),E=e.ref(!1),g=e.ref(!1),S=e.ref(!1),k=e.ref(),d=e.ref(!1),b=e.computed(()=>O(i.value,"modal-")),r=e.computed(()=>O(s.value,"btn-")),y=e.computed(()=>({opening:E.value,closing:g.value,"no-backdrop":n.value===!1,static:d.value}));let o=null;const m=()=>{const w=p();_.value=u+w},$=async()=>(m(),E.value=!0,k.value.addEventListener("animationend",()=>{E.value=!1,S.value=!0},{once:!0}),a.value===!0?k.value.showModal():k.value.show(),new Promise((w,B)=>{o=w})),h=async(w=!1)=>{g.value=!0,k.value.addEventListener("animationend",()=>{k.value.close(),g.value=!1,S.value=!1,typeof o=="function"&&o(w),o=null},{once:!0})},V=async()=>{S.value===!0?h():$()},A=()=>{d.value=!0,setTimeout(()=>{d.value=!1},200)},H=()=>{if(n.value==="static"||f.value===!0){A();return}h(!1)};if(a.value===!0){let w=function(T){if(n.value==="static"||f.value===!0){A();return}T.target===k.value&&h(!1)};const B=new AbortController;e.onMounted(()=>{document.addEventListener("click",T=>{w(T)},{signal:B.signal})}),e.onUnmounted(()=>{B.abort()})}const P={show:$,hide:h,toggle:V,dialog:k};return l({show:$,hide:h,toggle:V}),(w,B)=>(e.openBlock(),e.createElementBlock("div",{class:"dialog-wrapper",style:e.normalizeStyle({zIndex:_.value})},[e.createElementVNode("div",{class:"backdrop",onClick:H}),e.createElementVNode("dialog",{ref_key:"dialog",ref:k,class:e.normalizeClass(y.value)},[e.createElementVNode("div",{class:e.normalizeClass(["content",b.value])},[e.renderSlot(w.$slots,"header",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createElementVNode("div",Ne,[e.createElementVNode("div",ze,[e.renderSlot(w.$slots,"title",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createTextVNode(e.toDisplayString(w.title),1)],!0),e.renderSlot(w.$slots,"header-close-button",{},()=>[e.createElementVNode("button",{class:"ms-auto",type:"button","data-btn-close":"","aria-label":"Close",onClick:B[0]||(B[0]=T=>h(!1))})],!0)])])],!0),e.createElementVNode("div",Me,[e.renderSlot(w.$slots,"default",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createTextVNode(e.toDisplayString(w.body),1)],!0)]),e.renderSlot(w.$slots,"footer",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createElementVNode("div",De,[e.createElementVNode("div",Pe,[w.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["btn btn-secondary",r.value]),onClick:B[1]||(B[1]=T=>h(!1))},[e.renderSlot(w.$slots,"textCancel",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createTextVNode(e.toDisplayString(w.textCancel),1)],!0)],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",r.value]),onClick:B[2]||(B[2]=T=>h(!0))},[e.renderSlot(w.$slots,"textOk",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createTextVNode(e.toDisplayString(w.textOk),1)],!0)],2)])])],!0)],2)],2)],4))}}),j=D(Te,[["__scopeId","data-v-dbfc8b0f"]]),X=e.defineComponent({__name:"DialogManager",setup(t,{expose:l}){const c=e.ref(void 0),n=e.ref({});function f(i={}){var s;return i.okOnly=!1,n.value=i,(s=c.value)==null?void 0:s.show()}function a(i={}){var s;return i.okOnly=!0,n.value=i,(s=c.value)==null?void 0:s.show()}return l({confirm:f,alert:a}),(i,s)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createVNode(j,e.mergeProps({ref_key:"modalRef",ref:c},{...n.value}),null,16)]))}}),Le={"data-first":""},Re=["disabled","innerHTML"],Ae={"data-prev":""},Oe=["disabled","innerHTML"],xe={key:0},He=["innerHTML"],Ie=["onClick"],Fe={"data-next":""},je=["disabled","innerHTML"],Ge={"data-last":""},qe=["disabled","innerHTML"],Ke=e.defineComponent({__name:"Pagination",props:{modelValue:{default:1},perPage:{default:5},maxVisibleButtons:{default:5},totalItems:{default:0},hideEllipsis:{type:Boolean,default:!1},hideGotoEndButtons:{type:Boolean,default:!1},firstText:{default:"«"},prevText:{default:"‹"},nextText:{default:"›"},lastText:{default:"»"},ellipsisText:{default:"…"},size:{default:M.STANDARD}},emits:["update:modelValue"],setup(t,{emit:l}){function c(o,m=0){return[...Array(o).keys()].map($=>$+m)}const n=l,f=t,{modelValue:a,maxVisibleButtons:i,hideEllipsis:s}=e.toRefs(f),p=Math.floor(i.value/2),u=e.computed(()=>{let o=i.value,m=a.value<=p?1:a.value-p;return a.value>=g.value-p&&(m=g.value-o+1),m<1&&(m=1),g.value<o&&(o=g.value),c(o,m)}),_=e.computed(()=>a.value<=1),E=e.computed(()=>a.value>=g.value),g=e.computed(()=>{const{perPage:o,totalItems:m}=f;return Math.ceil(m/o)});e.watchEffect(()=>{g.value>0&&a.value>g.value&&n("update:modelValue",g.value)});function S(o){const m=i.value-1;return!(s.value===!0||o===0&&a.value-p-1<=0||o===m&&a.value+p>=g.value||o>0&&o<m)}function k(o){o<1&&(o=1),o>g.value&&(o=g.value),n("update:modelValue",o)}function d(){n("update:modelValue",1)}function b(){n("update:modelValue",g.value)}function r(){let o=a.value-1;o<1&&(o=1),n("update:modelValue",o)}function y(){let o=a.value+1;o>g.value&&(o=g.value),n("update:modelValue",o)}return(o,m)=>(e.openBlock(),e.createElementBlock("ul",{class:e.normalizeClass(["pagination",o.size])},[e.createElementVNode("li",Le,[e.createElementVNode("button",{class:"",disabled:_.value,innerHTML:o.firstText,onClick:d},null,8,Re)]),e.createElementVNode("li",Ae,[e.createElementVNode("button",{class:"",disabled:_.value,innerHTML:o.prevText,onClick:r},null,8,Oe)]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,($,h)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[S(h)?(e.openBlock(),e.createElementBlock("li",xe,[e.createElementVNode("button",{disabled:"",class:"",innerHTML:o.ellipsisText},null,8,He)])):(e.openBlock(),e.createElementBlock("li",{key:1,"data-prev":"",class:e.normalizeClass({active:o.modelValue===$})},[e.createElementVNode("button",{class:"",onClick:V=>k($)},e.toDisplayString($),9,Ie)],2))],64))),256)),e.createElementVNode("li",Fe,[e.createElementVNode("button",{class:"",disabled:E.value,innerHTML:o.nextText,onClick:y},null,8,je)]),e.createElementVNode("li",Ge,[e.createElementVNode("button",{class:"",disabled:E.value,innerHTML:o.lastText,onClick:b},null,8,qe)])],2))}}),Y=D(Ke,[["__scopeId","data-v-2bfd7085"]]),Ue={class:"d-inline"},Xe={class:"fw-bold"},W=e.defineComponent({__name:"PageSizeDropdown",props:{options:{default:()=>[25,50,100]},modelValue:{default:50}},emits:["update:modelValue"],setup(t,{emit:l}){const c=t,n=l,{options:f}=e.toRefs(c),a=e.computed({get:()=>c.modelValue,set:i=>n("update:modelValue",i)});return(i,s)=>{const p=e.resolveComponent("b-dropdown-item"),u=e.resolveComponent("b-dropdown");return e.openBlock(),e.createBlock(u,e.mergeProps({variant:"outline-primary",size:"sm"},{...i.$attrs}),{button:e.withCtx(()=>[e.createElementVNode("div",Ue,[e.renderSlot(i.$slots,"default",{selected:a.value},()=>[s[0]||(s[0]=e.createElementVNode("span",null,"Per page: ",-1)),e.createElementVNode("span",Xe,e.toDisplayString(a.value),1)])])]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(f),(_,E)=>(e.openBlock(),e.createBlock(p,{key:_,onClick:g=>a.value=_,active:_===i.modelValue},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(_),1)]),_:2},1032,["onClick","active"]))),128))]),_:3},16)}}}),Ye=["value"],Z=e.defineComponent({__name:"PageSizeSelect",props:{options:{default:()=>[25,50,100]},modelValue:{default:50}},emits:["update:modelValue"],setup(t,{emit:l}){const c=t,n=l,{options:f}=e.toRefs(c),a=e.computed({get:()=>c.modelValue,set:i=>n("update:modelValue",i)});return(i,s)=>e.withDirectives((e.openBlock(),e.createElementBlock("select",{"onUpdate:modelValue":s[0]||(s[0]=p=>a.value=p)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(f),(p,u)=>(e.openBlock(),e.createElementBlock("option",{key:p,value:p},e.toDisplayString(p),9,Ye))),128))],512)),[[e.vModelSelect,a.value]])}});var R=(t=>(t.ASC="ASC",t.DESC="DESC",t.IGNORE="IGNORE",t))(R||{});class We{constructor(l,c="ASC",n){z(this,"key");z(this,"direction");z(this,"sortFn");this.key=l,this.direction=c,this.sortFn=n}}const J=(t,l)=>{const c=(s,p)=>{let u=typeof s,_=typeof p;return u=="number"&&u==_},n=(s,p)=>s-p,f=(s,p)=>(s=s??"",p=p??"",s.localeCompare(p)),a=(s,p)=>c(s,p)?n:f,i=[...l];return i.sort((s,p)=>{let u=0;for(let _ of t){let{key:E,direction:g,sortFn:S}=_,k=g==="ASC"?1:-1,d=s[E],b=p[E];if(S=typeof S=="function"?S:a(d,b),u=S(d,b,s,p,l,_,k)*k,u!==0)return u}return u}),i},Ze=["onClick"],Je={class:"th-wrapper"},Qe={key:0,"data-sort-indicator":""},ve={class:"sort-index"},et={class:"sort-direction"},tt=["onMouseover"],ot={key:0,class:"p-5 text-muted font-italic"},nt=["colspan"],lt=["innerHTML"];class x{constructor(l="",c="",n=!1,f){z(this,"key");z(this,"label");z(this,"sortable");z(this,"sortFn");this.key=l,this.label=c,this.sortable=n,this.sortFn=f}}const Q=D(e.defineComponent({__name:"Table",props:{fields:{default:()=>[]},items:{default:()=>[]},striped:{type:Boolean,default:!1},hover:{type:Boolean,default:!0},externalSort:{type:Boolean,default:!1},showEmpty:{type:Boolean,default:!1},emptyText:{default:"nothing to display"}},emits:["sort","onMouseOverCell"],setup(t,{emit:l}){const c=d=>{let b=[];for(const r of d)b=b.concat(Object.keys(r));return b=b.filter((r,y)=>b.indexOf(r)==y),b},n=l,f=t,a=e.ref([]),{fields:i,items:s}=e.toRefs(f),p=e.computed(()=>{if(f.externalSort||a.value.length==0)return f.items;const d=[...f.items];return J(a.value,d)}),u=e.computed(()=>{let d=i.value,b=[];return d.length===0&&(d=c([...s.value])),d.reduce((r,y,o)=>{if(typeof y=="string")r.push(new x(y,y));else if(y instanceof x)r.push(y);else if(typeof y=="object"){const{key:m,label:$,sortable:h,sortFn:V}=y;r.push(new x(m,$,h,V))}return r},b)});function _(d){const b=a.value.findIndex(r=>r.key===d.key);return b<0?"":b+1}function E(d){const b=a.value.findIndex(y=>y.key===d.key);if(b<0)return"fas fa-sort";const r=a.value[b];return r.direction===R.ASC?"fas fa-sort-up":r.direction===R.DESC?"fas fa-sort-down":"far fa-exclamation-triangle"}function g(d){const{key:b}=d,r=a.value.findIndex(y=>y.key===b);if(r<0){const y=new We(b,R.ASC,d.sortFn);a.value.push(y)}else{const y=a.value[r],o=y.direction;o===R.ASC?y.direction=R.DESC:o===R.DESC&&a.value.splice(r,1)}n("sort",a.value,J)}function S(d,b,r,y){n("onMouseOverCell",d,b,r,y)}let k=e.ref(null);return e.onMounted(()=>{k.value=e.getCurrentInstance()}),(d,b)=>(e.openBlock(),e.createElementBlock("table",e.mergeProps({...d.$attrs},{class:{striped:d.striped,hover:d.hover}}),[e.createElementVNode("thead",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,r=>(e.openBlock(),e.createElementBlock("th",{key:`thead-${r.key}`,class:e.normalizeClass({sortable:r.sortable}),onClick:y=>r.sortable&&g(r)},[e.createElementVNode("span",Je,[e.renderSlot(d.$slots,`head(${r.key})`,{field:r,data:e.unref(k),value:r.label},()=>[e.createTextVNode(e.toDisplayString(r.label),1)],!0),r.sortable?(e.openBlock(),e.createElementBlock("span",Qe,[e.createElementVNode("span",ve,e.toDisplayString(_(r)),1),e.createElementVNode("span",et,[e.createElementVNode("i",{class:e.normalizeClass(E(r))},null,2)])])):e.createCommentVNode("",!0)])],10,Ze))),128))]),e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p.value,(r,y)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:`trow-${(r==null?void 0:r.id)??y}`},[e.renderSlot(d.$slots,"row",{item:r,index:y,colspan:u.value.length},void 0,!0),e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,o=>(e.openBlock(),e.createElementBlock("td",{key:`tcell-${o.key+((r==null?void 0:r.id)??y)}`,class:e.normalizeClass({[`tcell-${o==null?void 0:o.key}`]:!0}),onMouseover:m=>S(m,r,y,o)},[e.renderSlot(d.$slots,`cell(${o==null?void 0:o.key})`,{data:e.unref(k),item:r,field:o,value:r[o==null?void 0:o.key]},()=>[e.createTextVNode(e.toDisplayString(r[o==null?void 0:o.key]),1)],!0)],42,tt))),128))])],64))),128))]),e.createElementVNode("tfoot",null,[e.renderSlot(d.$slots,"footer",{data:e.unref(k)},void 0,!0)]),d.showEmpty&&p.value.length===0?(e.openBlock(),e.createElementBlock("tr",ot,[e.createElementVNode("td",{colspan:u.value.length},[e.renderSlot(d.$slots,"empty",{items:p.value,data:e.unref(k),fields:u.value},()=>[e.createElementVNode("span",{innerHTML:d.emptyText},null,8,lt)],!0)],8,nt)])):e.createCommentVNode("",!0)],16))}}),[["__scopeId","data-v-b1e9b5de"]]);var v=(t=>(t.PRIMARY="primary",t.SECONDARY="secondary",t.WARNING="warning",t.DANGER="danger",t.INFO="info",t))(v||{});const at={class:"d-inline-block position-relative"},st=["disabled"],ee="data-prevent-close",rt=e.defineComponent({__name:"Dropdown",props:{text:{default:""},variant:{default:v.PRIMARY},right:{type:Boolean,default:!1},top:{type:Boolean,default:!1},centered:{type:Boolean},dropup:{type:Boolean},dropend:{type:Boolean},dropstart:{type:Boolean},menuEnd:{type:Boolean,default:!1},size:{default:M.STANDARD},disabled:{type:Boolean}},setup(t){const l=e.ref(),c=t,n=e.ref(),{variant:f,centered:a,dropup:i,dropend:s,dropstart:p,menuEnd:u}=e.toRefs(c),_=e.ref(!1),E=e.computed(()=>{const m=[];return f!=null&&f.value&&m.push(`btn-${f.value}`),c.size&&m.push(`btn-${c.size}`),m}),g=e.computed(()=>{const m=[];return a!=null&&a.value&&m.push("dropdown-center"),i!=null&&i.value&&m.push("dropup"),p!=null&&p.value&&m.push("dropstart"),!(p!=null&&p.value)&&(s!=null&&s.value)&&m.push("dropend"),m.length===0?m.push("dropdown"):m.unshift("btn-group"),m}),S=e.computed(()=>{const m=[];return _.value&&m.push("show"),u.value&&m.push("dropdown-menu-end"),m});function k(){_.value=!0}function d(){_.value=!1}function b(m){_.value?d():k()}function r(m){const{target:$}=m;($==null?void 0:$.closest(`[${ee}],[${ee}=true]`))||d()}function y(){_.value&&d()}const o={show:_,disabled:c.disabled,buttonClasses:E,onButtonClicked:b,onMenuClicked:r,onClickOutside:y,open:k,close:d};return(m,$)=>{const h=e.resolveDirective("click-outside");return e.openBlock(),e.createElementBlock("div",{ref_key:"dropDownRef",ref:n,class:e.normalizeClass(g.value)},[e.withDirectives((e.openBlock(),e.createElementBlock("div",at,[e.renderSlot(m.$slots,"header",e.normalizeProps(e.guardReactiveProps({...o})),()=>[e.createElementVNode("button",{class:e.normalizeClass(["btn dropdown-toggle",E.value]),type:"button","aria-expanded":"false",onClick:b,disabled:m.disabled},[e.renderSlot(m.$slots,"button",e.normalizeProps(e.guardReactiveProps({...o})),()=>[e.createTextVNode(e.toDisplayString(m.text),1)],!0)],10,st)],!0),e.createElementVNode("ul",{ref_key:"dropDownMenuRef",ref:l,class:e.normalizeClass(["dropdown-menu",S.value]),onClick:r},[e.renderSlot(m.$slots,"default",e.normalizeProps(e.guardReactiveProps({...o})),void 0,!0)],2)])),[[h,y]])],2)}}}),te=D(rt,[["__scopeId","data-v-f9658383"]]),ct=["data-prevent-close"],oe=e.defineComponent({__name:"DropdownItem",props:{active:{type:Boolean},preventClose:{type:Boolean}},setup(t){const l=t,{preventClose:c}=e.toRefs(l);return(n,f)=>(e.openBlock(),e.createElementBlock("li",{"data-prevent-close":e.unref(c)?"":null},[e.createElementVNode("span",{class:e.normalizeClass(["dropdown-item",{active:n.active}]),role:"button",tabindex:"0"},[e.renderSlot(n.$slots,"default")],2)],8,ct))}}),it={},dt={"data-prevent-close":""},pt={class:"dropdown-header"};function ut(t,l){return e.openBlock(),e.createElementBlock("li",dt,[e.createElementVNode("h6",pt,[e.renderSlot(t.$slots,"default")])])}const ne=D(it,[["render",ut]]),mt={};function ft(t,l){return e.openBlock(),e.createElementBlock("li",null,l[0]||(l[0]=[e.createElementVNode("hr",{class:"dropdown-divider"},null,-1)]))}const le=D(mt,[["render",ft]]),ae={mounted(t,l,c,n){new L.Tooltip(t,{title:l.value,placement:l.arg,trigger:"hover"})}},kt=(t,l)=>{function c(a,i){for(;a!==null;){if(a===i)return!0;a=a.parentNode}return!1}const n=new AbortController;function f(a,i){document.addEventListener("click",function(s){const p=s.target;a&&(c(p,a)||i())},{signal:n.signal})}return f(t,l),n},se={mounted(t,l,c,n){const f=l.value;kt(t,f)}};class G{static add(l){this.list.add(l),document.body.classList.add("drawer-open")}static delete(l){this.list.delete(l),this.list.size===0&&document.body.classList.remove("drawer-open")}}z(G,"list",new Set);const ht={class:"drawer-content"},yt={class:"drawer-header"},bt=["innerHTML"],_t={class:"drawer-body"},gt=["innerHTML"],Ct={class:"drawer-footer"},Bt=["innerHTML"],Et=["innerHTML"],$t=e.defineComponent({__name:"Drawer",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{type:[Boolean,String],default:"static"},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean},okOnly:{type:Boolean,default:!1},size:{default:M.STANDARD},btnSize:{default:M.SMALL},lazy:{type:Boolean,default:!1}},setup(t,{expose:l}){const c=t,{backdrop:n,keyboard:f,focus:a,size:i,btnSize:s}=e.toRefs(c),p=e.computed(()=>O(i.value,"drawer-")),u=e.computed(()=>O(s.value,"btn-")),_=e.ref(),E=e.ref(!1),g=e.getCurrentInstance();let S;async function k(){return E.value===!0?void 0:new Promise((V,A)=>{E.value=!0,S=V})}function d(h=!0){E.value=!1,typeof S=="function"&&S(h)}function b(){E.value===!0?k():d(!1)}function r(h){(n==null?void 0:n.value)!=="static"&&d(!1)}function y(){d(!1)}function o(){d(!1)}function m(){d(!0)}function $(){E.value===!0?G.add(g):G.delete(g)}return l({show:k,hide:d,toggle:b}),(h,V)=>(e.openBlock(),e.createBlock(e.Transition,{onBeforeEnter:$,onAfterLeave:$},{default:e.withCtx(()=>[E.value?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,ref_key:"drawerElement",ref:_,class:"drawer",tabindex:"-1"},{...h.$attrs},{onClick:e.withModifiers(r,["self"])}),[e.createElementVNode("div",{class:e.normalizeClass(["drawer-dialog",p.value])},[e.createElementVNode("div",ht,[e.createElementVNode("div",yt,[e.renderSlot(h.$slots,"header",{},()=>[e.createElementVNode("h5",{class:"drawer-title",innerHTML:h.title},null,8,bt)],!0),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:y})]),e.createElementVNode("div",_t,[e.renderSlot(h.$slots,"default",{},()=>[e.createElementVNode("span",{innerHTML:h.body},null,8,gt)],!0)]),e.createElementVNode("div",Ct,[e.renderSlot(h.$slots,"footer",{},()=>[h.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["ms-auto btn btn-secondary",u.value]),onClick:o},[e.renderSlot(h.$slots,"button-cancel",{},()=>[e.createElementVNode("span",{innerHTML:h.textCancel},null,8,Bt)],!0)],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",u.value]),onClick:m},[e.renderSlot(h.$slots,"button-ok",{},()=>[e.createElementVNode("span",{innerHTML:h.textOk},null,8,Et)],!0)],2)],!0)])])],2)],16)):e.createCommentVNode("",!0)]),_:3}))}}),wt=D($t,[["__scopeId","data-v-2e49e8cb"]]),N="b",re="$toaster",ce="$modalManager",St="$dialogManager";class ie{static getComponent(){if(!this.component){const l=document.createElement("div");document.body.appendChild(l);const n=e.createApp(U).mount(l);this.component=n}return this.component}}z(ie,"component");class de{static getComponent(){if(!this.component){const l=document.createElement("div");document.body.appendChild(l);const n=e.createApp(X).mount(l);this.component=n}return this.component}}z(de,"component");class pe{static getComponent(){if(!this.component){const l=document.createElement("div");document.body.appendChild(l);const n=e.createApp(K).mount(l);this.component=n}return this.component}}z(pe,"component");function Vt(){return e.inject(re)}function Nt(){return e.inject(ce)}function zt(t){t.component(`${N}-drawer`,wt),t.component(`${N}-modal`,F),t.component(`${N}-dialog`,j),t.component(`${N}-pagination`,Y),t.component(`${N}-pagination-dropdown`,W),t.component(`${N}-pagination-select`,Z),t.component(`${N}-dropdown`,te),t.component(`${N}-dropdown-item`,oe),t.component(`${N}-dropdown-header`,ne),t.component(`${N}-dropdown-divider`,le),t.component(`${N}-table`,Q),t.component(`${N}-toast`,I)}function Mt(t){t.directive("tooltip",ae),t.directive("click-outside",se)}const Dt={install(t){zt(t),Mt(t);const l=pe.getComponent(),c=ie.getComponent(),n=de.getComponent();t.provide(re,l),t.provide(ce,c),t.provide(St,n)}};C.BootstrapVue=Dt,C.DialogBox=j,C.DialogManager=X,C.Dropdown=te,C.DropdownDivider=le,C.DropdownHeader=ne,C.DropdownItem=oe,C.Modal=F,C.ModalManager=U,C.PageSizeDropdown=W,C.PageSizeSelect=Z,C.Pagination=Y,C.Table=Q,C.TableFieldDefinition=x,C.Toast=I,C.Toaster=K,C.clickOutside=se,C.tooltip=ae,C.useModal=Nt,C.useToaster=Vt,Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});
