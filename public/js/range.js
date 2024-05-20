window.onload = function () {
    slideMin();
    slideMax();
}

const minVals = document.querySelectorAll(".min-val");
const maxVals = document.querySelectorAll(".max-val");
const priceInputsMin = document.querySelectorAll(".min-input");
const priceInputsMax = document.querySelectorAll(".max-input");
const minGap = 0;
const ranges = document.querySelectorAll(".slider-track");

minVals.forEach((minVal, index) => {
    const maxVal = maxVals[index];
    const priceInputMin = priceInputsMin[index];
    const priceInputMax = priceInputsMax[index];
    const range = ranges[index];

    const sliderMinValue = parseInt(minVal.getAttribute('min'));
    const sliderMaxValue = parseInt(maxVal.getAttribute('max'));

    minVal.addEventListener('input', () => slideMin(minVal, maxVal, priceInputMin, range, sliderMinValue, sliderMaxValue));
    maxVal.addEventListener('input', () => slideMax(minVal, maxVal, priceInputMax, range, sliderMinValue, sliderMaxValue));
    priceInputMin.addEventListener('change', () => setMinInput(minVal, maxVal, priceInputMin, range, sliderMinValue, sliderMaxValue));
    priceInputMax.addEventListener('change', () => setMaxInput(minVal, maxVal, priceInputMax, range, sliderMinValue, sliderMaxValue));

    slideMin(minVal, maxVal, priceInputMin, range, sliderMinValue, sliderMaxValue);
    slideMax(minVal, maxVal, priceInputMax, range, sliderMinValue, sliderMaxValue);
});

function slideMin(minVal, maxVal, priceInputMin, range, sliderMinValue, sliderMaxValue) {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    priceInputMin.value = '$' + minVal.value;
    setArea(minVal, maxVal, range, sliderMinValue, sliderMaxValue);
}

function slideMax(minVal, maxVal, priceInputMax, range, sliderMinValue, sliderMaxValue) {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        maxVal.value = parseInt(minVal.value) + minGap;
    }
    priceInputMax.value = '$' + maxVal.value;
    setArea(minVal, maxVal, range, sliderMinValue, sliderMaxValue);
}

function setArea(minVal, maxVal, range, sliderMinValue, sliderMaxValue) {
    let minValue = parseInt(minVal.value);
    let maxValue = parseInt(maxVal.value);
    let rangeWidth = sliderMaxValue - sliderMinValue;
    let leftPercent = ((minValue - sliderMinValue) / rangeWidth) * 100;
    let rightPercent = ((sliderMaxValue - maxValue) / rangeWidth) * 100;

    range.style.left = leftPercent + "%";
    range.style.right = rightPercent + "%";
}

function setMinInput(minVal, maxVal, priceInputMin, range, sliderMinValue, sliderMaxValue) {
    let minPrice = parseInt(priceInputMin.value.replace('$', ''));
    if (minPrice < sliderMinValue) {
        minPrice = sliderMinValue;
    }
    if (minPrice > parseInt(maxVal.value) - minGap) {
        minPrice = parseInt(maxVal.value) - minGap;
    }
    priceInputMin.value = '$' + minPrice;
    minVal.value = minPrice;
    slideMin(minVal, maxVal, priceInputMin, range, sliderMinValue, sliderMaxValue);
}

function setMaxInput(minVal, maxVal, priceInputMax, range, sliderMinValue, sliderMaxValue) {
    let maxPrice = parseInt(priceInputMax.value.replace('$', ''));
    if (maxPrice > sliderMaxValue) {
        maxPrice = sliderMaxValue;
    }
    if (maxPrice < parseInt(minVal.value) + minGap) {
        maxPrice = parseInt(minVal.value) + minGap;
    }
    priceInputMax.value = '$' + maxPrice;
    maxVal.value = maxPrice;
    slideMax(minVal, maxVal, priceInputMax, range, sliderMinValue, sliderMaxValue);
}
