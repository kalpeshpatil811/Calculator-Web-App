const numbers = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".op");
const output = document.querySelector(".output");

numbers.forEach(element => {
   element.addEventListener('click', function () {
      output.innerHTML = output.innerHTML + "" + element.innerHTML;
   });
});
var t;
let cop = "";
operations.forEach(element => {
   element.addEventListener('click', function () {
      if (element.innerHTML === "AC") {
         output.innerHTML = "";
      }
      if (element.innerHTML === "DEL") {
         output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
      }
      if (element.innerHTML === "+") {
         t = parseInt(output.innerHTML);
         output.innerHTML = "";
         cop = "+";
      }
      if (element.innerHTML === "-") {
         t = parseInt(output.innerHTML);
         output.innerHTML = "";
         cop = "-";
      }
      if (element.innerHTML === "*") {
         t = parseInt(output.innerHTML);
         output.innerHTML = "";
         cop = "*";
      }
      if (element.innerHTML === "/") {
         t = parseInt(output.innerHTML);
         output.innerHTML = "";
         cop = "/";
      }
      if (element.innerHTML === "=") {
         var t2 = parseInt(output.innerHTML);
         if (cop === "+") {
            output.innerHTML = t + t2;
         }
         else if (cop === "-") {
            output.innerHTML = t - t2;
         }
         else if (cop === "*") {
            output.innerHTML = t * t2;
         }
         else if (cop === "/") {
            output.innerHTML = t / t2;
         }
         t = 0;
      }
   });
});