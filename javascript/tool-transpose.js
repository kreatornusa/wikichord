function transposechord() {

    if ($.trim($(&quot;textarea#transposetela&quot;).val()) != &quot;&quot;) {
        var haha = $(&quot;textarea#transposetela&quot;).val();
    }
 
 var str2 = &quot;<pre data-key='C' id='copychord'>&quot;;
 var str3 = &quot;</pre>&quot;;
 
 var res = str2 + haha + str3;

    document.getElementById(&quot;chord&quot;).innerHTML = res;
 $(&quot;pre&quot;).transpose();
}
