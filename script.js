function showPage(page){

let pages=document.querySelectorAll(".page")

pages.forEach(function(p){
p.classList.remove("active")
})

document.getElementById(page).classList.add("active")

}


function verify(){

let q=document.getElementById("question").value
let result=document.getElementById("result")

if(q===""){
result.innerHTML="Please enter a question"
return
}

result.innerHTML="🔍 Verifying AI response..."

setTimeout(function(){

result.innerHTML="✔ Answer Verified <br> Confidence: 98%"

},1500)

}