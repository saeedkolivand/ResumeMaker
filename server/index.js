const express = require('express');
const bodyParser = require('body-parser');
const htmlPdf = require('html-pdf');


const pdfTemplateOne = require('./pdfTemplate/templateOne.js');

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/create-pdf' , (req , res) =>{
    htmlPdf.create(pdfTemplateOne() , {}).toFile('resume.pdf' , (err)=>{
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});


app.listen(port , ()=> console.log(`server is up and running on port ${port}`));