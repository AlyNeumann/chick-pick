import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import useLocation from '../../Hooks/useLocation';
//bring in mapbox token
import dotenv from 'dotenv';
import cpm_logo1 from '../../images/cpm_logo1.png';
import "./map.css";


const Map = () => {
    dotenv.config();
    const location = useLocation();
    const [popup, setPopup] = useState(false);
    const [viewport, setViewport] = useState({
        //MTL
        latitude: 45.485270,
        longitude: -73.581420,
        width: 800,
        height: 800,
        zoom: 10.8,
        pitch: 60
    })

    //make map responsive
    useEffect(() => {
        const handleResize = () => {
            setViewport({
                ...viewport,
                width: 800,
                height: 800,
            })
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    //zoom to user location
    useEffect(() => {
        if (location) {
            console.log(location)
            setViewport((vp) => ({
                ...vp,
                ...location,
                zoom: 13,
            }));
        }
    }, [location, setViewport]);

    return (<div>
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/alymarguerite/ck83pj0vx32cs1in7dbosizgu"
            // mapStyle="mapbox://styles/alymarguerite/ck30gb37i0ynh1cm8m7xlk465"
            // mapStyle="mapbox://styles/alymarguerite/ck30gwnu40z7y1cm8lumnxcoe"
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
        >
            <Marker
                latitude={45.4852608}
                longitude={-73.5739904}
                offsetLeft={-20}
                offsetTop={-10}
                className="marker"
            >
                <button
                    className="marker-btn"
                    onClick={e => {
                        e.preventDefault();
                        setPopup(true);
                    }}
                >
                     <FontAwesomeIcon icon={faMapMarkerAlt} />
                </button>
            </Marker>
            {location ? (
                <Marker
                    latitude={location.latitude}
                    longitude={location.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <span style={{ fontSize: `${viewport.zoom * 0.27}rem` }}>You are here</span>
                </Marker>
            ) : null}
            {popup ?
                <Popup
                    className="pop-up"
                    latitude={45.4852608}
                    longitude={-73.5739904}
                    onClose={() => {
                        setPopup(false);
                    }}
                >Come find music over here now eh?</Popup>
                : null}
            <div style={{ position: 'absolute', right: 0 }}>
                <NavigationControl />
            </div>
        </ReactMapGL>
    </div>
    )
}

export default Map; 