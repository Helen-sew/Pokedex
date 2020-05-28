const { home, index, makeNew, show, create, deletePokemon, update, edit } = require('./controller.js');

module.exports = (app) => {

    app.get('/', home);
    app.get('/pokemons', index);
    app.get('/pokemons/new', makeNew);
    app.get('/pokemons/:index', show);
    app.post('/pokemons', create);
    app.delete('/pokemons/:index', deletePokemon);
    app.put('/pokemons/:index', update);
    app.get('/pokemons/:index/edit', edit);

};

