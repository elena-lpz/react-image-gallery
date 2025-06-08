# Ghibli movies Image gallery and website

An accessible image gallery using react

For this week's assignment we needed to build an image gallery using React.

# Live Demo

[Image Gallery](https://react-image-gallery-nowk.onrender.com/)

## Requirements

- 🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
- 🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
- 🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
- 🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
- 🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
- 🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content.
- 🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order.

All basic requirements have been met.

## Extras

I was not able to implement the search bar for my app since I used a different API.

- I used an API with a larger amount of data. In this case I was able to fetch not only the images (movie posters) but also information about the movies that can be seen in the modal view.
- I hid the API keys even though I was using a public one
- I designed a website that included a gallery from wireframing to high fidelity designs
- I tried some new features I've been meaning to try for a while using Framer motion
- I made a few accessibility/UX improvements like showing a selected state for the imaes, scrolling the selected image into view, hover effects or pressing enter to open the modal
- I added a dropdown menu for the links on mobile
- Used tailwind for styling

## Design

- [Wireframe Desktop](https://raw.githubusercontent.com/elena-lpz/react-image-gallery/refs/heads/main/public/assets/designs/wireframes/wireframe1.png)
- [Wireframe modal](https://raw.githubusercontent.com/elena-lpz/react-image-gallery/refs/heads/main/public/assets/designs/wireframes/wireframe2.png)
- [Figma Design](https://raw.githubusercontent.com/elena-lpz/react-image-gallery/refs/heads/main/public/assets/designs/figma-design/FigmaDesign.png)

## Reflection notes

For this project, I wanted to explore and expand on the concept of a gallery, but rather than keeping it simple and static, I decided to build an immersive, interactive website centered around the world of Studio Ghibli. Instead of presenting just a list of films or clickable images, I aimed to create a more dynamic and engaging experience that captures the charm and atmosphere of Ghibli’s storytelling and visuals.

I have really enjoyed working with React. I really like how it allows to break the site into reusable components. It made it easy to experiment with new ideas and whenever I wanted to test something, I could quickly spin up a new component without disrupting the rest of the code. Even when those ideas didn’t work out, it was simple to remove them cleanly, which made the whole development process feel much more flexible (and less stressfull!)

Overall, this project was a way for me to merge what we had learned in class with a bit of creativity, and I’m happy with how it evolved from a gallery idea into something more expressive and fun.

## Things I could not achieve (yet)

- I originally wanted to animate the polaroid pictures using parallax but could not get to it due to time constraint, so will attempt this in the future

- I tried making use of semantic tags, but we haven't really seen much on that when using React so I would like to know if I did this correctly or if there's room for improvement.

- I would also like to know if the use of components was done correctly. Is there maybe a better way of structuring this type of project?

# Resources

I used a lot of different tutorials and resources to complete this assignment. I might be forgetting some, but these are the ones that helped me the most:

- https://www.youtube.com/watch?v=RDxnu8Xt5Rk
- https://www.youtube.com/watch?v=cWRrqivxZMk
- https://www.youtube.com/watch?v=KsjixiVhVyY
- https://learnersbucket.com/examples/interview/responsive-slideshow-in-reactjs/
- https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
- https://ghibliapi.vercel.app/#section/Studio-Ghibli-API
- https://color.adobe.com/es/create/image
- https://dev.to/cesareferrari/conditionally-assign-a-css-class-to-a-react-component-jk5
- https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb
- https://stackoverflow.com/questions/74969485/onclick-event-for-enter-button-in-react-js#
- https://www.youtube.com/watch?v=E5NK61vO_sg
- https://www.youtube.com/watch?v=TUVoZvnCRwI

- https://tailwindcss.com/docs/installation/using-vite

# Credits

Icons: FontAwesome
Favicon: https://wallpapers-clan.com/app-icons/studio-ghibli/
API: https://ghibliapi.vercel.app/films
All images not included in the API from: https://www.ghibli.jp/
