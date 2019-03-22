let express = require('express')
let bp = require('body-parser')
let mongoose = require('mongoose')
let app = express()
const EventEmitter = require('events');
const emitter = new EventEmitter()
emitter.setMaxListeners(500)
app.use(bp.urlencoded({extended: false}))
let db = mongoose.connect("mongodb://localhost/mydata",{ useNewUrlParser: true });
mongoose.connection.on("open",function () {
    console.log("数据库链接成功")

let schma = new mongoose.Schema({
    name:{type:"String",default:"未知"},
    price:{type:"String",default:"2000"},
    desc:{type:"String",default:"未知"},
    category: {type:"String",default:"未知"}
});
let schma1 = new mongoose.Schema({
    value:{type:'String'},
    count:{type:'Number',default:0},
    product:{type:"Object",default:{}},
},{collection:'shopCar'})
let model = mongoose.model("mydata",schma)
let model1 = mongoose.model("shopCar",schma1)
app.use(bp.json())
app.post('/api/post1',function (req,res) {
    let res2 = res
   model1.find({value:req.body.value},function (err,res) {
       let res1 = res
       if(res.length===0){
           model1.create(req.body,function (err,res) {
               console.log("插入成功")
               res2.json(true)
           })
       }else{
          model1.updateOne({value:req.body.value},{$set:{count:res1[0].count+1}},function (err,res) {
              res2.json(true)

          })
       }
   })

})
    app.post('/api/post2',function (req,res) {
        model1.find({},function (err,res1) {
            res.json(res1)
        })
    })
    app.get('/api/get2',function (req,res) {
        model1.find({},function (err,res1) {
            res.json(res1)
        })
    })
    app.post('/api/get3',function (req,res) {
        model1.deleteOne(req.body,function (err,res1) {
            res.json(true)
        })
    })
app.post('/api/post',function (req,res) {
    let res1 = res
    model.find({},{name:1,price:1,desc:1,category:1},function (err,res) {
        res1.json(res)
    })
})
})
app.listen(9999)
