const renderImage = (pic) => {
    const imageHtml = `
        <div class="image">
            <h2>${pic.title}</h2>
            <img src="${pic.url}" alt="${pic.description}" title="${pic.description}">
            <p>Total Horns: <span id="horn-count">${pic.horns}</span></p>
        </div>
    `;
    return imageHtml;
};

export default renderImage;