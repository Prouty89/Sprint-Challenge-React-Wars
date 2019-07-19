import React from 'react';
import CardContent from './Card';

const InfoCard = props => {
    return (
        <div className = "info-card">
            {props.starWarsChar.map(character => {
                return <CardContent key = {character.created} characterInfo={character} />
            })}
        </div>
    );
};

export default InfoCard;