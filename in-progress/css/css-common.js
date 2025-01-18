const url = window.location.href;

const str=url
const i1 = str.lastIndexOf(".");
const i3 = str.lastIndexOf("/");

const t_= str.substring(i3+1,i1);
const t=`📌${t_}`

$(`title`).text(`${t}`);
$(`body`).prepend(`<h1 class="title">${t}</h1>`);