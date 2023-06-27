const router = require('express').Router();
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');
const MenuModel = require('../models/menu.model');



// add food
router.post('/add-food',async (req,res)=>{
     try {
          const newFood = new MenuModel(req.body);
          await newFood.save();
          res.send({
            success: true,
            message:"food added successfully",
            data:newFood,
          })
          console.log(newFood)
     } catch (error) {
        console.log(error.message)
        res.send({
            success:false,
            message:error.message,
        })

     }
})
router.get('/category/:key',async(req,res)=>{
     try {
          const response = await MenuModel.find({
               '$or':[
                   {category:{$regex:req.params.key}},
               ]
          })
          res.send({
          success: true,
          data: response,
          })
     } catch (error) {
          res.send({
               success: false,
               message: error.message,
          })
     }

})
// get products by id
router.get('/get-food-by-id/:id',authMiddleware,async(req,res)=>{
     try {
          const singlefood = await MenuModel.findById(req.params.id);
          res.send({
               success: true,
               data: singlefood
          });
     }catch(error){
          res.send({
               success: false,
               message: error.message,
          })
     }
})

// search menu 
router.get('/search/:key', async(req,res)=>{
     try {
          const response = await MenuModel.find({
               '$or':[
                   {name:{$regex:req.params.key}},
               ]
          })
          res.send({
               success: true,
               data:response,
          })
     } catch (error) {
          res.send({
               success: false,
               message:error.message,
          })
     }
});


const storage = multer.diskStorage({
     filename: function (req,file,callback){
         callback(null, Date.now() +file.originalname);
     }
 });

 router.post('upload-food-image',authMiddleware,multer({
     storage:storage
 }).single('file'),async(req,res)=>{
     try {
          const result = await cloudinary.uploader.upload(req.file.path,{
               folder:'KFC',
           });
           const productId = req.body.productId;
           await MenuModel.findByIdAndUpdate(productId,{
               $push:{images:result.secure_url},
           });
           res.send({
               success:true,
               message:'Image uploaded successfully',
               data:result.secure_url,
           })
     } catch (error){
          res.send({
               success: false,
               message: error.message,
          })
     }
 })
 

module.exports = router