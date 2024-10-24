const movies = [
    { id: 1, title: 'O Poderoso Chefão', categories: ['Crime', 'Drama'], year: 1972 },
    { id: 2, title: 'Pulp Fiction', categories: ['Crime', 'Drama'], year: 1994 },
    { id: 3, title: 'O Senhor dos Anéis: A Sociedade do Anel', categories: ['Fantasia', 'Aventura'], year: 2001 },
    { id: 4, title: 'Matrix', categories: ['Ficção Científica', 'Ação'], year: 1999 },
    { id: 5, title: 'Forrest Gump', categories: ['Drama', 'Romance'], year: 1994 }
];

const movieController = {
    // GET /movies
    index(req, res) {
        res.status(200).json(movies);
    },
    // GET /movies/:id
    show(req, res) {
        const { id } = req.params;

        const movie = movies.find(movie => movie.id === +id);

        if (!movie) return res.status(404).json({ error: "Movie Not Found" });

        res.status(200).json(movie);
    },
    // POST /movies
    save(req, res) {
        const { title, categories, year } = req.body;

        if (!title || !categories || !year) return res.status(400).json({ error: "all fields must be filled in" });

        const movie = {
            id: Math.floor(Math.random() * 9999),
            title,
            categories,
            year
        }

        movies.push(movie);

        res.status(201).json({ message: "Filme salvo", movie });
    },
    // PUT /movies/:id
    update(req, res) {
        const { id } = req.params;
        const {title, year} = req.body;

        const movieIndex = movies.findIndex(movie => movie.id === +id);
        
        if(movieIndex === -1) return res.status(404).json({ error: "Movie Not Found" });

        if (typeof title === 'string') movies[movieIndex].title = title;

        if (typeof year === 'number') movies[movieIndex].year = year;

        res.status(200).json(movies[movieIndex]);
    },
    // DELETE movies/:id
    delete(req, res){
        const { id } = req.params;

        const movieIndex = movies.findIndex(movie => movie.id === +id);
        
        if(movieIndex === -1) return res.status(404).json({ error: "Movie Not Found" });

        movies.splice(movieIndex, 1);

        res.status(204).end();
    }
};

module.exports = movieController;