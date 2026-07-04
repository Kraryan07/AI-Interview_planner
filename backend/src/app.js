const express=require("express");
const authRouter=require("./routes/auth.routes");
const interviewRouter=require("./routes/interview.routes")
const app=express();
const cors=require("cors")
const cookieparser=require("cookie-parser")

app.use(express.json()); 
app.use(cookieparser())
app.use(cors({
    origin:"https://ai-interview-planner-frontend.onrender.com",
    credentials:true
}))
app.use("/api/auth",authRouter);
app.use("/api/interview",interviewRouter)




module.exports=app;