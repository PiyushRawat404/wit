const fs=require("fs")


const readFile=()=>{
    const data=fs.readFile("task.json","utf8",(err,data)=>{
        if(err)throw err
        console.log(data)
    })
}
const writeFile=(tasks)=>{
    fs.writeFile("task.json",tasks)
}


const handleGetTasks = (req, res) => {
    const data=readFile()
    res.json(data)
}

const handleAddTasks=(req,res)=>{
    
}

module.exports={handleAddTasks,handleGetTasks}

