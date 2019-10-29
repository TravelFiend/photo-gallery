import renderImage from './home/renderImage.js';
import htmlToDOM from './src/html-to-dom.js';
import images from './data/images.js';

const imageSection = document.querySelector('.images');

images.forEach(image => {
    let renderedPic = renderImage(image);
    let domPic = htmlToDOM(renderedPic);
    imageSection.appendChild(domPic);
});
