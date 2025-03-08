const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p5ldir2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// middleware
app.use(express.json());
app.use(cors());


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    app.get("/", (req, res) => {
      res.send("Welcome to Visa Ease Server!");
    });


    // users post request
    app.post("/users", async (req, res) =>{
      const newUser = req.body;
      const result = await client.db("visa-ease").collection("users").insertOne(newUser)
      console.log("Got new user", newUser);
      res.send(result);
    })

    // users get request 
    app.get("/users", async (req, res) =>{
      const users = await client.db("visa-ease").collection("users").find().toArray();
      console.log(users);
      res.send(users)
    })
    // all-visa get request
    app.get("/all-visa", async (req, res) =>{
      const visas = await client.db("visa-ease").collection("all-visa").find().toArray();
      res.send(visas)
    })

    // added-visa post request
    app.post("/added-visa", async (req, res) =>{
      const newVisa = req.body;
      console.log(newVisa);
      const result = await client.db("visa-ease").collection("added-visa").insertOne(newVisa);
      res.send(result)
    })

    // added visa get request
    app.get("/added-visa", async (req, res) =>{
      console.log(req.body);
      const visas = await client.db("visa-ease").collection("added-visa").find().toArray();
      res.send(visas)
    })

    app.get('/all-visa/:id', async (req, res) => {
      const id = req.params.id; // Access the dynamic id from the route parameter
      console.log(id);
      const visa = await client.db("visa-ease").collection("all-visa").findOne({ _id: new ObjectId(id) });
      res.send(visa);
  });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


