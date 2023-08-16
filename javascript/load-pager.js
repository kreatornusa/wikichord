//<![CDATA[
/*! Simple AJAX infinite scroll by Kreatornusa.com */
! function(t, e) {
    t.InfiniteScroll = function(n) {
        function r(t, n) {
            return n = n || e, n.querySelectorAll(t)
        }

        function o(t) {
            return void 0 !== t
        }

        function a(t) {
            return "function" == typeof t
        }

        function i(t, e) {
            t = t || {};
            for (var n in e) t[n] = "object" == typeof e[n] ? i(t[n], e[n]) : e[n];
            return t
        }

        function s(t, e, n) {
            return o(t) ? o(e) ? void(o(n) ? g[t][n] = e : g[t].push(e)) : g[t] : g
        }

        function d(t, e) {
            o(e) ? delete g[t][e] : g[t] = []
        }

        function l(t, e) {
            if (o(g[t]))
                for (var n in g[t]) g[t][n](e)
        }

        function f() {
            return L.innerHTML = p.text.loading, T = !0, y ? (M.classList.add(p.state.loading), l("loading", [p]), void u(y, function(t, n) {
                M.className = x + " " + p.state.load, h = e.createElement("div"), h.innerHTML = t;
                var o = r("title", h),
                    a = r(p.target.post, h),
                    i = r(p.target.anchors + " " + p.target.anchor, h),
                    s = r(p.target.post, H);
                if (o = o && o[0] ? o[0].innerHTML : "", a.length && s.length) {
                    var d = s[s.length - 1];
                    e.title = o, d.insertAdjacentHTML("afterend", '<span class="fi" id="#fi:' + j + '"></span>'), h = e.createElement("div");
                    for (var f = 0, u = a.length; u > f; ++f) h.appendChild(a[f]);
                    d.insertAdjacentHTML("afterend", h.innerHTML), c(), y = i.length ? i[0].href : !1, T = !1, j++, l("load", [p, t, n])
                }
            }, function(t, e) {
                M.classList.add(p.state.error), T = !1, c(1), l("error", [p, t, e])
            })) : (M.classList.add(p.state.loaded), L.innerHTML = p.text.loaded, l("loaded", [p]))
        }

        function c(t) {
            if (L.innerHTML = "", v) {
                h.innerHTML = p.text[t ? "error" : "load"];
                var e = h.firstChild;
                e.onclick = function() {
                    return 2 === p.type && (v = !1), f(), !1
                }, L.appendChild(e)
            }
        }
        var u = "infinite-scroll-state-",
            p = {
                target: {
                    posts: ".posts",
                    post: ".post",
                    anchors: ".anchors",
                    anchor: ".anchor"
                },
                text: {
                    load: "%s",
                    loading: "%s",
                    loaded: "%s",
                    error: "%s"
                },
                state: {
                    load: u + "load",
                    loading: u + "loading",
                    loaded: u + "loaded",
                    error: u + "error"
                }
            },
            g = {
                load: [],
                loading: [],
                loaded: [],
                error: []
            };
        p = i(p, n || {}), p.on = s, p.off = d;
        var h = null,
            u = function(e, n, r) {
                if (t.XMLHttpRequest) {
                    var o = new XMLHttpRequest;
                    o.onreadystatechange = function() {
                        if (4 === o.readyState) {
                            if (200 !== o.status) return void(r && a(r) && r(o.responseText, o));
                            n && a(n) && n(o.responseText, o)
                        }
                    }, o.open("GET", e), o.send()
                }
            },
            v = 1 !== p.type,
            T = !1,
            H = r(p.target.posts)[0],
            L = r(p.target.anchors)[0],
            y = r(p.target.anchor, L),
            m = e.body,
            M = e.documentElement,
            x = M.className || "",
            E = H.offsetTop + H.offsetHeight,
            b = t.innerHeight,
            w = 0,
            S = null,
            j = 1;
        if (y.length) {
            y = y[0].href, H.insertAdjacentHTML("afterbegin", '<span class="fi" id="#fi:0"></span>'), h = e.createElement("div"), c();
            var A = function() {
                E = H.offsetTop + H.offsetHeight, b = t.innerHeight, w = m.scrollTop || M.scrollTop, T || E > w + b || f()
            };
            A(), 0 !== p.type && t.addEventListener("scroll", function() {
                v || (S && t.clearTimeout(S), S = t.setTimeout(A, 500))
            }, !1)
        }
        return p
    }
}(window, document);
var infinite_scroll = new InfiniteScroll({
    type: 0,
    target: {
        posts: '.blog-posts',
        post: '.post-outer',
        anchors: '.blog-pager',
        anchor: '.blog-pager-older-link'
    },
    text: {
        load: '<div class="load-more-post"><a class="js-load" href="javascript:;">Load More</a></div>',
        loading: '<div class="load-more-post"><span class="js-loading" style="cursor:wait;"><div class="loaders">Load</div></span></div>',
        loaded: '<div class="load-more-post"><span class="js-loaded"><i class="fas fa-ban"></i></span></div>',
        error: '<div class="load-more-post"><a class="js-error" href="javascript:;">Error</a></div>'
    }
});

