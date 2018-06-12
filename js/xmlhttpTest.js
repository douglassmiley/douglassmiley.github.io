var xhr = new XMLHttpRequest();
xhr.onload = function() {
  alert(this.responseXML.title);
}
xhr.open("GET", "http://home.comcast.net/~dsmiley74/douglassmiley.html");
xhr.responseType = "document";
xhr.send();


function HTMLParser(aHTMLString){
  var html = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null),
    body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
  html.documentElement.appendChild(body);
 
  body.appendChild(Components.classes["@mozilla.org/feed-unescapehtml;1"]
    .getService(Components.interfaces.nsIScriptableUnescapeHTML)
    .parseFragment(aHTMLString, false, null, body));
    
      return body;
},

<script type="text/javascript">
var request = XMLHttpRequest();
request.open("GET", "http://home.comcast.net/~dsmiley74/douglassmiley.html", false);
request.send(null);

var doc = document.implementation.createHTMLDocument("example");
doc.documentElement.innerHTML = request.responseText;

doc.body.textContent = "This is inside the body!";

</script>