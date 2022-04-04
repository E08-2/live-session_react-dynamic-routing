import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CurrentAlbum = () => {
    const [ albums, setAlbums ] = useState([
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
    ]);

    // If the user clicked the first album link in "<Albums />"...
    // They will go to the path "/albums/new-album/1"
    // Now, in the <CurrentAlbum /> component, we can find out the value of the :id param (in this case, "1")
    // * After the user clicks, we find out what they clicked on!
    const { id } = useParams();

    const chosenAlbum = albums.find(album => album.id === id);

    return ( 
        <div>My ID is {chosenAlbum.id}. My title is {chosenAlbum.title}. My year is {chosenAlbum.year}.</div>
    )
}

export default CurrentAlbum;