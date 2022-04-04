import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Albums = () => {
    const [ albums, setAlbums ] = useState([]);

    // When the app first renders - and never again!...
    // Update the "albums" state variable using the "pretendToUseFetch" function
    useEffect(() => {
        setAlbums(pretendToUseFetch());
    }, [])

    // Pretend we are using fetch() to GET the following data...
    const pretendToUseFetch = () => {
        return [
            {
                id: "1",
                title: "Black Sabbath",
                year: "1970"
            },
            {
                id: "2",
                title: "Master of Reality",
                year: "1971"
            },
            {
                id: "3",
                title: "Sabotage",
                year: "1975"
            }
        ]
    }

    // Render a list of some of Black Sabbath's albums
    return (
        <ul>
            { 
                albums.map(albumObj => {
                    return (
                        <li>
                            <Link to="/albums/new-album">{albumObj.title} ({albumObj.year})</Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Albums;