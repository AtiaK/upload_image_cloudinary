const imageModel = require("../models/Image");
const cloudinaryConfig = require("../config/cloudinaryConfig");

module.exports = {
  uploadImage: (req, res) => {
    const imageName = req.file.originalname
    const imageUrl=req.file.path
    //upload file to cloudinary
    cloudinaryConfig.uploads(imageUrl)
    .then((result) => {
      //Save image to DB
      const newImage= new imageModel({name:imageName,url:result.url});
        newImage.save();
        return res.send({data:newImage})
      })
      .catch(()=> {return res.send({message:"Problem in creating image",err: err})})
  }
}