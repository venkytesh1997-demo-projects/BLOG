const express = require("express"),
app = express(),
mongoose = require("mongoose"),
Article = require("./models/article_Model"),
methodOvrride = require("method-override"),
articleRouter = require("./routes/articles");

mongoose.connect("mongodb://127.0.0.1:27017/blogs",{useNewUrlParser:true,useUnifiedTopology: true})
mongoose.set('useCreateIndex', true)


//middlewares
app.set("view engine","ejs");//convert ejs code into html
app.use(express.urlencoded({extended:false}))
app.use(methodOvrride("_method"))
s
app.get("/",async(req,res)=>{
  const articles =await Article.find().sort({createdAt:"desc"})
    res.render("articles/index",{articles:articles});
})

app.use("/articles",articleRouter)

app.listen(7000,()=>{
    console.log("this server is running on the port 7000");
})