(function () {
    function handleStatusSliderButtonsClick() {
        /* define Variables Related To The Status Slide */
        const STATUS_SLIDES_PARENT = document.querySelector(".status-slide");

        const SINGLE_STATUS_SLIDE = document.querySelector(".status");

        const ALL_STATUS_SLIDES = document.querySelectorAll(".status");

        const STATUS_SLIDES_PARENT_WIDTH = STATUS_SLIDES_PARENT.clientWidth;

        const SINGLE_STATUS_SLIDE_WIDTH = SINGLE_STATUS_SLIDE.clientWidth;

        const NUMBER_OF_ALL_STATUS_SLIDES = ALL_STATUS_SLIDES.length;

        const STATUS_SLIDE_PROGRESS_CONTAINER =
            document.querySelector(".progress");

        const PROGRESS_LEVEL = document.querySelector(".progress-level");

        const NEXT_BUTTON = document.querySelector(".next");

        const PREVIOUS_BUTTON = document.querySelector(".previous");

        // BASIC CALCULATIONS AND VARIABLES NECCESSARY FOR SMOOTH STATUS SLIDE
        const NUM_OF_VISIBLE_SLIDES = Math.floor(
            STATUS_SLIDES_PARENT_WIDTH / SINGLE_STATUS_SLIDE_WIDTH
        );

        const NUMBER_OF_SLIDE_MOVEMENTS_NEEDED_FOR_COMPLETE_SLIDE_SHOW =
            Math.ceil(NUMBER_OF_ALL_STATUS_SLIDES / NUM_OF_VISIBLE_SLIDES);

        let currentNumOfSlideMovements = 0;

        let numberOfSlidesShown = NUM_OF_VISIBLE_SLIDES;

        // handle progress level growth as status slide movement progresses
        function calculateProgressLevel() {
            let progressLevel = Math.round(
                (numberOfSlidesShown / NUMBER_OF_ALL_STATUS_SLIDES) * 100
            );
            return progressLevel;
        }

        function changeProgressLevel() {
            PROGRESS_LEVEL.style.width = `${calculateProgressLevel()}%`;
        }
        changeProgressLevel();

        function assignNewProgressLevel() {
            numberOfSlidesShown += NUM_OF_VISIBLE_SLIDES;
            changeProgressLevel();
        }

        // check to see if the slide show is at its end or beginning and remove buttons where necessary

        function isSlideShowAtItsExtremes() {
            if (currentNumOfSlideMovements == 0) {
                PREVIOUS_BUTTON.style.display = "none";
            } else {
                PREVIOUS_BUTTON.style.display = "block";
            }
            if (
                currentNumOfSlideMovements ==
                NUMBER_OF_SLIDE_MOVEMENTS_NEEDED_FOR_COMPLETE_SLIDE_SHOW
            ) {
                NEXT_BUTTON.style.display = "none";
            } else {
                NEXT_BUTTON.style.display = "block";
            }
        }
        isSlideShowAtItsExtremes();

        function handleStatusNextButtonClick() {}

        function handleStatusPreviousButtonClick() {}
    }

    handleStatusSliderButtonsClick();
})();
