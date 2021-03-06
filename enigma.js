function myFunction() {
    var e = document.getElementById("expand"),
        t = document.getElementById("more"),
        l = document.getElementById("myBtn");
    "none" === e.style.display ? (e.style.display = "inline", l.innerHTML = "<i class='fas fa-angle-down'></i>", t.style.display = "none") : (e.style.display = "none", l.innerHTML = "<i class='fas fa-angle-up'></i>", t.style.display = "inline")
}
$(document).ready(function() {
        $("#dataTable").DataTable()
    }), $(document).ready(function() {
        oTable = jQuery("#dataTable").dataTable({
            language: {
                paginate: {
                    next: "&#8594;",
                    previous: "&#8592;"
                }
            },
            bDestroy: !0,
            bAutoWidth: !0,
            bFilter: !0,
            bSort: !0,
            aaSorting: [
                [0]
            ],
            aoColumns: [{
                bSortable: !0
            }, {
                bSortable: !1
            }]
        })
    }),
    function(e) {
        "use strict";
        e("#sidebarToggle, #sidebarToggleTop").on("click", function(t) {
            e("body").toggleClass("sidebar-toggled"), e(".sidebar").toggleClass("toggled"), e(".sidebar").hasClass("toggled") && e(".sidebar .collapse").collapse("hide")
        }), e(window).resize(function() {
            e(window).width() < 768 && e(".sidebar .collapse").collapse("hide")
        }), e("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(t) {
            if (768 < e(window).width()) {
                var l = t.originalEvent,
                    a = l.wheelDelta || -l.detail;
                this.scrollTop += 30 * (a < 0 ? 1 : -1), t.preventDefault()
            }
        }), e(document).on("scroll", function() {
            100 < e(this).scrollTop() ? e(".scroll-to-top").fadeIn() : e(".scroll-to-top").fadeOut()
        }), e(document).on("click", "a.scroll-to-top", function(t) {
            var l = e(this);
            e("html, body").stop().animate({
                scrollTop: e(l.attr("href")).offset().top
            }, 1e3, "easeInOutExpo"), t.preventDefault()
        })
    }(jQuery);
var allOSB = [],
    mxh = "";

function updateReadMore() {
    if (allOSB.length > 0)
        for (var e = 0; e < allOSB.length; e++) allOSB[e].scrollHeight > mxh ? (allOSB[e].hasAttribute("style") && updateHeight(allOSB[e]), allOSB[e].nextElementSibling.className = "read-more tengah infogan") : allOSB[e].nextElementSibling.className = "read-more hid bg-ilang"
}

function revealThis(e) {
    var t = e.previousElementSibling;
    t.hasAttribute("style") ? (e.innerHTML = "Show More <i class='fas fa-angle-down'></i>", t.removeAttribute("style")) : (updateHeight(t), e.innerHTML = "Show Less <i class='fas fa-angle-up'></i>")
}

function updateHeight(e) {
    e.style.maxHeight = e.scrollHeight + "px"
}

function insertAfter(e, t) {
    e.parentNode.insertBefore(t, e.nextSibling)
}
window.onload = function() {
    if ((allOSB = document.getElementsByClassName("only-so-big")).length > 0) {
        mxh = window.getComputedStyle(allOSB[0]).getPropertyValue("max-height"), mxh = parseInt(mxh.replace("px", ""));
        for (var e = 0; e < allOSB.length; e++) {
            var t = document.createElement("span");
            t.innerHTML = "Show More <i class='fas fa-angle-down'></i", t.setAttribute("type", "span"), t.setAttribute("class", "read-more hid"), insertAfter(allOSB[e], t)
        }
    }
    var l = document.getElementsByClassName("read-more");
    for (e = 0; e < l.length; e++) l[e].addEventListener("click", function() {
        revealThis(this)
    }, !1);
    updateReadMore()
}, window.onresize = function() {
    updateReadMore()
};
