var express = require('express');
var app = express();
var hbs = require('hbs');
var port = 3000;

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('index', {
        title: "HTML5-SuperTemplate"
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        title: "About Me"
    });
});

app.get('/instructions', function(req, res) {
    res.render('instructions', {
        title: "Instructions"
    });
});

app.get('/buttons', function(req, res) {
    res.render('buttons', {
        title: "Buttons"
    });
});

app.get('/Lists', function(req, res) {
    res.render('Lists', {
        title: "Lists"
    });
});

app.get('/menus', function(req, res) {
    res.render('menus', {
        title: "Menus"
    });
});

app.get('/tables', function(req, res) {
    res.render('tables', {
        title: "Tables"
    });
});

app.get('/tooltips', function(req, res) {
    res.render('tooltips', {
        title: "Tooltips"
    });
});

app.get('/typography', function(req, res) {
    res.render('typography', {
        title: "Typography"
    });
});

app.get('/hr', function(req, res) {
    res.render('hr', {
        title: "Horizontal Rules"
    });
});

app.get('/icons', function(req, res) {
    res.render('icons', {
        title: "ICONS"
    });
});

app.get('/code', function(req, res) {
    res.render('code', {
        title: "CODE & PRE"
    });
});

app.get('/tabs', function(req, res) {
    res.render('tabs', {
        title: "TABS"
    });
});

app.get('/breadcrumbs', function(req, res) {
    res.render('breadcrumbs', {
        title: "Breadcrumbs"
    });
});

app.get('/grids', function(req, res) {
    res.render('grids', {
        title: "Grid System"
    });
});

app.get('/images', function(req, res) {
    res.render('images', {
        title: "IMAGES"
    });
});

app.get('/slideshow', function(req, res) {
    res.render('slideshow', {
        title: "Slideshow"
    });
});

app.get('/forms', function(req, res) {
    res.render('forms', {
        title: "Forms"
    });
});

app.get('/classes', function(req, res) {
    res.render('classes', {
        title: "Classes"
    });
});


app.listen(port);

console.log("Running at http://localhost:" + port);