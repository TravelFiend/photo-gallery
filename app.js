import renderImage, { renderHeader } from './home/renderImage.js';
import htmlToDOM from './src/html-to-dom.js';
import images from './data/images.js';

const imageSection = document.querySelector('.images');
const myHeader = document.querySelector('.container');
const myDropdown = document.querySelector('select');

const renderedHead = renderHeader();
const myHead = htmlToDOM(renderedHead);
myHeader.prepend(myHead);

images.forEach(image => {
    let renderedPic = renderImage(image);
    let domPic = htmlToDOM(renderedPic);
    imageSection.appendChild(domPic);

    const myOptions = document.createElement('option');
    myOptions.value = image.keyword;
    myOptions.textContent = image.keyword;
    myDropdown.appendChild(myOptions);
});
