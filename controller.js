const pokemon = require('./models/pokemon.js');

//Home  
const homePage = (req, res) => {
    res.render('home.ejs');
};

//Index 
const indexPage = (req, res)=> {
    res.render('index.ejs', { pokemon : pokemon });
};

//New 
const newPage = (req, res) => {
    res.render('new.ejs');
};


//Show 
const showPage = (req, res) => {
    res.render('show.ejs', { pokemon: pokemon[req.params.index] });
};

//Post/create
const postPage = (req, res) => {
    pokemon.push(req.body);
    console.log(req.body);
    res.redirect('/pokemons');
};

//Delete all 
// app.delete('/planets/:index', (req, res) => {
//     scientists.splice(0, scientists.length);
//     res.redirect('/planets');
// });


//Delete 
const deletePage = (req, res) => {
    pokemon.splice(req.params.index,1);
    res.redirect('/pokemons');
};

//Put/replace  
const replacePage = (req, res)=> {
    pokemon[req.params.index] = req.body;
    console.log(req.body);
    res.redirect('/pokemons');
};

//Edit 
const editPage = (req, res) => {
    res.render(
        'edit.ejs', //render views/edit.ejs
        { //pass in an object that contains
            pokemon: pokemon[req.params.index], //the fruit object
            index: req.params.index //... and its index in the array
        }
    );
};

module.exports = {
    homePage,
    indexPage,
    newPage,
    showPage, 
    postPage,
    deletePage,
    replacePage,
    editPage 
};

