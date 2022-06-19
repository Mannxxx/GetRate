var url = window.location.href;
url = url.slice(41 + (url[4] == 's' ? 1 : 0), url.length);

var arr = url.split(/[\/\?]/);


var requestURL = 'https://codeforces.com/api/contest.standings?contestId=' + arr[0] + '&from=1&count=1';
var xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = 'json';
xhr.send();
var rating = null;

function isRus(){
  var c = document.cookie.split('; ');
  for(var ii = 0; ii < c.length; ii++){
    var i = c[ii];
    if(i == "nocturne.language=ru") return true;
  }
  return false;
}

xhr.onload = function() {
  var content = xhr.response['result']['problems'];
  for (var i = 0; i < content.length; i++) {
    if(content[i]['index'] == arr[1]){
      rating = content[i]['rating'];
      break;
    }
  }
  if(rating != null){
  document.getElementById('sidebar').innerHTML += `<div class="roundbox sidebox" style="">
            <div class="roundbox-lt">&nbsp;</div>
            <div class="roundbox-rt">&nbsp;</div>
        <div class="caption titled">→ ` + (isRus() ? "Рейтинг задачи" : "Problem rate") + `
            <div class="top-links">
            </div>
        </div>

<div>
    <div style="margin:1em;font-size:0.8em;">

    <div class="roundbox " style="margin:2px; padding:0 3px 2px 3px; background-color:#f0f0f0; width: 4rem">
            <div class="roundbox-lt">&nbsp;</div>
            <div class="roundbox-rt">&nbsp;</div>
            <div class="roundbox-lb">&nbsp;</div>
            <div class="roundbox-rb">&nbsp;</div>
    <span class="tag-box" style="font-size:1.2rem;" title="Сложность">
    *`+ rating + `
    </span>
    </div>
    </div>


</div>
    </div>`;
  }
}
