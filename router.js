const { homePage, indexPage, newPage, showPage, postPage, deletePage, replacePage, editPage } = require('./controller.js');

module.exports = (app) => {

    app.get('/', homePage);
    app.get('/pokemons', indexPage);
    app.get('/pokemons/new', newPage);
    app.get('/pokemons/:index', showPage);
    app.post('/pokemons', postPage);
    app.delete('/pokemons/:index', deletePage);
    app.put('/pokemons/:index', replacePage);
    app.get('/pokemons/:index/edit', editPage);

};

