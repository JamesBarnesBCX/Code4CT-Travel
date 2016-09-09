# Module 3 - Lesson 1

## Task

Use JavaScript to make the background of the index.html header change every 5 seconds.

There are 5 images in the /img folder:

- 01.jpeg ![alt tag](https://raw.githubusercontent.com/jamesbarnesbcx/Code4CT-Travel/master/img/01.jpeg)
- 02.jpeg ![alt tag](https://raw.githubusercontent.com/jamesbarnesbcx/Code4CT-Travel/master/img/02.jpeg)
- 03.jpeg ![alt tag](https://raw.githubusercontent.com/jamesbarnesbcx/Code4CT-Travel/master/img/03.jpeg)
- 04.jpg (Take note of the different extension) ![alt tag](https://raw.githubusercontent.com/jamesbarnesbcx/Code4CT-Travel/master/img/04.jpg)
- 05.jpg ![alt tag](https://raw.githubusercontent.com/jamesbarnesbcx/Code4CT-Travel/master/img/05.jpg)

## Steps

1. Create a function called changeBackground() which:

  - Checks the current background and depending on which checks what the current background is
  - Replaces it with the next one e.g. if 01.jpeg is set, change it to 02.jpeg etc.
  - There is no 6th image so be sure to wrap around to the first image

2. Use the setInterval() function to make the background change every 5 seconds

3. Use console.log() to track the change of the background

# Notes

All code is to be written in js/lesson1.js there should not be a need to change the CSS or HTML beyond the name of the creator in the footer of the HTML.

## Use:

```
element = document.getElementById(id);
```

and

```
element.style.property = "value";
```

To change line 55 of index.html which is:

```
<header id="top" class="header" style="background: url(img/01.jpeg) no-repeat center center scroll;">
```

### Example:

```
if (document.getElementById("top").style.background === 'url("img/01.jpeg") center center no-repeat scroll') {
   alert("It is true");
 }
```

This will check if the element with id of top has that specific background style.

## Use:

```
setInterval(function,milliseconds);
```

to make a function every so many milliseconds.

### Example:

```
setInterval(function(){alert("Hi there");}, 3000);
```

This will create an alert every 3 seconds that says "Hi there".
