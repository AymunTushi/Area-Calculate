

let serial=0

//triangle area calculate
document.getElementById("triangle-btn").addEventListener("click",function(e){
    serial=serial+1
const triangleBreadthElement=document.getElementById("breadth")
const triangleBreadthInput=triangleBreadthElement.value
const triangleHeightElement=document.getElementById("height")
const triangleHeightInput=triangleHeightElement.value
const triangleAreaCalculate=(.5*parseFloat(triangleBreadthInput)*parseFloat(triangleHeightInput).toFixed(2))
const triangleFormulaElement=document.getElementById("triangle-formula")
const triangleArea=parseFloat(triangleFormulaElement.innerText)
triangleFormulaElement.innerText=triangleAreaCalculate

const contentTitle=document.getElementById("triangle").innerText

const textAreaElement=document.getElementById("container")
const tr=document.createElement("tr");
tr.innerHTML=`
<td>${serial}.</td>
<td>${contentTitle}</td>
<td>${triangleAreaCalculate}cm2</td>

`
textAreaElement.appendChild(tr)

if (isNaN(triangleBreadthInput) || isNaN(triangleHeightInput))
{
    alert("please enter number")
    return
}
if(triangleBreadthInput=="" || triangleHeightInput==""){
alert("please fill all required field")
return;
}
if(triangleBreadthInput<0 || triangleHeightInput<0){
alert("please enter positive number")
return
}
})

//rectangle area calculate

document.getElementById("rectangle-btn").addEventListener("click",function(e){
    serial=serial+1
    const rectangleWidthElement=document.getElementById("width")
    const rectangleWidthInput=rectangleWidthElement.value
    const rectangleLengthElement=document.getElementById("length")
    const rectangleLengthInput=rectangleLengthElement.value
    const rectangleAreaCalculate=(parseFloat(rectangleWidthInput)*parseFloat(rectangleLengthInput)).toFixed(2)
    const rectangleFormulaElement=document.getElementById("rectangle-formula")
    const rectangleArea=parseFloat(rectangleFormulaElement.innerText)
    rectangleFormulaElement.innerText=rectangleAreaCalculate
    
    const contentTitle=document.getElementById("rectangle").innerText
    const textAreaElement=document.getElementById("container")
const tr=document.createElement("tr");
tr.innerHTML=`
<td>${serial}.</td>
<td>${contentTitle}</td>
<td>${rectangleAreaCalculate}cm2</td>

`
textAreaElement.appendChild(tr)
if (isNaN(rectangleWidthInput) || isNaN(rectangleLengthInput))
{
    alert("please enter number")
    return
}
if(rectangleWidthInput=="" || rectangleLengthInput==""){
alert("please fill all required field")
return;
}
if(rectangleWidthInput<0 || rectangleLengthInput<0){
alert("please enter positive number")
return
}
    
})