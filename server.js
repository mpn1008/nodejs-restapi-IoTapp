let express = require('express');
let app = express();
let port = process.env.PORT || 8000;
let bodyParse = require('body-parser');
let routes = require('./routes');

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.get('/', (req, res) => res.send("Phuong's rest webservice"));
app.use('/api', routes);

app.listen(port, function () {
    console.log("Running Rest webservice on port " + port);
});
