
const getTodos=async ()=>{
    const response=await fetch('https://dummyjson.com/todos');
    const data = await response.json()
    //console.log(data)
    return data;
};

console.log(1)
console.log(2)
getTodos().then((data)=>{
    console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
console.log(3)
console.log(4)
