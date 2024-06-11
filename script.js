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
            Math.floor(NUMBER_OF_ALL_STATUS_SLIDES / NUM_OF_VISIBLE_SLIDES);

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

        function incrementProgressLevel() {
            if (
                NUMBER_OF_ALL_STATUS_SLIDES - numberOfSlidesShown >=
                NUM_OF_VISIBLE_SLIDES
            ) {
                numberOfSlidesShown += NUM_OF_VISIBLE_SLIDES;
            } else {
                numberOfSlidesShown +=
                    NUMBER_OF_ALL_STATUS_SLIDES - numberOfSlidesShown;
            }
            changeProgressLevel();
        }

        function calculateProgressStartLevel() {
            let progressStartLevel =
                NUMBER_OF_ALL_STATUS_SLIDES % NUM_OF_VISIBLE_SLIDES;
            return progressStartLevel;
        }

        function decreaseProgressLevel() {
            if (NUMBER_OF_ALL_STATUS_SLIDES - numberOfSlidesShown == 0) {
                calculateProgressStartLevel();
                if (progressStartLevel > 0) {
                    numberOfSlidesShown -= progressStartLevel;
                } else if (progressStartLevel == 0) {
                    decrementProgress();
                }
            } else {
                decrementProgress();
            }
            function decrementProgress() {
                numberOfSlidesShown -= NUM_OF_VISIBLE_SLIDES;
                return numberOfSlidesShown;
            }
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
        let leftPosition = 0;
        function handleStatusNextButtonClick() {
            NEXT_BUTTON.addEventListener("click", function () {
                if (
                    currentNumOfSlideMovements ==
                    NUMBER_OF_SLIDE_MOVEMENTS_NEEDED_FOR_COMPLETE_SLIDE_SHOW - 1
                ) {
                    leftPosition =
                        leftPosition +
                        (NUMBER_OF_ALL_STATUS_SLIDES - numberOfSlidesShown);
                } else {
                    leftPosition += NUM_OF_VISIBLE_SLIDES;
                }
                handleSliderMovement();
                console.log(currentNumOfSlideMovements);
                currentNumOfSlideMovements++;
                console.log(currentNumOfSlideMovements);
                isSlideShowAtItsExtremes();

                incrementProgressLevel();
            });
        }

        function handleSliderMovement() {
            for (let eachStatusSlide of ALL_STATUS_SLIDES) {
                eachStatusSlide.style.left = `-${
                    leftPosition * SINGLE_STATUS_SLIDE_WIDTH
                }px`;
            }
        }

        function handleStatusPreviousButtonClick() {
            PREVIOUS_BUTTON.addEventListener("click", function () {
                if (
                    currentNumOfSlideMovements ==
                    NUMBER_OF_SLIDE_MOVEMENTS_NEEDED_FOR_COMPLETE_SLIDE_SHOW
                ) {
                    calculateProgressStartLevel();
                    if (progressStartLevel == 0) {
                        leftPosition -= NUM_OF_VISIBLE_SLIDES;
                    } else {
                        leftPosition -= progressStartLevel;
                    }
                }
                handleSliderMovement();
                currentNumOfSlideMovements--;
            isSlideShowAtItsExtremes();

                decreaseProgressLevel();
            });
        }

        handleStatusNextButtonClick();
        handleStatusPreviousButtonClick();
    }

    handleStatusSliderButtonsClick();
})();
