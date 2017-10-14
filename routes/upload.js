'use strict';
const express = require('express');

const fileUpload = require('express-fileupload');

const path = require('path');


const router = express.Router();

router.use(fileUpload());

/* GET home page. */
router.post('/', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  let sampleFile = req.files.sampleFile;

    //let uploadPath = __dirname+'/' + sampleFile.name;
    //console.log(uploadPath);

 
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv('C:/projects/FileUpload/public/images/'+sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);
      
    
 
    res.send('File uploaded!');
  });
});

module.exports = router;