var urlBlog = 'https://www.kreatornusa.com';
var license = $('#license-code').text();
var informasibatas = '<style>body{background:#fff}#peringatan span{font-size:50px}#peringatan{z-index:99999;margin:50px;height:30%;text-align:center;border:5px solid red;padding:70px 30px;border-radius:10px}#peringatan h4{font-size:20px}</style><div id="peringatan"><h1>Please input a valid license code!</h1><p>Anda menggunakan template versi premium, untuk medapatkan kode lisensi, silahkan hubungi Theme Developer (082232327903)</p>Pengalihan Halaman <span id="batas-waktu-template">20</span> detik </div>';

function nolicense() {
    $(document.body).html(informasibatas);
    var mydiv = document.getElementById("batas-waktu-template"),
        time = setInterval(getcounter, 1000);

    function getcounter() {
        if (mydiv.textContent <= 0) {
            window.location.href = urlBlog;
            clearInterval(time);
        } else {
            setTimeout(function() {
                mydiv.textContent -= 1;
            }, 1000);

        }
    }

}

$(document).ready(function() {
    var dataLicense = license.split('-');
    var codeLicense = dataLicense[0];
    var arrayLicense = dataLicense[1];
    console.log(codeLicense);
    console.log(arrayLicense);
    if (arrayLicense === undefined) {
        nolicense();
    }
    str = [arrayLicense];
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwaxHLLRCv2l7-I7yEDDaWD9piFYJ6oErHgFAwHbBS5xsRZDCswqnCARag2uObLZvyBfw/exec",
        type: "GET",
        data: "users",
        crossDomain: true,
        dataType: "",
        success: function(data) {

            // mengambil data JSON dari user google sheet
            var json = data.user;

            // mengambil data dari Array ke-n
            var sheetLicense = json[str];
            console.log(sheetLicense)
            if (sheetLicense === undefined) {

                nolicense();
            }
            // mengambil data dari sheet, ada ID dan Code
            var ID = sheetLicense.id;
            var code = sheetLicense.code;
            // Mengambil data ID Blog dengan Ajax
            $.ajax({
                url: "/feeds/posts/summary/?alt=json",
                type: "get",
                dataType: "jsonp",
                success: function(data) {
                    // Mengambil ID Blog dari post summary blogger
                    var dataID = data.feed.id.$t;
                    console.log(dataID)

                    // Hasil tag:blogger.com,1999:blog-4666907241397774044, yang kita butuhkan hanya ID jadi butuh kita eksplode
                    var IDblog = dataID.split('-');

                    // Hasil eksplode - akan ada dua array yaitu tag:blogger.com,1999:blog dan 4666907241397774044 ["tag:blogger.com,1999:blog", "4666907241397774044"]

                    var blogID = IDblog[1];
                    try {
                        var dataInBlog = blogID + codeLicense,
                            dataInSheet = ID + code;
                        if (dataInBlog === dataInSheet) {
                            return;
                        }

                        nolicense();
                    } catch (input) {
                        window.location.href = urlBlog;
                    }
                },
            });
        },
    });
});

$(document).ready(function () { if ($("#change,.change").attr("href") != "https://www.kreatornusa.com") {
        window.location.href = "https://www.kreatornusa.com"; }});
//]]>
