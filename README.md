# Callbacks-in-JavaScript
Callback in JavaScript 


JavaScript Asynchronous Nature & Callbacks
This project demonstrates the fundamental concepts of Asynchronous JavaScript, focusing on how the execution flow handles timers and external script loading.

1. Asynchronous Execution with setTimeout
The code illustrates that JavaScript does not wait for timers to finish before moving to the next line of code. Even with a delay, the console.log statements following the timer execute first.

Synchronous Flow: Normal logs appear in order in the console.

Asynchronous Flow: The setTimeout functions are sent to the Web API container and execute only after the synchronous stack is clear.

2. DOM Manipulation
The script demonstrates basic DOM interaction by selecting an element by its ID and modifying its CSS properties dynamically.

Action: Changes the background color of the div with ID red to yellow.

3. Callback Functions & Script Loading
A custom loadscript function is implemented to show how to handle actions after an external resource has finished loading.
