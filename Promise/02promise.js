const getSomething=()=>{
    return new Promise((resolve,reject)=>{
          // resolve("Some Data . . . .");
           reject("Some Error....")
    });
}

getSomething().then(data=>{
    console.log(data)
}).catch(data=>{
    console.log(data)
});