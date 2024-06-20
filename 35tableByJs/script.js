const tableBody = document.getElementById("tableBody");

let data;
let newdata;

async function getData(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
     data = await response.json();
   
    displayData();
}
getData();

function displayData(){
   data.forEach(item => {
    let tr = document.createElement("tr");
   tr.innerHTML = `
   <td>${item.id}</td>
   <td>${item.userId}</td>
   <td>${item.title}</td>
   <td>${item.completed}</td>
   `
   console.log(tr)
   tableBody.appendChild(tr)
 });
}
    
