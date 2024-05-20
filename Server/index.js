const express = require ('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const port = 3000
const TodoModel = require('./TodoAppModel/Todo')
const app = express()


app.use(cors())
app.use(express.json())
app.listen({port}, ()=>{
    console.log("app is running at htpp://localhost:",port)
})
//Connecting To mongoDb Server
mongoose.connect("mongodb+srv://TodoApp:proxySiwes@todoapp.ofaqwgy.mongodb.net/?retryWrites=true&w=majority&appName=TodoApp")
.then(() => {
  console.log("Connected to MongoDB successfully...");
  // Start the server
})
.catch((error) => {
  console.log(error);
})


app.get('/Tasks', async (req, res) => {
  try {
    const result = await TodoModel.find({});
    res.status(200).json(result); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/Tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodoModel.findById(id);
    res.status(200).json(result); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); 

app.put('/updateTask/:id', async (req, res) =>{
  try {
    const id = req.params.id;
      const update = await TodoModel.findByIdAndUpdate(id,{ task: req.body.task})
      res.status(200).json(result);

  }  catch (error) {
    res.status(500).json({ message: error.message });
  }
})

app.post('/AddTask',async(req,res)=>{
  try {
    const AddTask = await TodoModel.create(req.body)
    res.status(200).json(req.body)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

app.delete('/deleteTask/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTask = await TodoModel.findByIdAndDelete(id);
    if (!deleteTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});





