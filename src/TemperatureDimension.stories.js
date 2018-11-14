import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Welcome } from '@storybook/react/demo';

import TemperatureDimension from './TemperatureDimension'

export const problemTemp_default = {
    inputTemp: 12.4,
    dimension: "Fahrenheit"
}
export const problemTemp_nodecimal = {
    inputTemp: 12,
    dimension: "Fahrenheit"
}
export const problemTemp_Celsius = {
    inputTemp: 99.9,
    dimension: "Celsius"
}
storiesOf("TemperatureDimension", module)
    .add('default', () => <TemperatureDimension inputTempDim={problemTemp_default} />)
    .add('no decimal', () => <TemperatureDimension inputTempDim={problemTemp_nodecimal} />)
    .add('Celsius', () => 
        <TemperatureDimension inputTempDim={problemTemp_Celsius} changeNumEditor={action('output')}/>)
    .add('with button', () =>(
        <Button onClick={action('i got clicked')}>Hi !</Button>
    ))