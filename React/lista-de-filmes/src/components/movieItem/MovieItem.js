import styles from "./MovieItem.module.css";
import { Link } from "react-router-dom"; // Adicionada a importação do Link

export function MovieItem({ movie }) {
    return (
        <div className={styles.movie}>
            {movie.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                    alt={`${movie.title} poster`} // Alterado o atributo alt para ter um texto mais descritivo
                />
            )}
            <h3>{movie.title}</h3>
            <p>
                <Link className={styles.detailsBtn} to={`/movies/${movie.id}`}>Ver detalhes</Link>
            </p>
        </div>
    );
}
