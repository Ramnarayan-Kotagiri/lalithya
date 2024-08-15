!function() {
    "use strict";
    !function() {
        var t = document.getElementsByTagName("html")[0]
          , e = (document.getElementsByTagName("head")[0],
        "ontouchstart"in window)
          , n = navigator.userAgent.toLowerCase()
          , i = e && !n.match(/windows/)
          , o = !i
          , d = n.match(/windows/) && n.match(/edge/)
          , a = n.match(/msie/) || n.match(/trident/)
          , s = n.indexOf("ipad") >= 0 || n.indexOf("macintosh") >= 0 && e
          , c = n.match(/iphone/)
          , r = n.match(/ipod/)
          , m = c || r || s
          , l = n.match(/windows/)
          , h = n.match(/macintosh/)
          , w = n.match(/android/)
          , u = n.match(/chrome/)
          , f = n.match(/safari/) && !n.match(/chrome/)
          , v = n.match(/firefox/)
          , y = u && n.match(/ cros /)
          , L = w && n.match(/mobile/)
          , p = c || r || L
          , E = w && !L || s
          , g = o && u;
        if (a || d)
            alert("Your browser is not supported.");
        else {
            window.HEAD_TIMESTAMP = Date.now(),
            t.classList.add("device-" + (i ? "touch" : "desktop")),
            t.classList.add("html-" + (s ? "ipad" : "notipad")),
            t.classList.add("font-weight-" + (h ? "thin" : "normal")),
            t.classList.add("mode-" + (p ? "sp" : "pc")),
            f && t.classList.add("browser-safari"),
            v && t.classList.add("browser-firefox"),
            h && t.classList.add("os-mac"),
            l && t.classList.add("os-win"),
            y && t.classList.add("os-chrome"),
            g && t.classList.add("no3DAccel"),
            w && t.classList.add("os-android");
            var x, b, A, H, I, T, _, M, S = (location.href.split("?")[1] || "").split("&");
            S.indexOf("ie") >= 0 && t.classList.add("query-ie"),
            S.indexOf("naked") >= 0 && t.classList.add("query-naked"),
            S.indexOf("preview") >= 0 && t.classList.add("query-preview"),
            history.scrollRestoration = "manual",
            !function() {
                if (i) {
                    var t = document.querySelector('meta[name="viewport"]')
                      , e = t.getAttribute("content");
                    O(),
                    window.addEventListener("orientationchange", (function() {
                        n()
                    }
                    )),
                    n()
                }
                function n() {
                    if (t) {
                        var n = 0
                          , i = O()
                          , o = Math[i ? "max" : "min"](window.outerWidth, window.outerHeight);
                        o < 1280 && (E || (p || i) && o < 375 && (n = 375));
                        var d = e;
                        n > 0 && (d = "width=" + n),
                        t.setAttribute("content", d)
                    }
                }
            }(),
            b = document.scrollingElement || document.documentElement,
            A = !0,
            H = 0,
            I = 0,
            T = 0,
            _ = !1,
            M = function() {
                var e = window.innerWidth
                  , n = window.innerHeight
                  , i = b.scrollTop
                  , o = i > 5;
                _ !== o && (_ = o,
                o ? t.classList.add("html_bitScrolled") : t.classList.remove("html_bitScrolled")),
                (H !== e || A || 0 === i) && (document.documentElement.style.setProperty("--vh", .01 * n + "px"),
                T = 0);
                var d = Math.max(T, n);
                if (x) {
                    var a = x.offsetHeight;
                    m && 0 === i && n === a && (a += 110),
                    d = Math.max(d, a)
                }
                (T !== d || A) && (T = d,
                document.documentElement.style.setProperty("--vh-max", .01 * T + "px")),
                (I !== n || A) && document.documentElement.style.setProperty("--vh-variable", .01 * n + "px"),
                H = e,
                I = n,
                A = !1
            }
            ,
            window.addEventListener("scroll", M),
            window.addEventListener("resize", M),
            window.addEventListener("orientationchange", (function() {
                A = !0,
                setTimeout(M, 33)
            }
            )),
            setInterval(M, 1e3),
            M(),
            window.INIT_VH = function() {
                (x = document.getElementById("headVH")).style.position = "fixed",
                x.style.left = "0",
                x.style.top = "0",
                x.style.width = "0",
                x.style.height = "100vh",
                M()
            }
            ,
            function(t) {
                if ("loading" != document.readyState)
                    return t();
                document.addEventListener("DOMContentLoaded", t)
            }((function() {
                t.classList.add("html_domReady"),
                setTimeout((function() {
                    t.classList.add("html_domReady2")
                }
                ), 300)
            }
            )),
            function() {
                var t = {
                    x: 1440,
                    y: 850
                }
                  , e = {
                    x: 390,
                    y: 664
                }
                  , n = 1;
                function i() {
                    var i = window.innerWidth
                      , o = window.innerHeight
                      , d = O()
                      , a = d ? t : e
                      , s = 1;
                    s = d ? 1 + ((s = o / a.y) - 1) * (s < 1 ? .6 : .5) : 1 + ((s = Math.min(i / a.x, o / a.y)) - 1) * (s < 1 ? 1 : .5),
                    n !== s && (n = s,
                    document.documentElement.style.setProperty("--scale", s + "px"),
                    window.VIEW_SCALE = s)
                }
                window.VIEW_SCALE = 1,
                window.addEventListener("resize", i),
                i(),
                setInterval(i, 1e3)
            }()
        }
        function O() {
            return window.innerWidth >= window.innerHeight
        }
    }()
}();
