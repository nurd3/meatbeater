// code for cookies (stolen from w3schools.org)
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + "path=/";
}function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


document.body.innerHTML = `<p id="ball">Click anywhere to toggle sound</p><h2 id="suck">You've beaten your meat 0 times.</h2><bg ico="${Math.round(Math.random() * 3) + 1}" id="nutt" hover="false"></bg><div id="butt"></div>`;
var butt = document.getElementById("butt");
var nutt = document.getElementById("nutt");
var suck = document.getElementById("suck");
var slaps = getCookie("slaps");
var music = new Audio();
music.src = "metanome.mp3";
music.loop = true;
var sound = false;
if (slaps != "") suck.innerText = `You've beaten your meat ${slaps} times.`;
var auds = [];
for (var x = 0; x < 10; x++) {
	var aud = new Audio();
	aud.src = "slap.mp3";
	aud.preload = 'auto';
	auds.push(aud);
}
butt.onmouseover = () => {
	++slaps;
	if (sound) {
		var a = slaps % auds.length;
		auds[a].currentTime = 0.1;
		auds[a].play();
	}
	nutt.setAttribute("hover", "true");
	suck.innerText = `You've beaten your meat ${slaps} times.`;
	setCookie("slaps", slaps);
};
butt.onmouseout = () => {
	nutt.setAttribute("hover", "false");
};
document.onclick = () => {
	sound = !sound;
	music.play();
	if (sound)
		music.volume = 0.5;
	else
		music.volume = 0;
};