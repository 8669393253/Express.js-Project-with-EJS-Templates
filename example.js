const express=require ("express");

const app=express();

let port=8080;

app.listen(port, ()=>{
    console.log(`App is listening on the port ${port}`);
})

// app.use((req,res)=>{
//     console.log("Request accepted")
//     res.send("This is an main page")
// });

app.get("/",(req,res)=>{
    res.send("Home page occurs here!!");
});

app.get("/Contact",(req,res)=>{
    res.send("contact me here i'm avaiable");
});


// now we are using query by req.query
// app.get("/details",(req,res)=>{
//     console.log(req.query);
//     console.log("Query is locked sucessfully see console for output")
// });


app.get("/details",(req,res)=>{
    let {q}=req.query;
    if(!q) {                      //this logic is for the thing when user did not enter it's query and still browse the details page
        res.send("nothing searched")
    }
    res.send(`Query logged sucessfully see the webpage, output=${q}`);
});


// these are the parameters that we pass in the URL but using req.params

app.get("/:username/:id/:city",(req,res)=>{
    console.log(req.params);
    res.send("Hello everyone");
});


app.get("*",(req,res)=>{
    res.send("Did not find anything here!!");
});


// this is a post request
app.post("/Search",(req,res)=>{
    res.send("This is a post request");
});



