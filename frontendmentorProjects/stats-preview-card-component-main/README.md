# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![fullScreen](./screenshots/fullScreen.PNG)
![mobileScreen](./screenshots/mobileScreen.PNG)

### Links

-

## My process

- Mobile first into desktop

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Order usage and blending background color with images.

```css
.content-1 {
  border-radius: var(--br-size) var(--br-size) 0 0;
  background-image: url(images/image-header-mobile.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 24.99rem;
  width: 100%;
  background-color: hsl(277, 64%, 61%, 0.95);
  background-blend-mode: darken;
}
```

### Continued development

- Change the color and try not to blend the images takes away the highlight.

### Useful resources

-

## Author

- Frontend Mentor - [@khantmhtoo](https://www.frontendmentor.io/profile/khantmhtoo)

## Acknowledgments

-
