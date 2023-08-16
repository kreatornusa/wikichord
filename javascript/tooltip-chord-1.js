function imgName(_0x617fx2) {
    if (jQuery(_0x617fx2).next().text() == '/') {
        if (jQuery(_0x617fx2).text().indexOf('aug') != -1) {
            return jQuery(_0x617fx2).text()
        };
        return jQuery(_0x617fx2).text() + '/' + jQuery(_0x617fx2).next().next().text()
    } else {
        if (jQuery(_0x617fx2).prev().text() == '/') {
            if (jQuery(_0x617fx2).prev().prev().text().indexOf('aug') != -1) {
                return jQuery(_0x617fx2).prev().prev().text()
            };
            return jQuery(_0x617fx2).prev().prev().text() + '/' + jQuery(_0x617fx2).text()
        }
    };
    return jQuery(_0x617fx2).text()
}

function changeGuitarChordVariation() {
    jQuery('#spanVariation').html(jtab.Variation);
    jQuery('.jtab').html(jtab.Chord + ':' + jtab.Variation);
    jtab.render(jQuery('.jtab'))
}

function openChordTooltip() {
    if (jQuery('#ddlChord').val() == 'Piano') {
        if (piano.IsValidChord == true) {
            piano.render(piano.Chord.replace(/#/g, 's'))
        }
    } else {
        if (jtab.IsValidChord == true) {
            jtab.render(jQuery('.jtab'));
            jQuery('#btnNext').click(function () {
                if (jtab.Chord.indexOf('/') == -1) {
                    if (jtab.Variation != 10) {
                        jtab.Variation++;
                        changeGuitarChordVariation()
                    }
                }
            });
            jQuery('#btnPrevious').click(function () {
                if (jtab.Variation != 1) {
                    jtab.Variation--;
                    changeGuitarChordVariation()
                }
            })
        }
    }
}
jQuery('pre').transpose();
jQuery('.c').attr('title', '').tooltip({
    position: {
        my: 'center bottom',
        at: 'center top'
    },
    show: {
        duration: 0
    },
    content: function () {
        if (jQuery('#ddlChord').val() == 'Piano') {
            if (piano.Chords[(imgName(this)).replace(/#/g, 's')] == undefined) {
                piano.IsValidChord = false;
                return jQuery('<div>Tidak tersedia</div>')
            } else {
                piano.IsValidChord = true;
                piano.Chord = imgName(this);
                return jQuery("<div><center><div id='divVariation'><b>" + piano.Chord + '</b></div></center></div>' + piano.generatePiano())
            }
        } else {
            if (jtab.Chords[imgName(this)] == undefined) {
                jtab.IsValidChord = false;
                return jQuery('<div>Tidak Tersedia</div>')
            } else {
                jtab.IsValidChord = true;
                jtab.Variation = 1;
                jtab.Chord = imgName(this);
                return jQuery("<div><center><h3>Variasi <span id='spanVariation'>" + jtab.Variation + "</span></h3></center></div><div class='jtab chordonly'>" + jtab.Chord + ':' + jtab.Variation + "</div><div><button id='btnNext'>Selanjutnya</button></div><div id='divPrevious'><button id='btnPrevious'>Sebelumnya</button></div>")
            }
        }
    },
    open: function (_0x617fx5, _0x617fx6) {
        if (typeof (_0x617fx5.originalEvent) === 'undefined') {
            return false
        };
        var _0x617fx7 = jQuery(_0x617fx6.tooltip).attr('id');
        jQuery('div.ui-tooltip').not('#' + _0x617fx7).remove();
        openChordTooltip()
    },
    close: function (_0x617fx5, _0x617fx6) {
        _0x617fx6.tooltip.hover(function () {
            jQuery(this).stop(true).fadeTo(100, 1)
        }, function () {
            jQuery(this).fadeOut('100', function () {
                jQuery(this).remove()
            })
        })
    }
});
jQuery('.on').attr('title', '').tooltip({
    position: {
        my: 'center bottom',
        at: 'center top'
    },
    content: function () {
        var _0x617fx8 = jQuery(this).prev().text() + '/' + jQuery(this).next().text();
        if (jQuery('#ddlChord').val() == 'Piano') {
            if (piano.Chords[(_0x617fx8).replace(/#/g, 's')] == undefined) {
                piano.IsValidChord = false;
                return jQuery('<div>Tidak Tersedia</div>')
            } else {
                piano.IsValidChord = true;
                piano.Chord = _0x617fx8;
                return jQuery("<div><center><div id='divVariation'><b>" + piano.Chord + '</b></div></center></div>' + piano.generatePiano())
            }
        } else {
            if (jtab.Chords[(jQuery(this).prev().text().indexOf('aug') != -1 ? jQuery(this).prev().text() : jQuery(this).prev().text() + '/' + jQuery(this).next().text())] == undefined) {
                jtab.IsValidChord = false;
                return jQuery('<div>Tidak tersedia</div>')
            } else {
                jtab.IsValidChord = true;
                jtab.Variation = 1;
                jtab.Chord = (jQuery(this).prev().text().indexOf('aug') != -1 ? jQuery(this).prev().text() : jQuery(this).prev().text() + '/' + jQuery(this).next().text());
                return jQuery("<div><center><h3>Variasi <span id='spanVariation'>" + jtab.Variation + "</span></h3></center></div><div class='jtab chordonly'>" + jtab.Chord + ':' + jtab.Variation + "</div><div><button id='btnNext'>Selanjutnya</button></div><div id='divPrevious'><button id='btnPrevious'>Sebelumnya</button></div>")
            }
        }
    },
    open: function (_0x617fx5, _0x617fx6) {
        if (typeof (_0x617fx5.originalEvent) === 'undefined') {
            return false
        };
        var _0x617fx7 = jQuery(_0x617fx6.tooltip).attr('id');
        jQuery('div.ui-tooltip').not('#' + _0x617fx7).remove();
        openChordTooltip()
    },
    close: function (_0x617fx5, _0x617fx6) {
        _0x617fx6.tooltip.hover(function () {
            jQuery(this).stop(true).fadeTo(100, 1)
        }, function () {
            jQuery(this).fadeOut('100', function () {
                jQuery(this).remove()
            })
        })
    }
});
jQuery('#btnChordVisibility').click(function () {
    if (jQuery('#btnChordVisibility').text() == 'Sembunyikan Chord') {
        jQuery('#btnChordVisibility').text('Tampilkan Chord');
        jQuery('.c,.on').css('opacity', '0')
    } else {
        jQuery('#btnChordVisibility').text('Sembunyikan Chord');
        jQuery('.c,.on').css('opacity', '1')
    }
});
jQuery('#btnPDF').click(function () {
    var _0x617fx9 = document.createElement('form');
    var _0x617fxa = document.createElement('textarea');
    var _0x617fxb = document.createElement('input');
    var _0x617fxc = jQuery('pre').clone();
    jQuery('span', _0x617fxc).first().text(jQuery('span', _0x617fxc).first().text().replace('Chord ', ''));
    jQuery('span', _0x617fxc).first().after('Key : ' + jQuery('.selected').text());
    jQuery('span', _0x617fxc).first().wrap('<h1></h1>');
    _0x617fx9.method = 'POST';
    _0x617fx9.action = 'https://www.chord.jackyrusly.web.id/pdf/pdf.php';
    _0x617fxa.name = 'HTML';
    _0x617fxa.value = '<pre>' + _0x617fxc.html() + '</pre>';
    _0x617fxb.name = 'Title';
    _0x617fxb.value = jQuery('.entry-title').text();
    _0x617fx9.appendChild(_0x617fxa);
    _0x617fx9.appendChild(_0x617fxb);
    document.body.appendChild(_0x617fx9);
    _0x617fx9.submit();
    _0x617fx9.remove()
});
jQuery('#btnPrint').click(function () {
    var _0x617fxc = jQuery('pre').clone();
    jQuery('span', _0x617fxc).first().after('<br><span>Key : ' + jQuery('.selected').text() + '</span>');
    jQuery('span', _0x617fxc).first().text(jQuery('span', _0x617fxc).first().text().replace('Chord ', '')).css({
        "font-size": '2.5em',
        "font-weight": 'bold'
    });
    var _0x617fxd = window.open();
    _0x617fxd.document.write('<style>.c,.on{ color: #007acc; }</style>');
    _0x617fxd.document.write("<link rel='icon' href='https://www.chord.jackyrusly.web.id/wp-content/uploads/Favicon.png' type='image/x-icon'/>");
    _0x617fxd.document.write("<label style='font-size:2em; font-weight:bold'>JRChord</label>" + '<pre>' + _0x617fxc.html() + '</pre>');
    _0x617fxd.document.title = 'Cetak - JRChord';
    _0x617fxd.document.close();
    _0x617fxd.focus();
    _0x617fxd.print();
    _0x617fxd.close()
});
jQuery('#instrument-info').tooltip();
jQuery('#btnChordVisibility,#btnPDF,#btnPrint').attr('disabled', false);
jQuery('pre span:first').css('font-weight', 'bold');
jQuery('span').filter(function () {
    return jQuery(this).text().indexOf('[') >= 0
}).css('font-weight', 'bold');
jQuery('span').filter(function () {
    return jQuery(this).text().indexOf('[') >= 0
}).css('background', 'none');
jQuery('span').filter(function () {
    return jQuery(this).text().indexOf('[') >= 0
}).css('padding', '0px');
jQuery('span').filter(function () {
    return jQuery(this).text().indexOf('[') >= 0
}).css('margin-bottom:', '5px');
jQuery('span').filter(function () {
    return jQuery(this).text().indexOf('[') >= 0
}).css('border-radius:', '5px')

