import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { order, restock } from "../features/iceCreamSlice";

function IceCreamView() {
    const numberOfIceCreams = useSelector(
        (state) => state.iceCream.numberOfIceCream
    );

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of ice Creams: {numberOfIceCreams} </h2>
            <button
                onClick={() => {
                    dispatch(order());
                }}
            >
                Order ice Creams
            </button>
            <button
                onClick={() => {
                    dispatch(restock(5));
                }}
            >
                Restock ice Creams
            </button>
        </div>
    );
}

export default IceCreamView;
