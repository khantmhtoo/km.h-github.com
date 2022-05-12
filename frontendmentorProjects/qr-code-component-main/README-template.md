# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## My process

- My process began by outline or wireframing how I would see it
- First I notice there is a card in the middle and by understanding that concept I notice that it takes a certain size in terms of width being a specfic size
- From understand that the next point was that no matter the screen size, the "container" was also in the middle and its content are align center for everything
- From that point I began my process of building, I use two div: 1) to align the content to center, where as the other div is for containing the content itself (qr, text, title)
- From there I would style them depending on the given --> Working from mobile first approach as a practice

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Things I learn for this project is the nesting of divs and better usage of flexbox and how to move around things with flexbox.

````html
<div>Nesting</div>
```css .card-container { max-width: 20rem; margin: 0 auto; padding: 1rem;
border-radius: var(--border-radius); background-color: hsl(var(--clr-card));
text-align: center; box-shadow: 0px 0px 5px hsl(var(--clr-darkblue)); }
````

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@khant](https://www.frontendmentor.io/profile/khantmhtoo)
