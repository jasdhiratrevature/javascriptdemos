//https://reqres.in/api/users

function getData(){
    fetch("https://reqres.in/api/users").then((response)=>{
       //console.log(response.json())
       return response.json();
    }).then((myData)=>{
        console.log(myData.data[1].first_name)
    }).catch((error)=>{
        console.log("error")
    })
}

getData()