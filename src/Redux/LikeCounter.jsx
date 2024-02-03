import React, { useState } from "react";
import Reducer from "./Reducer";
import { createStore } from 'redux';
import { incrementLike, decrementLike } from "./Actions";
import '../App.css'

const store = createStore(Reducer)

function LikeCounter() {
    const[likeCount, changeCount] = useState(0)
    store.subscribe(()=>changeCount(store.getState().likeCount))

    const handleLike = () => {
        store.dispatch(incrementLike())
    }

    const handleUnlike = () => {
        store.dispatch(decrementLike())
    }

    return (
        <div id="playground">
            <h2>{likeCount}</h2>
            <div>
            <button onClick={handleLike} className="button">Like</button>
            <button onClick={handleUnlike} className="button">Unlike</button>
            </div>
        </div>
    )
}

export default LikeCounter