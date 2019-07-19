import React, { useState } from 'react';
import CardContent from './Card';
import data from '../dataSwapi';

const InfoCard = (props) => {
    const characterArray = props.characterData.results
    return (
        <div className = "info-card">
            {data.results.map(character => <CardContent character={character} key = {character.created}  />
            )}
        </div>
    );
};

export default InfoCard;