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

        // BASIC CALCULATIONS AND VARIABLES NECCESSARY FOR SMOOTH STATUS SLIDE
        const NUM_OF_VISIBLE_SLIDES = Math.floor(
            STATUS_SLIDES_PARENT_WIDTH / SINGLE_STATUS_SLIDE_WIDTH
        );

        function handleStatusNextButtonClick() {}

        function handleStatusPreviousButtonClick() {}
    }

    handleStatusSliderButtonsClick();
})();
