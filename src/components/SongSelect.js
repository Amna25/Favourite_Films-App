import React from "react";

const SongSelect = ({songs, OnSongSelected}) => {
    const handleChange = function(event){
        const chooseSong = songs(event.target.value)
        OnSongSelected(chooseSong)
    }
    const songOptions = songs.map((song, index) => {
        return <option value={index} key={index}>{song.title}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
        <option value="" selected>Choose a Song</option>
        {songOptions}
        </select>
    )

}

export default SongSelect;