var URL="http://localhost:3000/users";
function getData(){
   alert("This Works  123 !!!!")
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
       // alert("load data")
        console.log(data)
        displayData(data);
    }).catch((error)=>{
        console.log(error);
    })
}

function displayData(data){
  //  alert("Display Data")
  var dataSection=document.getElementById("myData");
  dataSection.innerHTML="";
  var myTable=document.createElement("table")
  for(i=0;i<data.length;i++){
    console.log('Name : '+data[i].name)
    var tableRow=document.createElement("tr");
    var idTag=document.createElement("td");
    var nameTag=document.createElement("td");
    var passTag=document.createElement("td");
    idTag.innerHTML=data[i].id;
    nameTag.innerHTML=data[i].name;
    passTag.innerHTML=data[i].password;

    tableRow.append(idTag);
    tableRow.append(nameTag)
    tableRow.append(passTag)
    myTable.append(tableRow)
  }
  dataSection.append(myTable)
}

async function submitData(){
    var userId=document.getElementById("userId").value;
    var username=document.getElementById("username").value;
    var userpass=document.getElementById("userpass").value;
    alert(userId +" , "+username+" , "+userpass)

    let user={id:userId,name:username,password:userpass};

 let response=  await fetch(URL,{
        method :'POST',
        headers :{
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(user)
    });
    let result=await response.json();
}