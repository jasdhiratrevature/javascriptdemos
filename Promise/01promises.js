const getSomething=()=>{
    return new Promise((resolve,reject)=>{
        // fetch some thing
       resolve("Some Data");
      reject("Some Error")
    });
}

// getSomething().then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err)
// });

getSomething().then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})