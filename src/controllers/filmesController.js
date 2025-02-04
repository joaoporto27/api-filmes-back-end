const Filme = require("../models/Filme");
const FilmeList = require("../models/FilmeLista");

const lista = new FilmeList();

const filme1 = new Filme('Anjos da Lei', 2012, '1h49m', 100012);
lista.addFilme(filme1); 

lista.addFilme(new Filme('Anjos da Lei 2', 2014, '1h52m', 10203));

const router = {
    addFilme: (req, res) => {
        try {
            const { title, year, duration, likes } = req.body;
            if(!title || !year || !duration || !likes) {
                throw new Error('Preencha todos os campos!');             }
            const film = new Filme (title, year, duration,likes);
            lista.addFilme(film);
            res.status(200).json({message: 'Filme criado com sucesso'});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar filme", error});
        }
    },

    
}