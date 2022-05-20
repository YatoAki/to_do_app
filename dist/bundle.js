(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,":root{\n  --white: #C3C9E9;\n  --black: #131B23;\n  --light-green: #90EE90;\n  --light-red: #FF7F7F;\n}\n\nhtml,body{\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n  background-color: white;\n  color: white;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\nh1,h2,h3,p, input{\n  padding: 0;\n  margin: 0;\n}\n\nbody{\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.header{\n  background-color: var(--black);\n  display: flex;\n  padding: 20px 50px;\n}\n\n.contents{\n  display: flex;\n  flex-grow: 1;\n}\n\n.nav{\n  background-color: #d7dcf7;\n  width: 25vw;\n  box-sizing: border-box;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  color: var(--black);\n}\n\n.projects-list p{\n  padding: 10px 5px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  font-weight: 300;\n}\n\n.defaults p{\n  font-weight: normal;\n}\n\n.projects-list p:hover{\n  background-color: var(--white);\n}\n\n.add-projects, .reset{\n  padding: 10px 5px;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 5px;\n  border: none;\n}\n\n.add-projects:hover{\n  background-color: var(--white);\n}\n\n.reset:hover{\n  background-color: var(--light-red);\n}\n\n.active{\n  background-color: var(--white);\n}\n\n\n.tasks{\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  color: var(--black);\n  flex-grow: 1;\n  padding: 30px 100px;\n}\n\n.each-task{\n  display: flex;\n  align-items: center;\n  padding: 15px 10px;\n  gap:20px;\n  border-radius: 5px;\n  border: none;\n  font-size: 18px;\n}\n\n.each-task:hover{\n  background-color: var(--white);\n}\n\n.grow{\n  flex-grow: 1;\n}\n\n.done{\n  width: 20px;\n  height: 20px;\n}\n\n.title,.done,.time{\n  cursor: pointer;\n}\n\n.add-tasks{\n  padding: 15px 15px;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 5px;\n  border: none;\n}\n\n.add-tasks:hover{\n  background-color: var(--white);\n}\n\n.input-field{\n  display: flex;\n  flex-direction: column;\n  gap:10px;\n}\n\n.input-field div{\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  gap:20px;\n}\n\n.yes, .no{\n  flex-grow: 1;\n  border: none;\n  padding: 15px 10px;\n  margin: 0;\n  text-decoration: none;\n  color: var(--black);\n  font-weight: bold;\n  font-family: inherit;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.yes{\n  background-color: var(--light-green);\n}\n\n.no{\n  background-color: var(--light-red);\n}\n\n\n.input{\n  padding: 10px 5px;\n  border-radius: 5px;\n  border: 1px solid #aaa;\n}\n\ninput:focus{\n  outline: none;\n}\n\nbutton{\n  -webkit-appearance: none;\n}\n\n/* FOOTER */\n\n\nfooter{\n  font-weight: bold;\n  background-color: var(--black);\n  padding: 20px;\n  text-align: center;\n  font-size: 15px;\n  color: white;\n  font-weight: normal;\n}\n",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],d=a.base?c[0]+a.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var c=a(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),o=n(569),s=n.n(o),i=n(565),c=n.n(i),d=n(216),l=n.n(d),p=n(589),u=n.n(p),h=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;class m{constructor(e,t="None"){this.title=e,this.dueDate=t}setTitle(e){this.title=e}getTitle(){return this.title}setDueDate(e){this.dueDate=e}getDueDate(){return this.dueDate}}class g{constructor(e,t="None"){this.title=e,this.description=t,this.tasks=[]}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setTasks(e){this.tasks=e}getTasks(){return this.tasks}getTask(e){return this.tasks.find((t=>t.title==e))}addTask(e){this.tasks.find((t=>t.title==e.title))||this.tasks.push(e)}deleteTask(e){console.log(this.tasks[0].getTitle),this.tasks=this.tasks.filter((t=>t.title!=e))}}class v{static saveData(e,t){localStorage.setItem(e,JSON.stringify(t))}static createNewProjectData(e){let t=new g(e);v.saveData(e,t)}static getData(e){const t=JSON.parse(localStorage.getItem(e)),n=new g(t.title);return n.setDescription(t.description),t.tasks.map((e=>Object.assign(new m,e))),n.setTasks(t.tasks),n}static getAllData(){const e={};for(let t=0;t<localStorage.length;t++)e[localStorage.key(t)]=v.getData(localStorage.key(t));return e}}class k{static loadHomePage(){k.loadProjects(),k.loadInitalDisplay(),k.resetBtn()}static loadProjects(){k.loadDefaultProjects(),k.loadNewProjects(),k.setProjectBtn()}static resetBtn(){document.querySelector(".reset").addEventListener("click",(e=>{localStorage.clear(),window.location.reload()}))}static loadInitalDisplay(){document.querySelector(".defaults").querySelector("p").click()}static loadNewProjects(){const e=v.getAllData();Object.keys(e).forEach((t=>{"Urgent"!==t&&"Family"!==t&&"Work"!==t&&k.addNewProject(e[t].getTitle())}))}static loadDefaultProjects(){["Urgent","Family","Work"].forEach((e=>{localStorage.length<3&&v.createNewProjectData(e),k.addDefaultProject(e)}))}static addNewProject(e){const t=document.getElementById("new-projects"),n=document.createElement("p");n.textContent=e,k.makeShowTasksBtn(n),t.appendChild(n)}static addDefaultProject(e){const t=document.querySelector(".defaults"),n=document.createElement("p");n.textContent=e,k.makeShowTasksBtn(n),t.appendChild(n)}static setProjectBtn(){const e=document.querySelector(".nav"),t=document.querySelector(".add-projects"),n=k.createInputField();t.addEventListener("click",(t=>{e.appendChild(n)}));const a=n.querySelector(".input");n.querySelector(".yes").addEventListener("click",(e=>{""!=a.value&&(v.createNewProjectData(a.value),k.addNewProject(a.value),a.value="",n.parentElement.removeChild(n))}))}static createInputField(){const e=document.createElement("div");e.classList.add("input-field");const t=document.createElement("input");t.classList.add("input"),t.setAttribute("type","text");const n=document.createElement("div"),a=document.createElement("button");a.textContent="Yes";const r=document.createElement("button");return r.textContent="Cancel",r.addEventListener("click",(t=>{e.parentElement.removeChild(e)})),a.classList.add("yes"),r.classList.add("no"),n.appendChild(a),n.appendChild(r),e.appendChild(t),e.appendChild(n),e}static makeShowTasksBtn(e){e.addEventListener("click",(t=>{document.querySelector(".nav").querySelectorAll("p").forEach((e=>{e.classList.remove("active")})),e.classList.add("active"),k.makeTaskInterface(e.textContent)}))}static makeTaskInterface(e){const t=document.querySelector(".tasks");t.textContent="";const n=document.createElement("h2"),a=document.createElement("div");a.classList.add("tasks-list"),t.appendChild(n),t.appendChild(a);const r=k.getActiveProject();v.getData(r).getTasks().forEach((e=>k.addNewTask(e.title)));const o=document.createElement("div");o.classList.add("add-tasks"),o.textContent="+ Add Task",k.setTaskBtn(e,o),n.textContent=e,t.appendChild(o)}static setTaskBtn(e,t){const n=document.querySelector(".tasks"),a=k.createInputField();t.addEventListener("click",(e=>{n.appendChild(a)}));const r=a.querySelector(".input");a.querySelector(".yes").addEventListener("click",(e=>{if(""==r.value)return;const t=k.getActiveProject(),n=v.getData(t),o=new m(r.value);n.addTask(o),v.saveData(t,n),k.addNewTask(r.value),r.value="",a.parentElement.removeChild(a)}))}static getActiveProject(){return document.querySelector(".active").textContent}static addNewTask(e){const t=document.querySelector(".tasks-list"),n=document.createElement("div");n.classList.add("each-task");const a=document.createElement("input");a.type="radio",a.classList.add("done"),n.appendChild(a),k.makeDoneBtn(a),n.appendChild(k.createPara(e,"title"));const r=document.createElement("div");r.classList.add("grow"),n.appendChild(r),n.appendChild(k.createPara("None","time")),t.appendChild(n)}static makeDoneBtn(e){e.addEventListener("click",(t=>{const n=v.getData(k.getActiveProject()),a=e.parentElement.querySelector(".title").textContent;n.deleteTask(a),console.log(n),v.saveData(n.title,n);const r=e.parentElement;r.parentElement.removeChild(r)}))}static createPara(e,t){const n=document.createElement("p");return n.textContent=e,n.classList.add(t),n}}document.addEventListener("DOMContentLoaded",k.loadHomePage)})()})();