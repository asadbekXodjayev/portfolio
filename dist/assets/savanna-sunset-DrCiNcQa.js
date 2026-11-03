import{G as T,f as b,K as e,c as y,r as Y,p as _,g as D}from"./kit-CQ7bAj5D.js";const E=[],A=l=>{const m=E.length;return E.push(...l),m},K=A(D(["#2a0a20","#6a1420","#b42a18","#e8581a","#f8902a","#ffc24a"],16)),z=A(D(["#ff9a2a","#ffc850","#ffe890","#fff8d0"],5)),r=A(["#140606","#2a0c08","#4a1a0c","#6a2a10"]),B=A(["#3a0c0c"]),H={slug:"savanna-sunset",name:"Savanna Sunset",category:"landscapes",note:"Acacia trees stand black against a huge orange sun while giraffes and elephants walk across the plain.",tags:["nature","sunset","africa","animals","wallpaper","hero"],cols:104,rows:36,fps:15,palette:_(E)},G=[`          ▄█▄
          ██▀
         ██
        ██
  ▄▄▄▄▄██
 ████████
 ▐█▀▀▀▀█▌
 █ ▌   █▐
 ▌ ▐   ▌ ▌`,`          ▄█▄
          ██▀
         ██
        ██
  ▄▄▄▄▄██
 ████████
 ▐█▀▀▀▀█▌
 ▐▌ █ ▐▌█
  ▌ ▌ ▌ ▌`],R=[`  ▄▄████▄▄
 ██████████▄
▐██████████▀█
▐█████████ ▐▌
 █▌█▌  █▌█ ▐
 ▌ ▐   ▌ ▐`,`  ▄▄████▄▄
 ██████████▄
▐██████████▀█
▐█████████ ▐▌
 ▐█ █▌ ▐█ █▐
  ▌ ▐   ▌ ▐`];function U(){const{cols:l,rows:m}=H,s=new T(l,m),F=Y(8),h=26,w=54,k=22,d=15,u=Array.from({length:l},(a,c)=>h+Math.round(b(c*.05,1,2,3)*2-1)),I=[[18,1],[80,1.3],[94,.7],[40,.6]],N=Array.from({length:7},(a,c)=>[c*3-c%2*1.5,Math.abs(c-3)*1,F()*6]),P=(a,c)=>{const x=u[Math.max(0,Math.min(l-1,a))],p=Math.round(9*c),f=x-p;for(let o=f;o<x;o++)s.set(a,o,"█",e[r]);const v=Math.round(6*c);s.line(a,f+3,a-v,f,"▀",e[r]),s.line(a,f+2,a+v,f-1,"▀",e[r]),s.line(a,f+1,a+2,f-1,"█",e[r]);const g=Math.round(14*c),t=f-1;for(let o=t-Math.max(1,Math.round(2*c));o<=t;o++)for(let n=a-g;n<=a+g;n++){const i=Math.abs(n-a)/g+(t-o)*.35/c,M=b(n*.4,o*.8,2,a);i<.85+M*.35&&s.set(n,o,i>.9?"▄":"█",e[r])}};return a=>{s.clear();for(let t=0;t<=h;t++)for(let o=0;o<l;o++){const n=b(o*.02+a*.03,t*.35,3,2),i=Math.exp(-Math.hypot((o-w)/2,t-k)/16),M=y(.1+t/h*.55+i*.45+(n-.5)*.25);s.set(o,t,n>.6?"▓":M>.7?"█":"▒",e[K+y(Math.floor(M*16),0,15)])}for(let t=k-d;t<=h;t++)for(let o=w-d*2;o<=w+d*2;o++){const n=Math.hypot((o-w)/(d*2),(t-k)/d);if(n>1)continue;if(Math.sin(t*1.3-a*.6+b(o*.05+a*.1,t*.2,2,9)*2)>.82&&t>k-d*.4){s.set(o,t,"▒",e[K+12]);continue}const M=y(1-n*.8+(t-k)*.01);s.set(o,t,n>.94?"▓":"█",e[z+y(Math.floor(M*5),0,4)])}const c=a*3%(l+30)-15,x=7+Math.sin(a*.3)*2;for(const[t,o,n]of N)s.text(c+t,x+o,Math.sin(a*6+n)>0?"v":"-",e[B]);for(let t=0;t<l;t++)for(let o=u[t];o<m;o++){const n=(o-u[t])/(m-u[t]),i=b(t*.1,o*.4,2,6),M=Math.exp(-(((t-w)/40)**2))*(1-n),S=y(M*.8+(i-.5)*.4+(Math.sin(t*.3+o*2.1)>.7?.15:0));s.set(t,o,S>.5?"▓":S>.25?"▒":"█",e[r+y(Math.floor(S*4),0,3)])}for(let t=0;t<l;t++){const o=b(t*.6,3,2,4),n=Math.sin(a*2+t*.3)>.5;o>.45&&s.set(t,u[t]-1,n?"/":"|",e[r]),o>.62&&s.set(t+(n?1:0),u[t]-2,"'",e[r])}for(const[t,o]of I)P(t,o);const p=Math.floor(a*3)%2,f=l+40,v=a*2.2%f-20;s.block(Math.round(v),h-9,G[p],e[r]),s.block(Math.round(v)-14,h-8,G[1-p],e[r]);const g=(a*1.6+60)%f-20;return s.block(Math.round(g),h-5,R[p],e[r]),s.block(Math.round(g)-15,h-5,R[1-p],e[r]),s.frame()}}export{U as default,H as meta};
