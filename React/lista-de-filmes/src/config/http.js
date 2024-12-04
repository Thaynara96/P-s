import axios from "axios";

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTkxMDkzZDcwMGM1OWZjNTVkNjFlYTE3MGRiNTg0NSIsIm5iZiI6MTczMzIzMTc2OC4zMDksInN1YiI6IjY3NGYwNDk4MTIyMmFkYmI2M2RmMWEyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s8kUcfDXEzO217FfFhbqTRI6vloedWEOvDUO3aw5J6c'
    }
});