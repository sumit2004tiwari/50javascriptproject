// const promises = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve(console.log("i am the hero"))
//     },1000)
// })
// promises.then(()=>{
//     console.log("i am always come after the resolve call")
// })

                                         // -------------new promise
// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
        
//         console.log("iam new ");
//         resolve({username : "sumit",
//                  email : "sumit2004tiwari@gmamil.com" 
                           
//     },1000)
//     })
// }) 
// promise1.then((resolvedata)=>{
//     console.log(resolvedata)
// })
// promise1.then(()=>{
//     console.log("i am latest")
// })
// promise1.catch((error)=>{
//     console.log("i always throw an error")
// })
// promise1.finally(()=>{
//     console.log("i am always print either resolve will work or not")
// })

                            ///---------- next promises
// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true ;
//         if(error != true){
//             resolve({ username : "sumittiwari",
//                       email : "sumit2004tiwari"         
//              })
//         } else{
//             reject(console.log("i haave an error"))
//         }
//     },1000)

// })
// promise2.then((user)=>{
//    console.log(user.username)
// })
// promise2.catch(()=>{
//     console.log("as you know that i have an error")
// })
// promise2.finally(()=>{
//     console.log("iam slways there")
// })

// async function getData(){
//   const response = await  fetch(`https://jsonplaceholder.typicode.com/users`);
//    const data = await  response.json()
//    console.log(data)
// }
// getData()


    async function some(){
    
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data  =  await response.json();
        console.log(data)
   
}
some()