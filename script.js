document.addEventListener("DOMContentLoaded",(()=>{setTimeout((()=>{document.getElementById("magicload").style.display="none",document.body.style.overflow="auto"}),2e3)})),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{console.log("Service Worker registered with scope:",e.scope)})).catch((e=>{console.error("Service Worker registration failed:",e)}))})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("nav ul li a[data-tooltip]").forEach((e=>{e.addEventListener("mouseover",(()=>{e.classList.add("show-tooltip")})),e.addEventListener("mouseout",(()=>{e.classList.remove("show-tooltip")}))}))})),document.getElementById("menu").addEventListener("click",(function(){document.querySelector(".floating-nav").classList.toggle("show-menu")})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll("nav ul li a"),t=document.querySelectorAll(".section");e.forEach((n=>{n.addEventListener("click",(o=>{o.preventDefault();const i=n.getAttribute("href").substring(1);localStorage.setItem("activeSection",i),window.location.reload(),e.forEach((e=>e.classList.remove("active"))),n.classList.add("active"),t.forEach((e=>{e.id===i?e.classList.add("active"):e.classList.remove("active")}))}))}));const n=localStorage.getItem("activeSection")||"home";t.forEach((e=>{e.id===n?e.classList.add("active"):e.classList.remove("active")})),e.forEach((e=>{e.getAttribute("href").substring(1)===n?e.classList.add("active"):e.classList.remove("active")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("logo-magical-friend"),t=document.getElementById("about-magical-friend"),n=document.querySelector(".about-magical-friend .about-close"),o=document.getElementById("about-text");let i=!1,a=!1;function s(){i||a||setTimeout((()=>{t.style.display="block",setTimeout((()=>{!function(e,t){i=!0;let n=0;function o(){n<e.length?(t.textContent+=e.charAt(n),n++,setTimeout(o,50)):(i=!1,a=!0)}o()}("Magical Friend partners in friendship with Facebook, bringing magical moments to your social networking experience.",o)}),1e3)}),2e3)}e.addEventListener("mouseenter",s),e.addEventListener("touchstart",s),n.addEventListener("click",(function(){t.style.display="none",o.textContent="",i=!1,a=!1}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("owner-form"),t=document.getElementById("image"),n=document.getElementById("image-preview"),o=document.getElementById("owner-details"),i=document.getElementById("Profile"),a=document.querySelector(".owner-form-container"),s=localStorage.getItem("myself");if(s){const e=JSON.parse(s);d(e),r(e),c(e)}else i.innerHTML="<h2>No Profile Yet</h2>";function d(t){e.style.display="none",a.style.display="none";const n=document.querySelector('nav ul li a[href="#Profile"]'),i=document.querySelector('nav ul li a[href="#Profile"] img');n.innerHTML=`<img src="${t.image}" alt="${t.facebookName}">`,i.src=t.image,o.innerHTML=`<li><a href="#Profile" data-tooltip="Me"><img src="${t.image}" alt="${t.facebookName}"></a></li>`}function r(e){document.querySelector('nav ul li a[href="#Profile"]').innerHTML=`<img src="${e.image}" alt="${e.facebookName}">`}function c(e){i.innerHTML=`\n        <button id="edit-profile">Edit Profile</button>\n        <h2>${e.facebookName}</h2>\n        <img src="${e.image}" alt="${e.facebookName}">\n        <p>${e.bio}</p>\n        <button id="log-out">Log Out</button>\n        `;document.getElementById("edit-profile").addEventListener("click",(()=>{!function(e){i.innerHTML=`\n        <div class="owner-form-container">\n            <h3>Edit Profile</h3>\n            <form id="edit-profile-form">\n            <div class="form-group">\n                <label for="edit-facebook-name">Facebook Name</label>\n                <input type="text" id="edit-facebook-name" name="edit-facebook-name" value="${e.facebookName}" required>\n            </div>\n            <div class="form-group">\n                <label for="edit-image">Profile Picture</label>\n                <input type="file" id="edit-image" name="edit-image" accept="image/*">\n                <div class="image-overview" id="edit-image-preview"></div>\n            </div>\n            <div class="form-group">\n                <label for="edit-bio">Bio</label>\n                <textarea id="edit-bio" name="edit-bio" rows="4" required>${e.bio}</textarea>\n            </div>\n            <div class="button-group">\n                <button type="button" id="cancel-edit">Cancel</button>\n                <button type="submit" id="save-edit">Save</button>\n            </div>\n            </form>\n        </div>\n        `;document.getElementById("cancel-edit").addEventListener("click",(()=>{c(e)}));const t=document.getElementById("edit-image"),n=document.getElementById("edit-image-preview");t.addEventListener("change",(()=>{const e=t.files[0];if(e){const t=new FileReader;t.onload=()=>{n.innerHTML=`<img src="${t.result}" alt="Image Preview">`},t.readAsDataURL(e)}}));document.getElementById("edit-profile-form").addEventListener("submit",(t=>{t.preventDefault(),function(e){const t=document.getElementById("edit-facebook-name").value,n=document.getElementById("edit-bio").value,o=document.getElementById("edit-image").files[0];if(o){const e=new FileReader;e.readAsDataURL(o),e.onload=()=>{const o={facebookName:t,image:e.result,bio:n};localStorage.setItem("myself",JSON.stringify(o)),d(o),c(o)}}else{const o={facebookName:t,image:e.image,bio:n};localStorage.setItem("myself",JSON.stringify(o)),d(o),c(o)}}(e),window.location.reload()}))}(e)}));document.getElementById("log-out").addEventListener("click",(function(){localStorage.clear(),alert("You have been logged out.")}))}e.addEventListener("submit",(e=>{e.preventDefault();const n=document.getElementById("facebook-name").value,o=document.getElementById("bio").value,i=t.files[0];if(i){const e=new FileReader;e.readAsDataURL(i),e.onload=()=>{const t={facebookName:n,bio:o,image:e.result};localStorage.setItem("myself",JSON.stringify(t)),d(t),r(t),c(t),window.location.reload()}}})),t.addEventListener("change",(()=>{const e=t.files[0];if(e){const t=new FileReader;t.onload=()=>{n.innerHTML=`<img src="${t.result}" alt="Image Preview">`},t.readAsDataURL(e)}}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("new-quote-btn");function t(){e.disabled=!0,fetch("https://api.quotable.io/random").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((t=>{t&&t.content?function(t){const n=document.getElementById("quote-text");n.textContent="";let o=0;const i=50;function a(){o<t.length?(n.textContent+=t.charAt(o),o++,setTimeout(a,i)):e.disabled=!1}a()}(t.content):n()})).catch((e=>{console.error("Error fetching quote:",e),n()})).finally((()=>{e.disabled=!1}))}function n(){const e=document.getElementById("quote-text");e.textContent="No quote available. Check out our FAQs!";const t=document.createElement("div");t.classList.add("faq-container"),[{question:"What is Magical Friend?",answer:"Magical Friend is a unique interactive experience where you can create and customize animated cubes with images of your friends, accompanied by music and animations."},{question:"How can I create a Magical Friend?",answer:"To create a Magical Friend, simply upload images of your friends and customize the animated cubes using our intuitive interface. Add music and animations to make it truly magical!"},{question:"Is Magical Friend associated with Facebook?",answer:"No, Magical Friend is a standalone web application. While you can upload images from your device, there is no direct integration with Facebook or any other social media platform."},{question:"Can I share my Magical Friend creations?",answer:"Yes, you can share your Magical Friend creations by downloading them as videos or images. Share them with your friends and family to spread the magic!"},{question:"Is there a cost to use Magical Friend?",answer:"Magical Friend is completely free to use! Enjoy creating and sharing magical moments with your friends without any costs."},{question:"Can I save my Magical Friend creations?",answer:"Yes, you can save your Magical Friend creations locally on your device. This allows you to revisit and edit them whenever you like."},{question:"Are there limits to how many friends' images I can use?",answer:"There are no strict limits on the number of friends' images you can use. However, the performance may vary based on the number and size of images."},{question:"Can I customize the animations and music in my Magical Friend?",answer:"Absolutely! Magical Friend offers customization options for animations and music. You can choose from a selection of themes and music tracks to suit your creation."},{question:"Is Magical Friend suitable for children?",answer:"Yes, Magical Friend is designed to be family-friendly and suitable for users of all ages. It provides a safe and creative environment for expressing friendship."},{question:"How often are new features added to Magical Friend?",answer:"We strive to continuously improve Magical Friend by adding new features and enhancements. Stay tuned for updates and exciting new capabilities!"}].forEach((e=>{const n=document.createElement("div");n.classList.add("faq-item");const o=document.createElement("div");o.classList.add("faq-question"),o.textContent=e.question;const i=document.createElement("div");i.classList.add("faq-answer"),i.textContent=e.answer,i.style.display="none",o.addEventListener("click",(()=>{i.style.display="none"===i.style.display?"block":"none",function(e){const t=e.textContent;e.textContent="";let n=0;const o=50;function i(){n<t.length&&(e.textContent+=t.charAt(n),n++,setTimeout(i,o))}i()}(i)})),n.appendChild(o),n.appendChild(i),t.appendChild(n)})),e.appendChild(t)}t(),e.addEventListener("click",t)})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".tic-tac-toe .cell"),t=JSON.parse(localStorage.getItem("myself")),n=t?t.facebookName:"Player";let o=n,i=["","","","","","","","",""],a=0,s=0;const d=()=>t?t.image:null,r=e=>{const t=document.querySelector(".notificationed");t.textContent=e,t.classList.add("show"),setTimeout((()=>{t.classList.remove("show")}),5e3)},c=()=>{const t=d();i.forEach(((n,o)=>{const i=e[o];i.className=`cell ${n.toLowerCase()}`,"O"===n?t?(i.style.backgroundImage=`url(${t})`,i.style.backgroundSize="cover",i.style.backgroundPosition="center",i.textContent=""):(i.style.backgroundImage="",i.textContent="O"):"X"===n?(i.style.backgroundImage="url(logo.png)",i.textContent=""):(i.style.backgroundImage="",i.textContent="")})),l()},l=()=>{document.querySelector(".score .result").textContent=`Player: ${a} - Computer: ${s}`};document.querySelector(".score button").addEventListener("click",(()=>{a=0,s=0,l(),f()}));const m=(e,t)=>{const n=e.map(((e,t)=>""===e?t:null)).filter((e=>null!==e)),o=(e,t)=>{const n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const o of n){const[n,i,a]=o;if(e[n]===t&&e[n]===e[i]&&e[n]===e[a])return!0}return!1};if(o(e,"O"))return{score:-10};if(o(e,"X"))return{score:10};if(0===n.length)return{score:0};const i=[];for(let o=0;o<n.length;o++){const a={};if(a.index=n[o],e[n[o]]=t,"X"===t){const t=m(e,"O");a.score=t.score}else{const t=m(e,"X");a.score=t.score}e[n[o]]="",i.push(a)}let a;if("X"===t){let e=-1e4;for(let t=0;t<i.length;t++)i[t].score>e&&(e=i[t].score,a=t)}else{let e=1e4;for(let t=0;t<i.length;t++)i[t].score<e&&(e=i[t].score,a=t)}return i[a]},u=()=>{const e=m(i,"X");i[e.index]="X",c(),g("X")?(s++,r("Computer (X) wins!"),setTimeout((()=>{f()}),2e3)):i.includes("")?o=n:(r("It's a draw!"),setTimeout((()=>{f()}),2e3))},g=t=>{const n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const o of n){const[n,a,s]=o;if(i[n]===t&&i[n]===i[a]&&i[n]===i[s])return e[n].classList.add("win"),e[a].classList.add("win"),e[s].classList.add("win"),!0}return!1},f=()=>{o=n,i=["","","","","","","","",""],c(),e.forEach((e=>{e.classList.remove("win"),e.textContent="",c()}))};e.forEach(((e,t)=>{e.addEventListener("click",(()=>(e=>{""===i[e]&&o===n&&(i[e]="O",c(),g("O")?(a++,r(`${o} wins!`),setTimeout((()=>{f()}),2e3)):i.includes("")?(o="X",setTimeout(u,500)):(r("It's a draw!"),setTimeout((()=>{f()}),2e3)))})(t)))})),c();(()=>{const e=document.getElementById("player-img"),t=d();e.src=t||""})()})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("friend-form"),t=document.getElementById("friend-name"),n=document.getElementById("friend-image"),o=document.getElementById("friend-emotion"),i=document.getElementById("friend-description"),a=document.getElementById("add-friend-button"),s=document.getElementById("image-previews"),d=document.getElementById("friends-list"),r=document.getElementById("count"),c=document.getElementById("magic-view");let l=0,m=[];function u(){a.disabled=!(t.value.trim()&&n.files.length&&"none"!==o.value&&i.value.trim())}function g(){localStorage.setItem("friends",JSON.stringify(m))}function f(){d.innerHTML="",m.forEach(((e,t)=>{const{name:n,image:o,emotion:i,description:a}=e,s=document.createElement("li");s.classList.add("friend-item"),s.innerHTML=`\n                <div class="friend-number">#${t+1}</div>\n                <img src="${o}" alt="${n}">\n                <div class="friend-details">\n                    <h4>${n}</h4>\n                    <p><strong>Emotion:</strong> <b>${i}</b></p>\n                    <p><b>${a}</b></p>\n                </div>\n                 <div class="friend-actions">\n                    <i class="fas fa-arrow-up ${0===t?"disabled":""}" onclick="moveUp(${t})"></i>\n                    <i class="fas fa-arrow-down ${t===m.length-1?"disabled":""}" onclick="moveDown(${t})"></i>\n                    <i class="fas fa-exchange-alt" onclick="showRanking(${t})"></i>\n                    <i class="fas fa-edit" onclick="editFriend(${t})"></i>\n                    <i class="fas fa-trash" onclick="deleteFriend(${t})"></i>\n            </div>\n            `,d.appendChild(s)})),function(){const e=d.children.length;r.textContent=e,e<5?(c.classList.add("disabled"),c.textContent="Create more friends to go to magic world"):(c.classList.remove("disabled"),c.textContent="Go to magic view")}()}e.addEventListener("input",u),n.addEventListener("change",(()=>{const e=n.files[0];if(e){const t=new FileReader;t.onload=()=>{s.innerHTML=`<img src="${t.result}" alt="Image Preview">`},t.readAsDataURL(e)}else s.innerHTML="";u()})),window.moveUp=function(e){if(e>0){const t=document.querySelectorAll(".friend-item");t[e].style.transform="translateY(-100%)",t[e-1].style.transform="translateY(100%)",setTimeout((()=>{const n=m[e-1];m[e-1]=m[e],m[e]=n,g(),f(),t.forEach((e=>e.style.transform=""))}),500)}},window.moveDown=function(e){if(e<m.length-1){const t=document.querySelectorAll(".friend-item");t[e].style.transform="translateY(100%)",t[e+1].style.transform="translateY(-100%)",setTimeout((()=>{const n=m[e+1];m[e+1]=m[e],m[e]=n,g(),f(),t.forEach((e=>e.style.transform=""))}),500)}},window.showRanking=function(e){const t=document.createElement("div");t.classList.add("ranking-container");const n=document.createElement("div");n.classList.add("ranking-list");const o=document.createElement("div");o.classList.add("close-ranking-button"),o.innerHTML="&times;",o.onclick=()=>t.remove(),m.forEach(((t,o)=>{const i=document.createElement("div");i.classList.add("rank-item"),o===e&&i.classList.add("current-rank"),i.textContent=o+1,i.onclick=()=>changeRank(e,o),n.appendChild(i)})),n.appendChild(o),t.appendChild(n),document.body.appendChild(t)},window.changeRank=function(e,t){const n=m.splice(e,1)[0];m.splice(t,0,n),g(),f(),document.querySelector(".ranking-container").remove()},e.addEventListener("submit",(d=>{d.preventDefault();const r=t.value.trim(),c=n.files[0],l=o.value,u=i.value.trim(),h=new FileReader;h.onload=()=>{const t=h.result;m.push({name:r,image:t,emotion:l,description:u}),g(),f(),e.reset(),s.innerHTML="",a.disabled=!0},h.readAsDataURL(c)})),window.editFriend=function(e){const t=m[e],n=document.createElement("div");n.classList.add("edit-form-container");const o=document.createElement("form");o.classList.add("edit-form"),o.innerHTML=`\n            <h3>Edit Friend</h3>\n            <div class="form-group">\n                <label for="edit-name">Name:</label>\n                <input type="text" id="edit-name" name="edit-name" value="${t.name}" required>\n            </div>\n            <div class="form-group">\n                <label for="edit-image">Image:</label>\n                <input type="file" id="edit-image" name="edit-image" accept="image/*">\n                <div id="edit-image-preview"><img src="${t.image}" alt="Image Preview"></div>\n            </div>\n            <div class="form-group">\n                <label for="edit-emotion">Emotion:</label>\n                <select id="edit-emotion" name="edit-emotion" required>\n                   <option value="none" disabled selected>How do you feel about your friend</option>\n                    <option value="joyful">😊 Joyful</option>\n                    <option value="grateful">🙏 Grateful</option>\n                    <option value="excited">😃 Excited</option>\n                    <option value="inspired">🌟 Inspired</option>\n                    <option value="supported">🤗 Supportive</option>\n                    <option value="amused">😄 Amused</option>\n                    <option value="comforted">💖 Comforted</option>\n                    <option value="appreciative">👏 Appreciative</option>\n                    <option value="lovely">😍 Lovely</option>\n                    <option value="cherished">💝 Cherished</option>\n                </select>\n            </div>\n            <div class="form-group">\n                <label for="edit-description">Description:</label>\n                <textarea id="edit-description" name="edit-description" required>${t.description}</textarea>\n            </div>\n            <div class="form-actions">\n                <button type="button" id="edit-close">Cancel</button>\n                <button type="submit">Done</button>\n            </div>\n        `,n.appendChild(o),d.replaceChild(n,d.children[e]);const i=o.querySelector("#edit-image"),a=o.querySelector("#edit-image-preview img");i.addEventListener("change",(()=>{const e=i.files[0];if(e){const t=new FileReader;t.onload=()=>{a.src=t.result},t.readAsDataURL(e)}else a.src=t.image})),o.addEventListener("submit",(e=>{if(e.preventDefault(),t.name=o.querySelector("#edit-name").value.trim(),t.emotion=o.querySelector("#edit-emotion").value,t.description=o.querySelector("#edit-description").value.trim(),i.files.length>0){const e=new FileReader;e.onload=()=>{t.image=e.result,g(),f()},e.readAsDataURL(i.files[0])}else g(),f();window.location.reload()}));document.getElementById("edit-close").onclick=()=>{f()}},window.deleteFriend=function(e){const t=document.createElement("div");t.classList.add("confirmation-overlay"),t.innerHTML='\n            <div class="confirmation-box">\n                <p>Are you sure you want to delete this friend?</p>\n                <div class="confirmation-buttons">\n                    <button class="confirm-button">Yes</button>\n                    <button class="cancel-button">No</button>\n                </div>\n            </div>\n        ',document.body.appendChild(t);const n=t.querySelector(".confirm-button"),o=t.querySelector(".cancel-button");n.addEventListener("click",(()=>{m.splice(e,1),d.querySelectorAll(".friend-item").forEach(((e,t)=>{e.querySelector(".friend-number").textContent=`#${t+1}`})),g(),t.remove(),f(),window.location.reload()})),o.addEventListener("click",(()=>{t.remove()}))},function(){const e=localStorage.getItem("friends");e&&(m=JSON.parse(e),l=m.length,f())}()}));const selectedFriends=[];function getFriendsFromLocalStorage(){const e=localStorage.getItem("friends");return e?JSON.parse(e):[]}function displayFriends(){const e=document.getElementById("friend-listing");e.innerHTML="";getFriendsFromLocalStorage().forEach((t=>{const n=document.createElement("div");n.classList.add("ingredient"),n.innerText=t.name,n.onclick=()=>selectIngredient(t.name,n),e.appendChild(n)}))}function selectIngredient(e,t){(selectedFriends.length<2||selectedFriends.includes(e))&&(selectedFriends.includes(e)?(selectedFriends.splice(selectedFriends.indexOf(e),1),t.classList.remove("selected")):(selectedFriends.push(e),t.classList.add("selected")),selectedFriends.length<2&&document.querySelectorAll(".ingredient.disabled").forEach((e=>{e.onclick=()=>selectIngredient(e.innerText,e),e.classList.remove("disabled")})),2===selectedFriends.length&&document.querySelectorAll(".ingredient").forEach((e=>{selectedFriends.includes(e.innerText)||(e.onclick=null,e.classList.add("disabled"))})))}function updatePotionDisplay(){document.getElementById("potion").innerText="Your potion will appear here!",document.getElementById("message").innerText=""}function brewPotion(){if(selectedFriends.length<2)return void(document.getElementById("message").innerText="Please select at least two friends!");const e=generateBabyName(selectedFriends[0],selectedFriends[1]);document.getElementById("potion").innerHTML=`👶 Baby name: ${e}`,document.getElementById("message").innerText="Potion successfully brewed!"}function generateBabyName(e,t){const n=`${e.split(" ")[0].substring(0,3)}${t.split(" ")[1]?t.split(" ")[1].substring(0,3):t.substring(0,3)}`.toLowerCase();return n.charAt(0).toUpperCase()+n.slice(1)}function resetGame(){selectedFriends.length=0,displayFriends(),updatePotionDisplay()}displayFriends();const quizGameSelectedFriends=[],questions=["Who will have the cutest baby between?","Who is most likely to be a superhero?","Who would make the best chef?","Who is the funniest?","Who would survive a zombie apocalypse?","Who is the most likely to become a millionaire?","Who is the best storyteller?","Who would make the best reality TV star?","Who has the most adventurous spirit?","Who is the best at giving advice?","Who would make the best travel blogger?","Who has the most contagious laugh?","Who is the most likely to start a successful business?","Who is the best dancer?","Who has the best taste in music?","Who would win in a karaoke competition?","Who is the most likely to write a bestseller?","Who would be the best at organizing a surprise party?","Who is the most stylish?","Who has the best cooking skills?","Who would make the best movie director?","Who is the most likely to run a marathon?","Who has the most unique talent?","Who would be the best at solving a mystery?","Who is the most likely to volunteer for a good cause?"];function getFriendsFromLocalStorage(){const e=localStorage.getItem("friends");return e?JSON.parse(e):[]}function displayQuizFriends(){const e=document.getElementById("quiz-friend-listing");e.innerHTML="";getFriendsFromLocalStorage().forEach((t=>{const n=document.createElement("div");n.classList.add("ingredient"),n.innerText=t.name,n.onclick=()=>selectQuizIngredient(t.name,n),e.appendChild(n)}))}function selectQuizIngredient(e,t){(quizGameSelectedFriends.length<2||quizGameSelectedFriends.includes(e))&&(quizGameSelectedFriends.includes(e)?(quizGameSelectedFriends.splice(quizGameSelectedFriends.indexOf(e),1),t.classList.remove("selected")):(quizGameSelectedFriends.push(e),t.classList.add("selected")),quizGameSelectedFriends.length<2&&document.querySelectorAll(".ingredient.disabled").forEach((e=>{e.onclick=()=>selectQuizIngredient(e.innerText,e),e.classList.remove("disabled")})),2===quizGameSelectedFriends.length&&document.querySelectorAll(".ingredient").forEach((e=>{quizGameSelectedFriends.includes(e.innerText)||(e.onclick=null,e.classList.add("disabled"))})))}function updateQuizDisplay(){document.getElementById("quiz-result").innerText="Your answer will appear here!",document.getElementById("quiz-message").innerText=""}function nextQuestion(){const e=questions[Math.floor(Math.random()*questions.length)];document.getElementById("quiz-question").innerText=e,updateQuizDisplay(),resetQuiz()}function brewQuiz(){if(quizGameSelectedFriends.length<2)return void(document.getElementById("quiz-message").innerText="Please select at least two friends!");const e=quizGameSelectedFriends[Math.floor(Math.random()*quizGameSelectedFriends.length)];document.getElementById("quiz-result").innerHTML=`🎉 Winner: ${e}`,document.getElementById("quiz-message").innerText="Result generated!"}function resetQuiz(){quizGameSelectedFriends.length=0,displayQuizFriends(),updateQuizDisplay()}displayQuizFriends(),nextQuestion(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("wheel"),t=document.getElementById("centerImage"),n=document.getElementById("spinButton"),o=document.getElementById("resultImage"),i=document.getElementById("questions"),a=document.getElementById("spinSound"),s=JSON.parse(localStorage.getItem("myself"))||{image:"logo.png"};s&&s.image&&(t.src=s.image);const d=JSON.parse(localStorage.getItem("friends"))||[],r=d.map((e=>e.image)),c=d.map((e=>e.name)),l=r.length;let m=360/l;l<=4&&(m=360/l),r.forEach(((t,n)=>{const o=document.createElement("div"),i=document.createElement("div");i.classList.add("image-container"),o.classList.add("segment"),o.style.transform=`rotate(${n*m}deg) skewY(-${90-m}deg)`;const a=document.createElement("img");a.src=t,a.alt=`Friend ${n+1}`,i.appendChild(a),o.appendChild(i),e.appendChild(o)}));const u=["Which friend is likely to miss you the most?","Which friend loves you the most?","Which friend hugs the most?","Which friend has the best smile?","Which friend would you call first in an emergency?","Which friend makes you laugh the hardest?","Which friend has the most interesting stories?","Which friend is the most adventurous?","Which friend is the best cook?","Which friend is the most stylish?","Which friend would you trust with your deepest secrets?","Which friend is the most generous?","Which friend has the best advice?","Which friend is the most creative?","Which friend is the most likely to become famous?","Which friend would you want by your side on a deserted island?","Which friend is the best dancer?","Which friend has the best taste in music?","Which friend is the most reliable?","Which friend is the best at keeping surprises?","Which friend would make the best travel companion?","Which friend has the funniest jokes?","Which friend is the most tech-savvy?","Which friend would you want to be your partner in a game show?","Which friend has the most contagious laugh?"];n.addEventListener("click",(function(){n.disabled=!0,a.currentTime=0,a.play();const t=Math.floor(Math.random()*l),s=3600*(Math.random()<.5?1:-1)+t*m;e.style.transition="transform 2s ease-out",e.style.transform=`rotate(${s}deg)`,setTimeout((()=>{const t=-s;e.style.transition="transform 2s ease-out",e.style.transform=`rotate(${t}deg)`}),2e3),setTimeout((()=>{a.pause();const e=c[t],n=u[Math.floor(Math.random()*u.length)];i.innerHTML=`${n} <span>${e}</span>`,o.src=r[t]}),4e3),setTimeout((()=>{n.disabled=!1}),5e3)}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("fileUpload"),t=document.getElementById("userImage"),n=document.getElementById("songList"),o=document.getElementById("friendImage"),i=document.getElementById("songTitle"),a=document.getElementById("audioPlayer"),s=document.getElementById("audioSpectrum"),d=document.getElementById("musicSymbolsContainer"),r=JSON.parse(localStorage.getItem("myself")),c=r?r.image:"logo.png";c&&(t.src=c);const l=(JSON.parse(localStorage.getItem("friends"))||[]).map((e=>e.image)),m=JSON.parse(sessionStorage.getItem("songs"))||[];function u(e,t){const s=document.createElement("li");s.textContent=e,s.addEventListener("click",(()=>{!function(e,t){i.textContent=e,a.src=t,a.load(),a.play().then((()=>{const e=l[Math.floor(Math.random()*l.length)];o.src=e,g("Music Playing...","info")})).catch((t=>{console.error("Error playing song:",t);const o=n.getElementsByTagName("li");Array.from(o).forEach((t=>{if(t.textContent===e){t.remove();const n=m.findIndex((t=>t.name===e));-1!==n&&m.splice(n,1)}})),g(`Failed to play '${e}'. Song data was lost.`,"error")}))}(e,t)})),n.appendChild(s)}function g(e,t="info"){const n=document.getElementById("notification");n.textContent=e,n.className=`notification ${t}`,setTimeout((()=>{n.textContent="",n.className="notification"}),1e4)}function f(){for(;d.firstChild;)d.removeChild(d.firstChild)}e.addEventListener("change",(e=>{const t=e.target.files;for(const e of t){const t=new FileReader;t.onload=t=>{const n=t.target.result;u(e.name,n),m.push({name:e.name,url:n}),sessionStorage.setItem("songs",JSON.stringify(m))},t.readAsDataURL(e)}})),m.forEach((e=>{u(e.name,e.url)})),a.addEventListener("playing",(()=>{!function(){for(let e=0;e<30;e++){const e=document.createElement("div");e.textContent="♪",e.classList.add("music-symbol");const t=Math.random()*window.innerWidth,n=5*Math.random();e.style.left=t-10+"px",e.style.animationDelay=`${n}s`,d.appendChild(e),e.addEventListener("animationend",(()=>{e.remove()}))}}()})),a.addEventListener("pause",(()=>{f()})),a.addEventListener("ended",(()=>{f()}));const h=new(window.AudioContext||window.webkitAudioContext),y=h.createAnalyser();h.createMediaElementSource(a).connect(y),y.connect(h.destination);const p=document.createElement("canvas");s.appendChild(p);const v=p.getContext("2d");function b(){p.width=s.clientWidth,p.height=s.clientHeight}window.addEventListener("resize",b),b(),function e(){requestAnimationFrame(e);const t=new Uint8Array(y.frequencyBinCount);y.getByteFrequencyData(t),v.clearRect(0,0,p.width,p.height);const n=p.width/t.length*2.5;let o,i=0;for(let e=0;e<t.length;e++){o=t[e]/2;const a=Math.floor(256*Math.random()),s=Math.floor(256*Math.random()),d=Math.floor(256*Math.random());v.fillStyle=`rgb(${a}, ${s}, ${d})`,v.fillRect(i,p.height-o,n,o),i+=n+1}}()})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("scroll-notification"),t=JSON.parse(localStorage.getItem("friends"))||[],n=document.querySelector(".scoreboard"),o=document.getElementById("home");function i(){window.scrollY>n.offsetTop&&(window.scrollTo(0,n.offsetTop),e.classList.add("visible"),setTimeout((()=>{e.classList.remove("visible")}),6e3))}function a(){return o&&o.classList.contains("active")}a()&&0===t.length||a()&&t.length<=1?(window.addEventListener("scroll",i),document.body.style.overflow="hidden"):document.body.style.overflow="auto",document.querySelectorAll("nav a").forEach((e=>{e.addEventListener("click",(()=>{setTimeout((()=>{a()&&0===t.length?(window.addEventListener("scroll",i),document.body.style.overflow="hidden"):(window.removeEventListener("scroll",i),document.body.style.overflow="auto")}),100)}))}))}));
