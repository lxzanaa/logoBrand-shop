window.onload = function () {
    slideMin();
    slideMax();
}

const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const priceInputMin = document.querySelector(".min-input");
const priceInputMax = document.querySelector(".max-input");
const minGap = 0;
const range = document.querySelector(".slider-track");

const sliderMinValue = parseInt(minVal.getAttribute('min'));
const sliderMaxValue = parseInt(maxVal.getAttribute('max'));

minVal.addEventListener('input', slideMin);
maxVal.addEventListener('input', slideMax);
priceInputMin.addEventListener('change', setMinInput);
priceInputMax.addEventListener('change', setMaxInput);

function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    priceInputMin.value = '$' + minVal.value;
    setArea();
}

function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        maxVal.value = parseInt(minVal.value) + minGap;
    }
    priceInputMax.value = '$' + maxVal.value;
    setArea();
}

function setArea() {
    let minValue = parseInt(minVal.value);
    let maxValue = parseInt(maxVal.value);
    let rangeWidth = sliderMaxValue - sliderMinValue;
    let leftPercent = ((minValue - sliderMinValue) / rangeWidth) * 100;
    let rightPercent = ((sliderMaxValue - maxValue) / rangeWidth) * 100;

    range.style.left = leftPercent + "%";
    range.style.right = rightPercent + "%";
}

function setMinInput() {
    let minPrice = parseInt(priceInputMin.value.replace('$', ''));
    if (minPrice < sliderMinValue) {
        minPrice = sliderMinValue;
    }
    if (minPrice > parseInt(maxVal.value) - minGap) {
        minPrice = parseInt(maxVal.value) - minGap;
    }
    priceInputMin.value = '$' + minPrice;
    minVal.value = minPrice;
    slideMin();
}

function setMaxInput() {
    let maxPrice = parseInt(priceInputMax.value.replace('$', ''));
    if (maxPrice > sliderMaxValue) {
        maxPrice = sliderMaxValue;
    }
    if (maxPrice < parseInt(minVal.value) + minGap) {
        maxPrice = parseInt(minVal.value) + minGap;
    }
    priceInputMax.value = '$' + maxPrice;
    maxVal.value = maxPrice;
    slideMax();
}
