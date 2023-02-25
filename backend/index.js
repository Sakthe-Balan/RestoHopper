import express from "express"
import cors from "cors"
// var mongoclient = require("mongodb").MongoClient
import { MongoClient as mongoclient } from 'mongodb';



const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())



app.post("/signup", (req, res)=> {
    const user = req.body
    const uname = user.name
    const uemail = user.email
    console.log("back->",user)
    // console.log("back->",name)
    // console.log("back->",email)
    mongoclient.connect("mongodb://localhost:27017",function(err,client){
        var db = client.db("assign1")
        db.collection("users").findOne(user, function(err,result){
            if(err) throw err
		    console.log("res->",result)
            if(result != null) {
                console.log()
                res.send({message: "already registered"})
            }
            else{
                const arr = [user]
                db.collection("users").insertMany(arr, function(err){
                    if(err) throw err
                    console.log("1 document inserted")
                    res.send({message: "Successfully Registered"})
                    client.close()
                })
            }
		    // client.close()
        })
    })
    // res.send({message:n[0]})
})



app.post("/query", (req, res)=> {
    const name = req.body
    var n = Object.keys(name)

    mongoclient.connect("mongodb://localhost:27017",function(err,client){
        var db = client.db("assign1")
        db.collection("restaurants").findOne({rname:n[0]}, function(err,result){
            if(err) throw err
		    console.log(result)
            res.send({message:result})
		    client.close()
        })
    })
    // res.send({message:n[0]})
})




app.post("/signin", (req, res)=>{
    const rest = req.body
    console.log(user)
    mongoclient.connect("mongodb://localhost:27017",function(err,client){
        var db = client.db("assign1")
        db.collection("users").findOne(user, function(err,result){
            if(err) throw err
            console.log(result)
            if(result != null){
                res.send({message:"signed in"})
            }
            else{
                res.send({message:"please sign up first"})
            }
            client.close()
        })
    })
})


app.post("/restosignup", (req, res)=>{
    const user = req.body
    const arr = [user]
    console.log(user)
    mongoclient.connect("mongodb://localhost:27017",function(err,client){
        var db = client.db("assign1")
        db.collection("restaurants").insertMany(arr, function(err,result){
            console.log(result)
            res.send({message:"restaurant resgistered"})
        })
    })
})







app.listen(9002,function(){
	console.log("server is running at 9002")
})



/*
mongoclient.connect("mongodb://localhost:27017",function(err,client){
		db = client.db("sample_db")
		db.collection("data4").insertOne(req.body, function(err)
		{
			if(err)
				console.log(err)
			else
			{
			//	res.send("inserted to collection")
				db.collection("data4").find().toArray(function(err,obj){
					
				//	res.send(obj)
				res.send("inserted to collection<br/>"+JSON.stringify(obj))
					client.close()
				})
			}
				
			
			
		})
		
		
		
		
	})

*/