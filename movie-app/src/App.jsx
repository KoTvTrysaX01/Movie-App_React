import './App.css'
import Search from "./components/Search.jsx";
import {useState, useEffect} from "react";

const API_BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method:'GET',
    headers:{
        accept: 'application/json',
        authorization: 'Bearer ' + API_KEY,
    }
}

const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTgzNDI3ZTFhNjFjYjczNjllMTlmZjNhNTVjM2M4MCIsIm5iZiI6MTc1NTgwOTgyNi44NzUsInN1YiI6IjY4YTc4ODIyYzNmYTJmM2UwNGZkMmYyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SH517W8YOtQx6YB6ocUel33Cms1npTEPDfCjn_KcRGI'
    }
};

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const fetchMovies = async () => {
        try{
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(url, options);
            if(!response.ok){
                throw new Error();
            }
            const data = await response.json();
            console.log(data);
        }catch (error) {
            console.log(error);
            setErrorMessage('Error fetching movies. Please try again later');
        }
    }

    useEffect(() => {
        fetchMovies()
    }, []);
    return (
        <main>
            <div className="pattern">
                <div className="wrapper">
                    <header>
                        <img src="./hero.png" alt="Hero Banner" />
                        <h1>Find <span className="text-gradient">Movies</span>You'll Enjoy Without the Hassle</h1>
                        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </header>
                    <section className={"all-movies"}>
                        <h2>All Movies</h2>
                        {errorMessage && <p className={"text-red-500"}>{errorMessage}</p>}
                    </section>
                </div>
            </div>
        </main>
    )
}

export default App
