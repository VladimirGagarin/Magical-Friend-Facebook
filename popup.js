document.addEventListener("DOMContentLoaded",(function(){if(navigator.onLine)window.location.replace("index.html");else{const t=document.getElementById("offline-audio"),n=document.getElementById("reload-button"),o=document.querySelector(".lyrical-word-song"),i=document.body,a=[{time:18,text:"Do you think you could try and (try and)."},{time:22,text:"Tell me what's got you hiding? (What's got you hiding?)"},{time:25,text:"What's all on your mind when you can't sleep"},{time:29,text:"I can see that you're holding (you're holding)"},{time:34,text:"Holding back and not showing (not showing)"},{time:37,text:"What's all on your mind when you're with me"},{time:41,text:"I just wanna tell you now (tell you now)"},{time:44,text:"I would never let you down (let you down)"},{time:48,text:"If you feel like you're falling to the ground (falling to the ground)"},{time:52,text:"You don't wanna take that chance (take that chance)"},{time:56,text:"Thinkin' I won't understand (understand)"},{time:60,text:"But honestly, I promise you I can (promise you I can)"},{time:66,text:"Take my hand"},{time:70,text:"Believe me when I say"},{time:73,text:"I'm here for you always (here for you always)"},{time:79,text:"Take my hand"},{time:82,text:" And everything could change"},{time:85,text:" But one thing stays the same"},{time:88,text:"I'm here for you always"},{time:100,text:"I'm here for you always"},{time:111,text:"I'm here for you always"},{time:120,text:"Hear the waves of the ocean"},{time:124,text:"They will never stop flowing"},{time:128,text:"It helps when you feel uncertainty"},{time:131,text:"I just wanna tell you now (tell you now)"},{time:134,text:"I would never let you down (let you down)"},{time:138,text:"If you feel like you're falling to the ground (falling to the ground)"},{time:145,text:"Take my hand"},{time:149,text:"Believe me when I say"},{time:152,text:"I'm here for you always (here for you always)"},{time:158,text:"Take my hand"},{time:161,text:"And everything could change"},{time:164,text:"But one thing stays the same"},{time:168,text:"I'm here for you always"},{time:178,text:"I'm here for you always"},{time:186,text:"I'm here for you always"},{time:191,text:"I just wanna say"},{time:195,text:"I'm here for you always,"},{time:199,text:"Take my hand"},{time:195,text:"Believe me when I say"},{time:199,text:"I'm here for you always"}];let l=0;function e(){const e=document.querySelector(".offline-indicator");navigator.onLine?e.style.display="none":e.style.display="block"}t.addEventListener("play",(()=>{i.classList.add("audio-playing"),l=0,o.innerHTML="";const e=setInterval((()=>{!function(){const e=t.currentTime;l<a.length&&e>=a[l].time&&(o.innerHTML=`<p style="font-weight: bold;">${a[l].text}</p>`,l++)}(),t.ended&&(clearInterval(e),i.classList.remove("audio-playing"))}),100)})),n.addEventListener("click",(()=>{window.location.reload()})),e(),window.addEventListener("online",e),window.addEventListener("offline",e)}}));