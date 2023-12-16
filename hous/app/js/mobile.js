function mobMenu() {
(function ($) {
    $(document).ready(function () {
        $(".mob-menu, .js-blackout").toggleClass("active");
    });
  })(jQuery)
}

function filterFranc() {
  (function ($) {
    $(document).ready(function () {
        $(".franc, .js-blackout").toggleClass("display-block");
        $(".germ, .js-blackout").toggleClass("display-none");
        $(".angl, .js-blackout").toggleClass("display-none");
    });
  })(jQuery)
}

function filterGerm() {
  (function ($) {
    $(document).ready(function () {
        $(".franc, .js-blackout").toggleClass("display-none");
        $(".germ, .js-blackout").toggleClass("display-block");
        $(".angl, .js-blackout").toggleClass("display-none");
    });
  })(jQuery)
}
function filterAngl() {
  (function ($) {
    $(document).ready(function () {
        $(".franc, .js-blackout").toggleClass("display-none");
        $(".germ, .js-blackout").toggleClass("display-none");
        $(".angl, .js-blackout").toggleClass("display-block");
    });
  })(jQuery)
}
function filterFull() {
  (function ($) {
    $(document).ready(function () {
        $(".franc, .js-blackout").toggleClass("display-block");
        $(".germ, .js-blackout").toggleClass("display-block");
        $(".angl, .js-blackout").toggleClass("display-block");
    });
  })(jQuery)
}
