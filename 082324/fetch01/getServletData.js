function getServletData(){
    console.log("getData Function")
    fetch('http://localhost:8081/SecondProject/employeeServlet').then((response)=>{
        return response.json()
    }).then((mydata)=>{
        console.log(mydata)
        //displayData(mydata)
    }).catch((error)=>{
        console.log(error)
    })
}

getServletData();