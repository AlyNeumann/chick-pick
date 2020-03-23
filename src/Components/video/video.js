
//TODO: instagram feed not working yet - cors error! try with postman then cors anywhere
//TODO: make responsive & animate

//news articles etc
import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { buildUrl } from 'react-instafeed'
import useAbortableFetch from '../../Hooks/useAbortableFetch';
import Image from './image';
import dotenv from 'dotenv';
import './video.css';

const Video = () => {

    dotenv.config();

    //options for instagram feed
    const options = {
        accessToken: 'process.env.INSTA_TOKEN',
        clientId: '666998597198131',
        get: 'popular',
        locationId: null,
        resolution: 'standard_resolution',
        sortBy: 'most-recent',
        tagName: 'chickpickinmondays',
        userId: 123,
    }

    //hook for fetching instafeed 
    const { json, loading, error  } = useAbortableFetch(buildUrl(options))
    if (loading) return 'Loading...'
    if (error) return `Error: ${error}`
    if (!json) return null

    const { data } = json


    return (
        <div className="video-page-container">
            <h3>The brant new Chick Pickin' Mondays Live Music Video Series</h3>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                />
            </div>
            <h3>A playlist of Chick Pickin' Mondays artists</h3>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/playlist?list=PLe8kmhXy6SYV3jT-RW61TyjspYcsUqQ7A'
                    width='100%'
                    height='100%'
                />
            </div>
            
            <div className="insta-feed">
                {data && data.map(({ caption, id, images, tags }, index) => {
                    const image = images[options.resolution]
                    return (
                        <Image
                            key={index}
                            url={image.url}
                            title={caption.text}
                            caption={caption.text}
                            width={image.width}
                            height={image.height}
                        />

                    )
                })}
            </div>
        </div>)
}

export default Video;