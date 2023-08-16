$(function(){
$(&#39;button&#39;).click(function(){
var ourText = $(&#39;pre&#39;);
var currFontSize = ourText.css(&#39;fontSize&#39;);
var finalNum = parseFloat(currFontSize, 10);
var stringEnding = currFontSize.slice(-2);
if(this.id == &#39;large&#39;) {
finalNum *= 1.1;
}
else if (this.id == &#39;small&#39;){
finalNum /=1.1;
}
else if (this.id == &#39;reset&#39;){
finalNum =14;
}
ourText.animate({fontSize: finalNum + stringEnding},500);
});
});
