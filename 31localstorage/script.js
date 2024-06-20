const text = document.getElementById("text");
const btn = document.getElementById("btn");
const ol = document.getElementById("ol");
let value;
let arr = [];

btn.addEventListener("click" , ()=>{
    value = text.value;
     arr.push(value);
     console.log(arr);
     const data = localStorage.setItem("listdata", JSON.stringify(arr));
     const getData = JSON.parse(localStorage.getItem("listdata"));
      getUi()
})    

function getUi() {
    ol.innerHTML = ""; 
    const getData = JSON.parse(localStorage.getItem("listdata"));
    getData.map(item => {
        let list = document.createElement("li");
        list.textContent = item;
        ol.appendChild(list); 
    });
}
getUi()