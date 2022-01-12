import React from "react";
import Song from './Song'

const SongList = ({songs}) => {

    const songNodes = songs.map((song, index) => {
        return(
            <Song song={song.title.label} key={index} ></Song>
        )
    })
    return(
        <div id = "song-list">
            <ol>{songNodes}</ol>
        </div>

    )

}

export default SongList;