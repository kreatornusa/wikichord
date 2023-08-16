//<![CDATA[
function nocopas(){var e=window.getSelection();pagelink="<p/>Source: "+document.location.href+"</br>",copytext=e+pagelink,newdiv=document.createElement("div"),newdiv.style.position="absolute",newdiv.style.left="-99999px",document.body.appendChild(newdiv),newdiv.innerHTML=copytext,e.selectAllChildren(newdiv),window.setTimeout(function(){document.body.removeChild(newdiv)},100)}document.addEventListener("copy",nocopas);
//]]>
