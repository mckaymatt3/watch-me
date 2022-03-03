// inmport state and use effects
import React, {useState, useEffect} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
// set state
const [shows, setShows] = useState([])
const [myShows, setMyShows] = useState([])


// run fetch
useEffect(() => 
    fetch(`http://localhost:8081/shows`)
    .then(response => response.json())
    .then(showData => {
        console.log(showData)
        setShows(showData)
    })
,[])

// addShow to My List function
function addInShow (thisShow) {
    // check shows running first - and then add in find
    // console.log("myShows: ", myShows)
    // drop in find as a const to check later
    const checkThisShow = myShows.find(function(currentlyMyShow){
        // console.log("currentlyMyShow: ", currentlyMyShow )
        return currentlyMyShow.id === thisShow.id
    })
    if (!checkThisShow) {
        return setMyShows([...myShows, thisShow])
    }
}

function removeShow (removeThisShow) {
    // console.log(removeThisShow)
    const updatedShowList = myShows.filter(function(currentlyMyShow){
        return currentlyMyShow.id !== removeThisShow.id
    })
    if (updatedShowList) {
        return setMyShows(updatedShowList)
    }
}

function deleteShowForever (deleteShow) {
    const deleteId = deleteShow.id
    fetch (`http://localhost:8081/shows${deleteId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(()=> {
        removeShow(deleteShow);
        setShows(shows.filter(function(currentlyInShows){
            return currentlyInShows.id !== deleteShow.id
        }))
    })
}

    return(
        <>
            <MyWatchList myShows={myShows} removeShow={removeShow} deleteShowForever={deleteShowForever}/>
            <hr/>
            <ShowList shows={shows} addInShow={addInShow} deleteShowForever={deleteShowForever}/>
        </>
    );
}

export default ShowCatalog;