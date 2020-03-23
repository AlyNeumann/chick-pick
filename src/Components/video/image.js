import React from 'react';

const Image = (props) => {
    return (
        <div>
            <h4>Title: {props.caption.text}</h4>
            <p>Caption: {props.caption.text}</p>
            <img src={props.image.url}/>
        </div>
    )
}

export default Image;