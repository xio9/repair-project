function init1() {
    for (var e = document.getElementsByTagName("img"), a = 0; a < e.length; a++) e[a].getAttribute("data-src") && e[a].setAttribute("src", e[a].getAttribute("data-src"))
}
var player;

function videoPlay(e) {
    e.target.playVideo()
}

function loadScript(e, a) {
    var t = document.createElement("script");
    t.readyState ? t.onreadystatechange = function() {
        "loaded" != t.readyState && "complete" != t.readyState || (t.onreadystatechange = null, a())
    } : t.onload = function() {
        a()
    }, t.src = e, document.getElementsByTagName("head")[0].appendChild(t)
}
$(document).ready(function() {
    var e = $(".modal"),
        a = $("[data-toggle=modal]"),
        t = $(".modal__close");
    modalThanks = $(".modal__thanks"), modalThanksDialog = $(".modal__thanks__dialog"), closeBtnThanks = $(".modal__thanks__close"), a.on("click", function() {
        e.toggleClass("modal--visible")
    }), t.on("click", function() {
        e.toggleClass("modal--visible")
    });
    new Swiper(".swiper-container", {
        loop: !0,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    var l = $(".swiper-button-next"),
        o = $(".swiper-button-prev"),
        n = $(".swiper-pagination");
    l.css("left", o.width() + 10 + n.width() + 10), n.css("left", o.width() + 10), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: function(e) {},
        scrollContainer: null,
        resetAnimation: !0
    }).init(), $(".modal__form").validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: !0,
                minlength: 2
            },
            userPhone: {
                required: !0,
                minlength: 10
            },
            policyCheckbox: "required",
            userEmail: {
                required: !0,
                email: !0
            }
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя должно быть не короче двух букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Введите правильный телефон"
            },
            policyCheckbox: "Поле обязательно для заполнения",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате: name@domain.com"
            }
        },
        submitHandler: function(a) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(a).serialize(),
                success: function(t) {
                    $(a)[0].reset(), e.toggleClass("modal--visible"), modalThanks.toggleClass("modal__thanks--visible"), e.removeClass("modal__thanks--visible"), $(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")
                }
            })
        }
    }), closeBtnThanks.on("click", function() {
        modalThanks.toggleClass("modal__thanks--visible")
    }), modalThanks.on("click", function(e) {
        modalThanksDialog.is(e.target) || 0 !== modalThanksDialog.has(e.target).length || modalThanks.toggleClass("modal__thanks--visible")
    }), $(".footer__form").validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: !0,
                minlength: 2
            },
            userPhone: {
                required: !0,
                minlength: 10
            },
            userQuestion: "required",
            questionCheckbox: "required"
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя должно быть не короче двух букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Введите правильный телефон"
            },
            userQuestion: "Поле обязательно для заполнения",
            questionCheckbox: "Поле обязательно для заполнения"
        },
        submitHandler: function(a) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(a).serialize(),
                success: function(t) {
                    $(a)[0].reset(), modalThanks.toggleClass("modal__thanks--visible"), e.removeClass("modal__thanks--visible"), $(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")
                }
            })
        }
    }), closeBtnThanks.on("click", function() {
        modalThanks.toggleClass("modal__thanks--visible")
    }), modalThanks.on("click", function(e) {
        modalThanksDialog.is(e.target) || 0 !== modalThanksDialog.has(e.target).length || modalThanks.toggleClass("modal__thanks--visible")
    }), $(".control__form").validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: !0,
                minlength: 2
            },
            userPhone: {
                required: !0,
                minlength: 10
            },
            policyCheckbox: "required",
            userEmail: {
                required: !0,
                email: !0
            }
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя должно быть не короче двух букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Введите правильный телефон"
            },
            policyCheckbox: "Поле обязательно для заполнения",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате: name@domain.com"
            }
        },
        submitHandler: function(a) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(a).serialize(),
                success: function(t) {
                    $(a)[0].reset(), modalThanks.toggleClass("modal__thanks--visible"), e.removeClass("modal__thanks--visible"), $(".modal__thanks-title").text("Спасибо! Ваша заявка принята. Наш менеджер свяжется с Вами в ближайшее время.")
                }
            })
        }
    }), closeBtnThanks.on("click", function() {
        modalThanks.toggleClass("modal__thanks--visible")
    }), modalThanks.on("click", function(e) {
        modalThanksDialog.is(e.target) || 0 !== modalThanksDialog.has(e.target).length || modalThanks.toggleClass("modal__thanks--visible")
    }), $("[type=tel]").mask("+7(000) 000-00-00", {
        placeholder: "Ваш номер телефона:"
    })
}), window.onload = init1, 
$(window).scroll(function() {
    $(this).scrollTop() > 1400 ? $(".pageup").fadeIn() : $(".pageup").fadeOut()
}), $("#up").on("click", function(e) {
    e.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, "300")
}), $(".video__play").on("click", function() {
    player = new YT.Player("player", {
        height: "465",
        width: "100%",
        videoId: "OmZzTuSFlkU",
        events: {
            onReady: videoPlay
        }
    })
}), $(document).ready(function() {
    $(".scroll").click(function() {
        var e = $(this).attr("href");
        return 0 != $(e).length && $("html, body").animate({
            scrollTop: $(e).offset().top
        }, 700), !1
    })
});
var loadMap = !1;

function initMap() {
    var e = new ymaps.Map("map", {
            center: [55.691866, 37.348707],
            zoom: 9
        }, {
            autoFitToViewport: "always"
        }),
        a = (ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'), new ymaps.Placemark(e.getCenter(), {
            hintContent: "Наш офис",
            balloonContent: "Вход со двора"
        }, {
            iconLayout: "default#image",
            iconImageHref: "img/location.jpeg",
            iconImageSize: [32, 32],
            iconImageOffset: [-5, -38]
        }));
    e.controls.remove("trafficControl"), e.controls.remove("TypeSelector"), e.behaviors.disable("scrollZoom"), e.geoObjects.add(a)
}
$(window).scroll(function() {
    $(this).scrollTop() > 1e3 && !loadMap && (loadMap = !0, loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function() {
        ymaps.load(initMap)
    }))
}), $(function() {
    ymap()
});