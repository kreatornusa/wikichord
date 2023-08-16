var match;
var chords =
    ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B','C',
     'Db','D','D#','E','F','Gb','G','G#','A','A#','C'];
var chordRegex = /C#|D#|F#|G#|A#|Db|Eb|Gb|Ab|Bb|C|D|E|F|G|A|B/g;

$('#transposeUp').click(function() {
    $('pre').each(function() {
        var currentChord = $(this).html();
        var output = "";
        var parts = currentChord.split(chordRegex);
        var index = 0;
        while (match = chordRegex.exec(currentChord))
        {
            var chordIndex = chords.indexOf(match[0]);
            output += parts[index++] + chords[chordIndex+1];
        }
        output += parts[index];
        $(this).html(output);
    });
});

$('#transposeDown').click(function() {
    $('pre').each(function() {
        var currentChord = $(this).html();
        var output = "";
        var parts = currentChord.split(chordRegex);
        var index = 0;
        while (match = chordRegex.exec(currentChord))
        {
            var chordIndex = chords.indexOf(match[0],1);
            output += parts[index++] + chords[chordIndex-1];
        }
        output += parts[index];
        $(this).html(output);
    });
});
