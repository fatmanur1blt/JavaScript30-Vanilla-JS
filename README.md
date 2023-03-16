# JavaScript30-Vanilla-JS 
JavaScript30-Vanilla-JS Challenge 
* Source : [JavaScript30](https://javascript30.com/)
## 01-Drum Kit 
I avoided using `keyCode` event because this event has been deprecated. 
<br/> 
* For Other Events :point_right:  [web3school/keyboard events](https://www.w3schools.com/jsref/obj_keyboardevent.asp) 
<br/> 
Then I used the code event. For the code event, I need the code of the key that triggered the event. I chose the numbers 1,2,3..8,9. Numbers of code keys Digit 1...Digit 9. I have included these numbers. When the keys are pressed, the background changes with css and the sound specified with the same key numbers that I typed into the audio and div tag comes out.
<br/>
<b><em>Image;</em></b>
<br/>
<img src="./01-DrumKit/image.png">

## 02-Clock
There is both an analog clock and a digital clock application in this project. There are two buttons. by pressing these buttons, you can find out the time with an analog or digital clock.

## 03-CSS-Variables
There are 3 css variables in this project. The names in the input value that we have written in html and the variables that we have defined in the root that we have defined in css should be the same.
<br/>
Like This;
<br/>
`<input type="range" id="blur" name="blur" min="0" max="24" value="10" data-sizing="px">
:root{
    --blur:12px;
}`
<br/>
<b><em>Image;</em></b>
<br/>
<img src="./03-CSS-Variables/variable.png">

## 04-Array-Cardio
By creating an `array`, we printed the desired value to the console using methods in these arrays.
<br/>
* Array Methods :point_right:  [JS Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
<br/>

## 05-Flex Panel Gallery
In this project, we have provided the elements with the `display:flex;` property and the column property so that they come side by side. Also, with transform: translate, you can access the first child and last child of the div tags and then come to the screen with transition.

## 06-Type-Ahead
it is a program that brings the cities we enter in the input with the form element to the user via the API.

## 07-Array-Cardio-2
In This Project; <br/>
Array Methods Used: `every` , `some` , `find` , `findIndex`.

## 08-Fun-with-HTML5-Canvas
In this project, when we can draw better with ` <input type="color">` and `<input type="number">`. that we have added to the screen with the html canvas feature, we can choose the size and color of the drawing color with the `change`event we write in JavaScript.

## 09-Dev-Tools-Domination
Different methods have been processed to print message to <em>console</em> in this project.