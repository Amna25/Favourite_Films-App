import React, { useEffect, useState } from 'react'
import SongList from '../components/SongList';

const SongBox =  () => {

    const[songs, setSongs] = useState([])

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function (){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songsList => setSongs(songsList.feed.entry))
        .catch(err => console.error)
    }
    // const loadSongs = () => {
    //     fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    //       .then(res => res.json())
    //       .then(songsList => setSongs(songsList.feed.entry))
    //       .catch(err => console.error);
    //   }

    console.log('songs: ', songs);
    return(
        <>
        <h2>i am a song box</h2>
       <SongList songs={songs} />
       
        </>
    )


}

export default SongBox;