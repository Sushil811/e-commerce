import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";


dotenv.config();


//Password:          EHGvMCH3SLsMWK2D

//mongodb+srv://sushilkumarprajapati689:EHGvMCH3SLsMWK2D@cluster0.ir6nmdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://sushilkumarprajapati689:<db_password>@cluster0.ir6nmdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//console.log(process.env.MONGO_URI);

const app = express()
const PORT = process.env.PORT || 5000;

//app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Enable CORS for React frontend
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json()); //allow us to  accept JSON data in the req.body

app.use("/api/products", productRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "E-commerce API is running! 🚀" });
});

// app.get("/api/products", async (req, res)=>{
//     try{
//         const products = await Product.find({});
//         res.status(200).json({sucess: true, data:products});
//     }catch(error){
//         console.log("Error in fetching products", error.message)
//         res.status(500).json({sucess: false, message:"Server error"});
//     }
// })

// app.post("/api/products", async (req, res)=>{
//     const product = req.body; //user will send this data

//     if(!product.name|| !product.price || !product.image){
//         return res.status(400).json({success: false, message: "Please provide all fields"});
//     }

//     const newProduct = new Product(product)
//     try{
//         await newProduct.save();
//         res.status(201).json({success:true, data: newProduct, message:"Data stored successfully in database"}); 
//     }catch(error){
//         console.error(error.message);
//         res.status(500).json({success:false, message:"failed to save data"})
//     }
// })

// app.put("/api/products/:id", async (req, res)=>{
//     const {id} = req.params;
//     const product = req.body;

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({success:false, message:"Invalid Product Id"})
//     }

//     try{
//         const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
//         res.status(200).json({success:true, data: updatedProduct, message:"Product successfully Updated"})
//     }catch(error){
//         console.log(error.message);
//         res.status(404).json({success:false, message:"Server Error"})
//     }
// })

// app.delete("/api/product/:id", async (req, res)=>{
//     const {id} = req.params;
//     //console.log("id",id)

//     try{
//         await Product.findByIdAndDelete(id);
//         res.status(200).json({success: true, message:"Successfully deleted"});
//     }catch(error){
//         console.log("Error in deleteing products",error.message);
//         res.status(404).json({success: false, message:"Something is wrong"});
//     }
// })

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server started at http://localhost:${PORT} 🚀`);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
});