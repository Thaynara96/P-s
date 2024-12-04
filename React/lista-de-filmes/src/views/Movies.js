import { useMovies } from "../hooks/useMovie";

export function Movies() {
    const movies = useMovies();

    return (
        <section>
            <h1>Filmes Populares</h1>

            <ul>
                {movies.map((movie) => <li>{movie.title}</li>)}

            </ul>
        </section>

    );
}