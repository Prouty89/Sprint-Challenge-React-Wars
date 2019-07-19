import React from 'react';
import { Card } from 'semantic-ui-react';


const CardContent = props => (
    <Card>
        <Card.Content>
            <Card.Name>{props.characterInfo.name}</Card.Name>
            <Card.Home>{props.characterInfo.homeworld}</Card.Home>
        </Card.Content>
        <Card.Meta>Traits</Card.Meta>
        <Card.Attributes>Height: {props.characterInfo.height}, 
                         Mass: {props.characterInfo.mass}, 
                         Gender: {props.characterInfo.gender}, 
        </Card.Attributes>
    </Card>
)

export default CardContent
    