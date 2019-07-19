import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import data from '../dataSwapi';


const CardContent = (props) => {
    console.log('Card Content', props.character)
    const { name, homeworld, height, mass, gender, } = props.character
    
    
  return (
    <div className ='card'>
        <Card>
            <Card.Content>
                <Card.Name>{name}</Card.Name>
                <Card.Home>{homeworld}</Card.Home>
            </Card.Content>
            <Card.Meta>Traits</Card.Meta>
            <Card.Attributes>Height: {height}, 
                             Mass: {mass}, 
                             Gender: {gender}, 
            </Card.Attributes>
        </Card>
    </div>
 )
}
export default CardContent
    