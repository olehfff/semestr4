const img = document.querySelector('img');

const slider = document.querySelector('input');

document.addEventListener('DOMContentLoaded', function() {
    function changeImgSize() {
        const sliderValue = slider.value
        console.log(sliderValue)
        const newImgWidth = sliderValue + '%';
        img.style.width = newImgWidth;
    }
    const debaunceSlider = _.debounce(changeImgSize, 300)

    slider.addEventListener('input', debaunceSlider)
})