import renderImages from '../home/renderImage.js';

const test = QUnit.test;

test('should return exact same static HTML from the template function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const pic = {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg',
        title: 'Smaug',
        description: 'Fan illustration of Smaug from \'The Hobbit\'',
        keyword: 'dragon',
        horns: 100
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const htmlStuff = renderImages(pic);

    const expected = `
        <div class="image">
            <h2>Smaug</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg" alt="Fan illustration of Smaug from 'The Hobbit'" title="Fan illustration of Smaug from 'The Hobbit'">
            <p>Total Horns: <span id="horn-count">100</span></p>
        </div>
    `;
    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(htmlStuff, expected);
});
