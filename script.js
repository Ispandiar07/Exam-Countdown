function start(){
const exam=new Date(document.getElementById("date").value);
setInterval(()=>{
const now=new Date();
const diff=exam-now;
const days=Math.floor(diff/86400000);
document.getElementById("time").textContent=
days+" күн қалды";
},1000);
}
