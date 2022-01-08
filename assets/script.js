console.log('working');

1) I want to make sure I retrieve data from the API call.
    => I can get the fetch call to work properly
        => Let's console.log stuff
        => link a script tag to an html
        => console.log the data from the fetch call
        => observe & research the array of objects returning.

2) I would start to stylize/add divs to my page
    => I would pick out a div to RENDER MY RESULTS
    => Form will be its own form
    => div = search results
    2a) div (box for the forecast the day of)
        -> Fetch the data for the weather DAY OF.
        -> Get the data for the city name, current date, temperature, wind speed humidity, and UV index. 
        -> Get it to SOMEHOW DISPLAY TO THE PAGE. 
        -> textContent to show it to the page
        -> Append that to the page (appendChild)

        -> To grab images => The data will give you a png/jpg, so find a way to get the image tag to accept a src link!

    2b) div (the boxes for the five day forecast)
        -> for loop through the 5 day forecast
        -> Generate a div/box that contains each of the data
        -> That way you don't have to make static html elements on the page to fill

3) Search box
    => A form where upon submission (submit), i take the VALUE of the form and pass that VALUE into the fetch call's URL.
    => make sure the form does not go back to DEFAULT. Some kind of PREVENTION

4) Getting the previous search histories to display on the bottom left of the page
    -> localStorage
    -> We need to grab the values that we type into the search form, and STORE it in localStorage as an array. (Maybe SET THE ITEM in the localStorage somehow)
    -> for loop to iterate through the localStorage's array AFTER GETTING THE ITEMS IN THE ARRAY and then make elements, textContent
    4b) We need to not just make it into a div, we need to make them into a BUTTON with some DATA ATTRIBUTE that holds the NAME of the city that can then be PASSED into a api call. 