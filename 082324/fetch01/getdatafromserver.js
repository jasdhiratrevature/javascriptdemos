function getData(){
    console.log("getData Function")
    fetch('https://reqres.in/api/users').then((response)=>{
        return response.json()
    }).then((mydata)=>{
        //console.log(mydata.data)
        displayData(mydata)
    }).catch((error)=>{
        console.log(error)
    })
}

function displayData(dataReceived){
    console.log("displayData")
    var recData=dataReceived.data;
    console.log(recData)
    var dataSection=document.getElementById("myDataDisplay");
    dataSection.innerHTML="";
    var myTable=document.createElement("table")
    for(i=0;i<recData.length;i++){
        console.log(recData[i].email)
    var tableRow=document.createElement("tr")
    var nameTag=document.createElement("td");
    var emailTag=document.createElement("td");
    nameTag.innerHTML=recData[i].first_name
    emailTag.innerHTML=recData[i].email
    tableRow.append(nameTag)
    tableRow.append(emailTag)
    myTable.append(tableRow)
}
dataSection.append(myTable)
}