//database
const pokemon = require('./models/pokemon.js');

//Home  
const home = (req, res) => {
    res.render('home.ejs');
};

//Index 
const index = (req, res)=> {
    res.render('index.ejs', { pokemon : pokemon });
};

//New 
const makeNew = (req, res) => {
    res.render('new.ejs');
};


//Show 
const show = (req, res) => {
    res.render('show.ejs', { 
        //send the specific pokemon data into the show.ejs page under the variable 'pokemon'
        pokemon: pokemon[req.params.index],
        //send the index of the pokemon into the show.ejs page under the varibale 'index'
        index: req.params.index   
    });

};

//Create
const create = (req, res) => {
    console.log(req.body);
    //create newPokemon object to match the data structure of the model 
    let newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type.split(','),
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense:  req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed 
        }   

    };
    console.log(newPokemon);
    //push the newPokemon object into the database 
    pokemon.push(newPokemon);
    //redirect to the index page 
    res.redirect('/pokemons');
};

//Delete all 
// app.delete('/planets/:index', (req, res) => {
//     scientists.splice(0, scientists.length);
//     res.redirect('/planets');
// });


//Delete 
const deletePokemon = (req, res) => {
    // splices the pokemon from the 'database' based on its array index
    pokemon.splice(req.params.index,1);
    // redirects to index page
    res.redirect('/pokemons');
};

//Update
const update = (req, res)=> {
    console.log(req.body);
    // creates editPokemon object to match the data structure of the model
    let editPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type.split(','),
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }
    };
    
    // finds the pokemon we're editing by the index number, then sets it equal to the editPokemon object
    pokemon[req.params.index] = editPokemon;
    res.redirect('/pokemons/' + req.params.index); // /pokemons/ - redirect to index page 
    // if with + req.params.index, redirect to /pokemons/index (show)
};

//Edit 
const edit = (req, res) => {
    res.render(
        'edit.ejs', 
        { //send the specific pokemon data into the show.ejs page under the variable 'pokemon' 
            pokemon: pokemon[req.params.index], 
          //send the index of the pokemon into the show.ejs page under varible 'index'
            index: req.params.index 
        }
    );
};




module.exports = {
    home,
    index,
    makeNew,
    show, 
    create,
    deletePokemon,
    update,
    edit
};

