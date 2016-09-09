# Module 3 - Lesson 2

## Task

On the Travel Offers page (offers.html) you can see there are quite a few offers available. 14 currently but this may change in the future.

However we do not want to have our users see all our offers at the same time. Why? This is because it uses a lot of data to load everything at once and having everything on one page can sometimes cause clutter.

Your task is to introduce pagination to the offers page, limiting each page to a maximum of 6 offers.(This is where we have multiple pages of content with a limited number of items per page)

## Steps

1. Change the initial value of offersToDisplay to only the first 6.
2. Clicking on the Previous and Next buttons at the bottom of the offers page will change var page as they call the previous() and next() functions respectively. Make the functions change the value of offersToDisplay to the appropriate value relative to the page. e.g. The first time you click the Next button the function next() should know that the page is now 2 and becuase of that the value of offersToDisplay should be 6,7,8,9,10,11.

  - Use a bit of maths to work out which which is the first offer number for the next page.
  - Use a for loop and array.push() to add new numbers to offersToDisplay.
  - array.push() works like this:

    - `var myNewArray = [1,2,3,4];` (We start with a new array which is 1,2,3,4)
    - `myNewArray.push(7);` (Then push 7 onto the end)
    - `console.log(myNewArray)` (This is now going to say 1,2,3,4,7)

3. Ensure that if you are on page 1 and click previous that it doesn't try show nothing. If you are on page 3 you should only have 2 offers and your array should not be [12,13,14,15,16,17] as our offers only go up to 13 (14 offers but remember the numbering starts at 0)

# Notes

All code is to be written in js/lesson2.js there should not be a need to change the CSS or HTML.
