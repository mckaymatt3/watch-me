import React from 'react';
import ShowCard from './ShowCard'; 

function MyWatchList({myShows, removeShow, deleteShowForever}) {
    // create a function to map - similar to ShowList
    const mapMyShows = myShows.map(function(myShow){
        //console.log("My Show:", myShow)
        return <ShowCard key={myShow.id} show={myShow} onShowClicked={removeShow} onShowDelete={deleteShowForever}/>
    })

    return(
        <div className="watch-list-container">
            {
                mapMyShows
            }
        </div>
    )
}

export default MyWatchList;