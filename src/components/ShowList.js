import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, addInShow, deleteShowForever}) {
    // create const of map function to map the item - remember return
    const addShows = shows.map(function(show){
        //console.log("Show: ", show)
        return <ShowCard key={show.id} show={show} onShowClicked={addInShow} onShowDelete={deleteShowForever} /> 
    })
    
    return(
        <div onclassName="show-container">
            {
                addShows
            }
        </div>
    );
}

export default ShowList;