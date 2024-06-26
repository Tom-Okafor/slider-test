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

        // function calculateProgressStartLevel() {
        //     let progressStartLevel =
        //         NUMBER_OF_ALL_STATUS_SLIDES % NUM_OF_VISIBLE_SLIDES;
        //     return progressStartLevel;
        // }

        function decreaseProgressLevel() {
            if (NUMBER_OF_ALL_STATUS_SLIDES - numberOfSlidesShown == 0) {
                let progressStartLevel =
                    NUMBER_OF_ALL_STATUS_SLIDES % NUM_OF_VISIBLE_SLIDES;
                if (progressStartLevel > 0) {
                    console.log("progressStartLevel is: " + progressStartLevel);
                    numberOfSlidesShown -= progressStartLevel;
                } else {
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
                PREVIOUS_BUTTON.style.opacity = "0";
                setTimeout(() => {
                    PREVIOUS_BUTTON.style.display = "none";
                }, 500);
            } else {
                PREVIOUS_BUTTON.style.opacity = "1";
                setTimeout(() => {
                    PREVIOUS_BUTTON.style.display = "flex";
                }, 500);
            }
            if (
                currentNumOfSlideMovements ==
                NUMBER_OF_SLIDE_MOVEMENTS_NEEDED_FOR_COMPLETE_SLIDE_SHOW
            ) {
                NEXT_BUTTON.style.opacity = "0";
                setTimeout(() => {
                    NEXT_BUTTON.style.display = "none";
                }, 500);
            } else {
                NEXT_BUTTON.style.opacity = "1";
                setTimeout(() => {
                    NEXT_BUTTON.style.display = "flex";
                }, 500);
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
                    let progressStartLevel =
                        NUMBER_OF_ALL_STATUS_SLIDES % NUM_OF_VISIBLE_SLIDES;
                    if (progressStartLevel == 0) {
                        leftPosition -= NUM_OF_VISIBLE_SLIDES;
                    } else {
                        leftPosition -= progressStartLevel;
                    }
                } else {
                    leftPosition -= NUM_OF_VISIBLE_SLIDES;
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

    function generateRandomNumber(min, max) {
        const NUMBER_OF_VALUES_OBTAINABLE = max - min + 1;
        const RANDOM_NUMBER = Math.floor(
            NUMBER_OF_VALUES_OBTAINABLE * Math.random()
        );
        const RANDOM_NUMBER_WITHIN_RANGE = RANDOM_NUMBER + min;
        return RANDOM_NUMBER_WITHIN_RANGE;
    }

    function shuffleUsersWithOnlineStatus() {
        const GET_INACTIVE_ONLINE_CIRCLE = document.querySelectorAll(".active");
        console.log(GET_INACTIVE_ONLINE_CIRCLE[2]);
        for (let t = 0; t < generateRandomNumber(2, 5); t++) {
            GET_INACTIVE_ONLINE_CIRCLE[
                generateRandomNumber(0, GET_INACTIVE_ONLINE_CIRCLE.length - 1)
            ].classList.toggle("online");
        }
    }

    shuffleUsersWithOnlineStatus();

    function shuffleUnreadAndReadMessges() {
        const GET_MESSAGE_HOLDER = document.querySelectorAll(
            ".display-message-details"
        );

        function shuffleUnreadMessages() {
            for (let t = 0; t < generateRandomNumber(3, 4); t++) {
                GET_MESSAGE_HOLDER[
                    generateRandomNumber(0, GET_MESSAGE_HOLDER.length - 1)
                ].classList.add("unread");
            }
        }
        function shuffleReadMessages() {
            for (let eachMessageHolder of GET_MESSAGE_HOLDER) {
                if (eachMessageHolder.classList.contains("unread")) {
                    continue;
                } else {
                    eachMessageHolder.classList.add("read");
                }
            }
        }
        shuffleUnreadMessages();
        shuffleReadMessages();
    }
    shuffleUnreadAndReadMessges();
})();
