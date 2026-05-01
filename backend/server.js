const express= require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const PORT= 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
	.then(()=>console.log("MongoDB connected"))
        .catch(err=>console.log(err));

app.get("/", (req, res)=>{
    res.send ("Server running....");
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
