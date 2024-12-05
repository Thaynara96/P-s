import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovie";
import style from "./MovieDetail.module.css";

export function MovieDetail() {
    const {id} = useParams();
    const movie = useMovie(id);

    return (
        <section className={style.movie} >
            <figure className={style.imageContainer}>
                {movie.poster_path &&(
                <img 
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                        alt={`${movie.title} poster`} // Alterado o atributo alt para ter um texto mais descritivo
                    />
                )}
            </figure>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

        </section>
    )
}
