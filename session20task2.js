const changeBorders = () => {
    const images = document.querySelectorAll('.myImage');

    // For First image (solid border)
    images[0].style.border = '3px solid black';

    // For Second image (dotted border)
    images[1].style.border = '3px dotted red';

    // For Third image (dashed border)
    images[2].style.border = '3px dashed green';

    // For Fourth image (double border)
    images[3].style.border = '5px double blue';
};
