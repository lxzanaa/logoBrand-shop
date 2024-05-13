class Carousel {
    constructor(container, items, previousControl, nextControl) {
        this.carouselContainer = container;
        this.carouselArray = Array.from(items);
        this.carouselControlsPrevious = previousControl;
        this.carouselControlsNext = nextControl;
        this.currentIndex = 0;
        this.updateGallery();
        this.setupControls();
    }

    updateGallery() {
        this.carouselArray.forEach((el, i) => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3');
            el.classList.add(`gallery-item-${(i - this.currentIndex + 3) % 3 + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction === 'previous') {
            this.currentIndex = (this.currentIndex - 1 + this.carouselArray.length) % this.carouselArray.length;
        } else {
            this.currentIndex = (this.currentIndex + 1) % this.carouselArray.length;
        }
        this.updateGallery();
    }

    setupControls() {
        this.carouselControlsPrevious.addEventListener('click', () => {
            this.setCurrentState('previous');
        });

        this.carouselControlsNext.addEventListener('click', () => {
            this.setCurrentState('next');
        });
    }
}

const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryControlsPrevious = document.querySelector('.gallery-controls-previous');
const galleryControlsNext = document.querySelector('.gallery-controls-next');

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControlsPrevious, galleryControlsNext);