const ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};ye();function $(){}function ge(e){return e()}function re(){return Object.create(null)}function z(e){e.forEach(ge)}function we(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function be(e){return Object.keys(e).length===0}function ie(e){return e==null?"":e}function u(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode.removeChild(e)}function oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function b(){return I(" ")}function $e(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ke(e){return Array.from(e.childNodes)}function F(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let ee;function L(e){ee=e}const T=[],ce=[],K=[],ue=[],qe=Promise.resolve();let Q=!1;function xe(){Q||(Q=!0,qe.then(ve))}function R(e){K.push(e)}const D=new Set;let P=0;function ve(){const e=ee;do{for(;P<T.length;){const t=T[P];P++,L(t),Ae(t.$$)}for(L(null),T.length=0,P=0;ce.length;)ce.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];D.has(n)||(D.add(n),n())}K.length=0}while(T.length);for(;ue.length;)ue.pop()();Q=!1,D.clear(),L(e)}function Ae(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}const U=new Set;let Ee;function X(e,t){e&&e.i&&(U.delete(e),e.i(t))}function fe(e,t,n,l){if(e&&e.o){if(U.has(e))return;U.add(e),Ee.c.push(()=>{U.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function de(e){e&&e.c()}function G(e,t,n,l){const{fragment:s,on_mount:a,on_destroy:f,after_update:i}=e.$$;s&&s.m(t,n),l||R(()=>{const d=a.map(ge).filter(we);f?f.push(...d):z(d),e.$$.on_mount=[]}),i.forEach(R)}function Y(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(e,t){e.$$.dirty[0]===-1&&(T.push(e),xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,l,s,a,f,i=[-1]){const d=ee;L(e);const c=e.$$={fragment:null,ctx:null,props:a,update:$,not_equal:s,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:re(),dirty:i,skip_bound:!1,root:t.target||d.$$.root};f&&f(c.root);let x=!1;if(c.ctx=n?n(e,t.props||{},(g,v,...w)=>{const k=w.length?w[0]:v;return c.ctx&&s(c.ctx[g],c.ctx[g]=k)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](k),x&&Ie(e,g)),v}):[],c.update(),x=!0,z(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const g=ke(t.target);c.fragment&&c.fragment.l(g),g.forEach(q)}else c.fragment&&c.fragment.c();t.intro&&X(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),ve()}L(d)}class ne{$destroy(){Y(this,1),this.$destroy=$}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!be(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Se(e){let t;return{c(){t=h("section"),t.innerHTML=`<p class="header-hi svelte-acbfvq"><span class="svelte-acbfvq">\u{1F44B}</span> Hi, my name is</p> 
    <p class="header-name svelte-acbfvq">Alex Betts</p> 
    <p class="header-description svelte-acbfvq"><span class="svelte-acbfvq">I&#39;m a software developer, a student at <a href="https://www.kent.ac.uk/" class="svelte-acbfvq">UKC</a>, and a\xA0</span> 
        <span class="flip-container svelte-acbfvq"><span class="flip svelte-acbfvq">origamist \u{1F426}</span> 
            <span class="flip svelte-acbfvq">rustacean \u{1F980}</span> 
            <span class="flip svelte-acbfvq">rabbit owner \u{1F407}</span> 
            <span class="flip svelte-acbfvq">gamer \u{1F3AE}</span> 
            <span class="flip svelte-acbfvq">maker \u{1FA9B}</span></span></p>`,p(t,"class","intro svelte-acbfvq")},m(n,l){S(n,t,l)},p:$,i:$,o:$,d(n){n&&q(t)}}}class Ce extends ne{constructor(t){super(),te(this,t,null,Se,Z,{})}}const Te=[{id:1,title:"Software Engineer",company:"Edwards Vacuum",url:"https://edwardsvacuum.com/",duration:"Aug '21 - Present",details:["This is my year in industry placement as part of my computer science course at UKC","I was employed as part of the UI design team for the Edwards S3 project, implementing the interface which displays information about different systems, such as vacuum pumps","I followed the agile scrum process and I was part of stand-ups every morning, as well as sprint reviews and retrospectives at the end of each sprint"]},{id:2,title:"Student Software Engineer",company:"Edwards Vacuum",url:"https://edwardsvacuum.com/",duration:"Jun - Sep '20",details:["This was a temporary summer placement in which I was tasked with developing a device to interface with the pump controllers","The main device was an ESP32 with an XLR connector which plugged directly into the pump controller","It used MQTT to publish the data so it could be aggregated and displayed clearly for the client","I designed a cross-platform application to display the data from the pumps, which also supported bluetooth connectivity"]},{id:3,title:"Floor Attendant",company:"Admiral Casino",url:"https://www.admiralcasino.co.uk/",duration:"May - Sep '19",details:["I worked in the arcade called Flamingo which is owned by Admiral Casino","My job was to refill prizes in machines, empty collected coins out the bottom of the machines, exchange tickets for prizes, and assisting customers with any issues they have","On occasion, I also exchanged and counted money"]},{id:4,title:"Assistant Web Developer",company:"Battle VA",url:"",duration:"Mar '15 - Aug '18",details:["I worked on small websites for customers, kept them up to date with my progress, and regularly checked in to see if they wanted any changes","I also managed existing websites using the Joomla CMS"]}];var V={history:Te};function pe(e,t,n){const l=e.slice();return l[4]=t[n],l}function he(e,t,n){const l=e.slice();return l[7]=t[n],l}function me(e){let t,n=e[7].company+"",l,s,a,f;function i(){return e[3](e[7])}return{c(){t=h("button"),l=I(n),p(t,"class",s=ie(e[7].id===e[0]?"tab active":"tab")+" svelte-10eq6mw")},m(d,c){S(d,t,c),u(t,l),a||(f=$e(t,"click",i),a=!0)},p(d,c){e=d,c&1&&s!==(s=ie(e[7].id===e[0]?"tab active":"tab")+" svelte-10eq6mw")&&p(t,"class",s)},d(d){d&&q(t),a=!1,f()}}}function _e(e){let t,n=e[4]+"",l;return{c(){t=h("li"),l=I(n),p(t,"class","detail svelte-10eq6mw")},m(s,a){S(s,t,a),u(t,l)},p(s,a){a&2&&n!==(n=s[4]+"")&&F(l,n)},d(s){s&&q(t)}}}function Le(e){let t,n,l,s,a,f,i,d,c=e[1].title+"",x,g,v,w,k=e[1].company+"",J,M,se,O,le,j,H=e[1].duration+"",W,ae,N,B,A=V.history,m=[];for(let o=0;o<A.length;o+=1)m[o]=me(he(e,A,o));let E=e[1].details,_=[];for(let o=0;o<E.length;o+=1)_[o]=_e(pe(e,E,o));return{c(){t=h("section"),n=h("div"),n.textContent="Work History",l=b(),s=h("div"),a=h("div");for(let o=0;o<m.length;o+=1)m[o].c();f=b(),i=h("div"),d=h("div"),x=I(c),g=b(),v=h("div"),w=h("a"),J=I(k),se=b(),O=h("span"),O.textContent="\u2022",le=b(),j=h("span"),W=I(H),ae=b(),N=h("div"),B=h("ul");for(let o=0;o<_.length;o+=1)_[o].c();p(n,"class","section-title svelte-10eq6mw"),p(a,"class","tabs svelte-10eq6mw"),p(d,"class","title svelte-10eq6mw"),p(w,"class","company"),p(w,"href",M=e[1].url),p(O,"class","separator"),p(j,"class","duration"),p(v,"class","company-duration svelte-10eq6mw"),p(N,"class","details svelte-10eq6mw"),p(i,"class","content svelte-10eq6mw"),p(s,"class","table svelte-10eq6mw"),p(t,"id","work-history"),p(t,"class","work-history svelte-10eq6mw")},m(o,y){S(o,t,y),u(t,n),u(t,l),u(t,s),u(s,a);for(let r=0;r<m.length;r+=1)m[r].m(a,null);u(s,f),u(s,i),u(i,d),u(d,x),u(i,g),u(i,v),u(v,w),u(w,J),u(v,se),u(v,O),u(v,le),u(v,j),u(j,W),u(i,ae),u(i,N),u(N,B);for(let r=0;r<_.length;r+=1)_[r].m(B,null)},p(o,[y]){if(y&5){A=V.history;let r;for(r=0;r<A.length;r+=1){const C=he(o,A,r);m[r]?m[r].p(C,y):(m[r]=me(C),m[r].c(),m[r].m(a,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=A.length}if(y&2&&c!==(c=o[1].title+"")&&F(x,c),y&2&&k!==(k=o[1].company+"")&&F(J,k),y&2&&M!==(M=o[1].url)&&p(w,"href",M),y&2&&H!==(H=o[1].duration+"")&&F(W,H),y&2){E=o[1].details;let r;for(r=0;r<E.length;r+=1){const C=pe(o,E,r);_[r]?_[r].p(C,y):(_[r]=_e(C),_[r].c(),_[r].m(B,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=E.length}},i:$,o:$,d(o){o&&q(t),oe(m,o),oe(_,o)}}}function Me(e,t,n){let l=1,s=V.history[0];function a(i){n(0,l=i),n(1,s=V.history[i-1])}return[l,s,a,i=>a(i.id)]}class Oe extends ne{constructor(t){super(),te(this,t,Me,Le,Z,{})}}function je(e){let t,n,l,s,a,f;return l=new Ce({}),a=new Oe({}),{c(){t=b(),n=h("main"),de(l.$$.fragment),s=b(),de(a.$$.fragment),document.title="hexbun | Alex Betts"},m(i,d){S(i,t,d),S(i,n,d),G(l,n,null),u(n,s),G(a,n,null),f=!0},p:$,i(i){f||(X(l.$$.fragment,i),X(a.$$.fragment,i),f=!0)},o(i){fe(l.$$.fragment,i),fe(a.$$.fragment,i),f=!1},d(i){i&&q(t),i&&q(n),Y(l),Y(a)}}}class He extends ne{constructor(t){super(),te(this,t,null,je,Z,{})}}new He({target:document.getElementById("app")});
