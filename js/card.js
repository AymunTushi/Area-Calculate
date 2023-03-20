
let serial=0
document.getElementById("triangle-btn").addEventListener("click",function(e){
    serial=serial+1
const triangleBreadthElement=document.getElementById("breadth")
const triangleBreadthInput=triangleBreadthElement.value
const breadthInput=parseInt(triangleBreadthInput)
const triangleHeightElement=document.getElementById("height")
const triangleHeightInput=triangleHeightElement.value
const triangleAreaCalculate=.5*parseFloat(triangleBreadthInput)*parseFloat(triangleHeightInput)
const triangleFormulaElement=document.getElementById("triangle-formula")
const triangleArea=parseFloat(triangleFormulaElement.innerText) 
triangleFormulaElement.innerText=triangleAreaCalculate

const contentTitle=document.getElementById("triangle").innerText

const textAreaElement=document.getElementById("container")
const tr=document.createElement("tr");
tr.innerHTML=`
<td>${serial}</td>
<td>${contentTitle}</td>
<td>${triangleAreaCalculate}</td>

`
textAreaElement.appendChild(tr)







//console.log(triangleBreadthInput)
})