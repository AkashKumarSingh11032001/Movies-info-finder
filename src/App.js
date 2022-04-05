import React from 'react';
import { useEffect } from 'react';

const ApiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=99f9c1f9"

const App = () => {

    useEffect(() => {
        searchMovies("IronMan");
    })

    const searchMovies = async (title) => {
        const response =  await fetch(`${ApiKey}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    return (

        <div>
            <h1>Hello!</h1>
            
        </div>

    );

}

export default App;