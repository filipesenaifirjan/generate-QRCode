const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const qrcode = require('qrcode');
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//templates  
app.set("view engine", 'ejs');
//routes
app.set("views", path.join(__dirname, "view"));
//static files render
app.get('/', (req, res) => {
   res.render('index');
});
app.post('/generate', (req, res) => {
    const  input_Text = req.body.text;
    console.log(input_Text);
    qrcode.toDataURL(input_Text, (err, src) => {
        res.render('generate', { 
            qrcode: src
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    }
);