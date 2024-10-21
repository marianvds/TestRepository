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
}

increaseBtn.onclick = function(){
    if (count < 10) {
        count++;
        counterValue.textContent = count;
    }
   else {
    alert("You have reached the limit.");
   }
}

resetBtn.onclick = function(){
    count = 0;
    counterValue.textContent = count;
}
