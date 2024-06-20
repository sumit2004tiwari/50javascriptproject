const container = document.getElementById('container');
const turnon = document.getElementById('turnon');

 turnon.addEventListener('click', () =>{
   console.log("function")
newFun()
})
 const newFun = ()=>{
   container.style.backgroundColor = 'red';
 }