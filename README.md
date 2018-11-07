This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

This project repo allows a teacher to input the answers from a Heat and Temperature conversion worksheet.  The display has an element on the top that allows the teacher to add entries and each entry is displayed below.

The students are asked convert input temperatures between:
Fahrenheit, Celsius, Kelvin and Rankine

In this case, the app is composed of 2 components and container.  The 2 components are: EditAnAnswer and AnAnswer. The container is called App.  The EditAnAnswer component is used to enter temperature convertion information provided by the student.  EditAnswer is a stand alone component that checks the student work, edits their results and provides feedback. Input fields are:

+ An input temperature, is of the form: several digits, a decimal point and 1 or 2 more digits.  
+ The student must choose a dimension for the input
+ The student then enters their converted temperature
+ The student also enters the dimension of their converted temperature

For example: the problem specifies: 212 Fahrenheit, the student responds with 100 Celsius and the app responds with "correct."  Or, the problem specifies: 212.2 Fahrenheit and the student responds with 123.4 Celcius.  In this case the app replies with 'incorrect'

If the problem specifies an input temperature of 'dog' the app will respond with 'invalid' and highlight that input in red.  If the student response is 'dog' the app will highlight this in red, and mark the response as 'invalid'

### Assumptions

There is very little styling in the output.  It is assumed that a designer will provide feed back and then the output can be adjusted.

There is no database to save the answers to.  This was not stated in the requirements.  This is an easy add on

### CI/CD

I did not create a CI/CD configuration.  I will describe what I envision.  The described setup can be exteneded to handle code coverage (cobrature).  I will only consider: 
+ unit testing on the local machine
+ developer feature branch checkin to development-stage 
+ development-stage deploy to development

#### Unit testing 

Unit testing of a visual app can take place with Jest, StoryBook or other frameworks.  In this case the app handles editing of the inputs.  The allows many combinations of inputs.  It marks invalid inputs in red and provides a 'correct' or 'incorrect' response to valid inputs.

combinations that where tested for include:

+ invalid student input with several other inputs showing

![Invalid Student input](./sre_invalid_1.png)



+ invalid problem input

![invalid problem input](./sre_invalid_2.png)