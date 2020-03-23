//TODO: make responsive & animate
//TODO: fix marker and user location, fix lat & lng for Grumpy's
import React from 'react';
import Map from '../map/map';
import './about.css';

const About = () => {

    //links to chick pick article
    const handleClick = () => {
        window.open('https://sorstu.ca/chick-pickin-mondays-au-grumpys-une-scene-par-et-pour-les-femmes/', '_blank');
        // window.location.href = 'https://sorstu.ca/chick-pickin-mondays-au-grumpys-une-scene-par-et-pour-les-femmes/'; 
    }

    return (
        <div>
            <div className="about-container">
                <h3>About Chick Pick</h3>
                <p>Chick Pickin' Mondays was created almost 13 years ago by Cecile Doo Kingue and Grumpy's barman Gern F. with the idea of showcasing female talent from Montreal, Canada and parts far flung. The night has become a huge success; the roster is often booked months in advance, and the crowds are generally large and laid back. The evening is a true celebration of Montreal's musical talent as well as that of the rest of the world. Acts range from solo musicians to groups all with the female voice as its center, the intimate atmosphere generating performances that are unique and heart felt.
                Your current host is Aly Marguerite accompanied by her band mate Tyler Parent from Old Time Honey. From the streets to the circus, Aly's style of romance and raw roots music from times forgotten intertwine intricately to create an original sound that is heavily layered with nostalgia.
            </p>
                <div>
                    <h3>This month at Chick Pick</h3>
                    <p>Details to come after the apocalypse...</p>
                </div>
                <button
                    onClick={handleClick}
                    className="article-btn">
                    <h5> Click here to read a lovely article about the night!</h5>
                </button>
                <div>
                    <h3>Location</h3>
                </div>
                <div className="mapbox">
                    <div className="map-container">
                        <Map />
                    </div>
                </div>
            </div>
        </div>)
}

export default About;



//FR:
// Le Lundi "Chick Pickin'" a été crée il y a presque 11 ans par Cecile Doo Kingue et le barman Gern F. avec l'idée de présenter le talent des femmes venant de Montréal, Canada et d'un peu partout. La soirée a rencontré un grand succès; la programmation est souvent fixée quelque mois à l'avance, et en général le publique est nombreux et décontracté. La soirée est une vraie célébration du talent de Montréal et d'ailleurs. Les numéros présentés peuvent aller de la performance solo à des représentations de groupes, tous centrés sur la voix féminine, et l'atmosphère intime génère des performances qui sont uniques et sincère. 

// Votre hôstesse est Aly Marguerite et son groupe Old Time Honey. Dans les rues jusqu'au cirque, le style musical d'Aly est romantique et remplis des sons folk d'une temps oubliés, une mélange qui créer un son original qui est lourd de nostalgie. 

