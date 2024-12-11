function getUserData(){
fetch('http://localhost:3000/users').then((response)=>{
    console.log('resolved',response)
    return response.json();
  }).then((data)=>{
    //console.log(data)
    displayData(data);
  }).catch((error)=>{
    console.log('rejected',error)
})
}

function displayData(data){
    var dataSection=document.getElementById("myData");
    dataSection.innerHTML="";
    var myTable=document.createElement("table")
    for(i=0;i<data.length;i++){
    console.log("Name :: "+data[i].name);
    var tableRow=document.createElement("tr")
    var idTag=document.createElement("td");
    var nameTag=document.createElement("td");
    var emailTag=document.createElement("td");
    idTag.innerHTML=data[i].id;
    nameTag.innerHTML=data[i].name;
    emailTag.innerHTML=data[i].password;

    tableRow.append(idTag);
    tableRow.append(nameTag);
    tableRow.append(emailTag)
    myTable.append(tableRow)
    }
    dataSection.append(myTable)
}

async function submitData(event){
   // event.preventDefault();
  alert("Works")
    var userId=document.getElementById("userId").value;
    var username=document.getElementById("username").value;
    var userpass=document.getElementById("userpass").value;
    alert(userId +" , "+username+" , "+userpass)
    let user={id:userId,name:username,password:userpass}
    let response= await fetch('http://localhost:3000/users',{
    method : 'POST',
    headers :{
        'Content-Type': "application/json"
    },
    body:JSON.stringify(user)
    });
    let result=await response.json(); 
    
}