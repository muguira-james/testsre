import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ProblemItem from './ProblemItem'


export const problemTemp_default = {
    inputTemp: 12.4,
    dimension: "Fahrenheit"
}

export const problemTemp_Celsius = {
    inputTemp: 99.9,
    dimension: "Celsius"
}
export const problemTemp_CorrectA = {
    inputTemp: 212,
    dimension: "Fahrenheit"
}
export const problemTemp_CorrectB = {
    inputTemp: 100,
    dimension: "Celsius"
}
export const problem_incorrectA = {
    inputTemp: 22,
    dimension: "Celsius"
}
export const problem_incorrectB = {
    inputTemp: 0,
    dimension: "Kelvin"
}

export const problem_invalidA = {
    inputTemp: 'foo',
    dimension: "Celsius"
}

storiesOf("ProblemItem", module)
    .add('default', () =>
        <ProblemItem
            inputTempDim={problemTemp_default}
            convertedTempDim={problemTemp_Celsius}
        />)
    .add('test correct', () =>
        <ProblemItem
            inputTempDim={problemTemp_CorrectA}
            convertedTempDim={problemTemp_CorrectB}
        />)
    .add("test incorrect", () =>
        <ProblemItem
            inputTempDim={problem_incorrectA}
            convertedTempDim={problem_incorrectB}
        />
    )
    .add("test invalid 1", () =>
        <ProblemItem
            inputTempDim={problem_invalidA}
            convertedTempDim={problem_incorrectB}
        />
    )
