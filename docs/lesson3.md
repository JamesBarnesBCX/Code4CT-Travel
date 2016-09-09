# Module 3 - Lesson 2

## Task

We would like to offer our users the ability to search for an offer they are interested in. We have a search box but you need to write the code which works out which offers to show our clients when they make a search.

## Steps

Only write your code in the search results function.

1. Write a loop which runs across the offersData array (You can use any type of loop)
2. Use offersData[i].place to get the place name for each offer in offersData and save it in a variable called placeName
3. With console.log() to show each of the place names in offersData in the console
4. Using placeName.indexOf(term) check if the placeName contains the search term

  - indexOf() works by checking if one string contains another string and if so it return the character position in the string where the string you are looking for starts.
  - `var sentence = "This is a long sentence"` creates the variable sentence
  - `sentence.indexOf("his")` will return a result of 1, remember with computers things start at 0 so the first character 'T' is at position 0
  - `sentence.indexOf("long")` will return a result of 10
  - `sentence.indexOf("long")` will return a result of 18, this is because T and t are not the same, T is upper case.
  - `sentence.indexOf("woof")` will return a result of -1, as it could not be found in the variable sentence

5. If the term could be found in the placeName, add the offersData index to the array called results

# Notes

All code is to be written in js/lesson3.js there should not be a need to change the CSS or HTML.
