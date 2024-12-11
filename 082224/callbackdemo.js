function doHomework(subject,callback){
//console.log("Doing my "+subject+" homework")
// Using back ticks for dynamic values -- called Tempelate Literals
console.log(`Doing my ${subject} homework`)
//alertFinshed();
callback();
}

function alertFinshed(){
    console.log("Home Work Finished")
}

doHomework("Science",alertFinshed)