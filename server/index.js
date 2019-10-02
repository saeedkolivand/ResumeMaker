const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const hbs = require('handlebars');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/create-pdf', async (req, res) => {

    //(async () => {
    try {
        console.log(req.body);
        
        const htmlTemplatePath = path.join(__dirname, 'pdfTemplate', 'index.hbs');
        const html = fs.readFileSync(htmlTemplatePath, 'utf-8');
        const htmlTemplate = await hbs.compile(html)(req.body.state);
        //console.log(htmlTemplate);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(htmlTemplate);

        await page.emulateMedia('screen');

        await page.pdf({
            path: 'resume.pdf',
            landscape: true,
            format: 'A4',
            printBackground: true
        });
        console.log('pdf created successfully!');
        await browser.close();
    } catch (e) {
        console.log('error occurred in /create-pdf : ' + e);

    }
    //})();


});


app.get('/getPdf', (req, res) => {
    try {
        const file = fs.createReadStream("./resume.pdf");
        file.pipe(res);
    } catch (e) {
        console.log('catched error : ' + e);
    }

})


app.listen(port, () => console.log(`server is up and running on port ${port}`));