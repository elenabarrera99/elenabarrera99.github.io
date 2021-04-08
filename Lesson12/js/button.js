 let btnList = [document.getElementById("btn1"), document.getElementById("btn2"), document.getElementById("btn3"), document.getElementById("btn4")];
console.log(btnList);
let num = 0;
for(i = 0; i < btnList.length; i++) {
    if(i == 0){
document.getElementById(`btn${num+1}`).onclick = function () {showToggle1()}
num++;
}

else if(i == 1){
    document.getElementById(`btn${num+1}`).onclick = function () {showToggle2()}
    num++;
    }
else if(i == 2){
        document.getElementById(`btn${num+1}`).onclick = function () {showToggle3()}
        num++;
        }
 else if(i == 3){
            document.getElementById(`btn${num+1}`).onclick = function () {showToggle4()}
            num++;
            }

function showToggle1() {
        document.getElementById("eDiv").classList.toggle("show").siblings().removeClass.toggle('show');
}
function showToggle2() {
    document.getElementById("bDiv").classList.toggle("show");
} 
function showToggle3() {
    document.getElementById("sDiv").classList.toggle("show");
}
function showToggle4() {
    document.getElementById("gDiv").classList.toggle("show");
}
}

