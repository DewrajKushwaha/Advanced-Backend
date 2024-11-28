
import connectDB from "./db/index.db.js";

import {app} from "./app.js"




connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    })
})
.catch((err)=>{
    console.log(" This connection error is raise from index.js ",err)
})