import $ from "jquery"

const jq = {
    _positionEl: function () {
        var e = $("#header-inner-wrapper"),
            n = $(".sticky", e);
        n.css({
            left: e.offset().left + "px",
            width: e.width() + "px"
        })
    },
}

module.exports = jq