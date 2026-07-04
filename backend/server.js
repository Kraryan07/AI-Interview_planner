const app=require("./src/app");
require("dotenv").config()
const connectdb=require("./src/config/database");

connectdb()

app.listen(3000,()=>{
    console.log(`server is running on port 3000`);
})