const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counterValue = document.getElementById("counterValue");
let count = 0;

decreaseBtn.onclick = function() {
    if (count > 0) {
    count--;
    counterValue.textContent = count;
    }

    if (count >= 10 && count < 20) {
        document.getElementById("freeShipping").style.display = "inline";
      } else {
        document.getElementById("freeShipping").style.display = "none";
      }
    
    if (count < 20) {
        document.getElementById("increaseBtn").style.backgroundColor = "#fcefe1";
      }  

    if (count >= 20) {
        document.getElementById("outOfStock").style.display = "inline";
      } else {
        document.getElementById("outOfStock").style.display = "none";
      }  
}

increaseBtn.onclick = function(){
    count++;
    counterValue.textContent = count;
 // alert("You have reached the limit.");

    if (count >= 10 && count < 20) {
        document.getElementById("freeShipping").style.display = "inline";
      } else {
        document.getElementById("freeShipping").style.display = "none";
      }

    if (count >= 20) {
        document.getElementById("increaseBtn").style.backgroundColor = "#b73d0c";
      }

    if (count >= 20) {
        document.getElementById("outOfStock").style.display = "inline";
      } else {
        document.getElementById("outOfStock").style.display = "none";
      }  

   }

resetBtn.onclick = function(){
    count = 0;
    counterValue.textContent = count;
    document.getElementById("increaseBtn").style.backgroundColor = "#fcefe1";
    document.getElementById("freeShipping").style.display = "none";
    document.getElementById("outOfStock").style.display = "none";
}
