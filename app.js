const eventEmitter=require ("events")
const emitter=new eventEmitter();

// emitter.on("greet",(obj)=>{ 
//     console.log(`hello my name is ${obj.username}, I am a ${obj.prof} `)
// })

// emitter.emit("greet",{username:"Piyush", prof:"software dev"})


emitter.on("prac",(name,month)=>{
    console.log(`my name is ${name}, and month is ${month}`)
})

emitter.emit("prac","piyush","dec")

