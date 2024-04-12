# Resolved promises quiz

1. What is a promise (in your own words)?

- A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- A promise is a placeholder for a value that will be available in the future.

- an operation that normally takes a bit of time
  will eventually finish running.

2. Which part of the code we have so far is a promise?

- The fetch request returns a promise object.

3. What are the three states a promise can be in?

- (1) Pending state - meaning that the promise has been neither fulfilled nor rejected which leads us to the other states.

- (2) Resolved (fulfilled) - the promise has been fulfilled successfully.

- (3) Rejected - the operation failed to execute its promise.

4. What does it mean when a promise is "resolved" (or fulfilled)?

- The task we wanted to perform finished successfully.

5. How do we tell the code to do something only AFTER a promise is resolved?

- .then() method = the code inside the method will only run when the promise objects gets to a resolved state.

6. How do we handle a promise that has been rejected?

- To handle a promise that has been rejected, you can use the .catch() method. This method is called when a promise is rejected and it receives the reason for the rejection as an argument.

7. When is a promise rejected?

- it becomes rejected if an error is thrown inside any of the .then() blocks or if a programmer manually calls Promise.reject().

8. .catch(err => console.error(err)) - {explain the method and how it's used}

- is a method used to handle rejected promises in JavaScript.

9. What's a .catch() method?

- .catch() method = the code inside the method will only run when the promise objects gets to a rejected state.

10. Example of a promise rejected:

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg")
.then(res => res.json())
.then(data => {
console.log(data) //unsplash was unable to find a photo with what I wrote as my URL.
throw Error("I'm an error!")
document.body.style.backgroundImage = `url(${data.urls.regular})`
document.getElementById("author").textContent = `By: ${data.user.name}`
})
.catch(err => { //usually used when your throw something, in this case I'm throwing an error
console.log("Something went wrong! 😭")
// This is where I can handle the error
// Choose to use a default backgronud image
})

NOTES:

- This site shows an example URL for the icon:
- https://openweathermap.org/weather-conditions (that's where you learn how to get the weather icon)
-
- Note: the weather icon is found instead data.weather, which is
- an array of weather for that area. You can just access the first
- item in that array to get the icon ID.
