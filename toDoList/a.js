let command =prompt("What is your command?:").toLowerCase()
toDoList=[]
while(command!=="quit"){
    let command =prompt("What is your command?:").toLowerCase()
    if(command==="new"){
        let newTodo=prompt("What is the new thing for toDoList:")
        toDoList.push(newTodo)
    }
    else if(command==="list"){
        if(toDoList.length===0){
            console.log("There are nothing in the list")
        }
        else{
        for(let i=0;i<toDoList.length;i++){
            console.log(`${i+1}  ${toDoList[i]}`)
        }
    }}
    else if(command==="delete"){
        if(toDoList.length==0){
            console.log("There are nothing to delete in this list")
        }
        let deleteİndex=prompt("Which index do you want to delete:")
        delete toDoList[deleteİndex]
        for(let i=0;i<toDoList.length;i++){
            console.log(`${i+1}  ${toDoList[i]}`)
        }

    }
    else if(command==="quit"){
        console.log("App is over")
    }
    else{
        console.log("App can't make this command")
    }


}