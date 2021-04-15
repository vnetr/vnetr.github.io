var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",

    videoId: "Jh5oX0VRnzk",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {
  if (event.data === 2) {
    $("#play").show();
  } else if (event.data === 1) {
    $("#pause").show();
  }
}

function loadVideo(videoID) {
  player.loadVideoById(videoID);
}

function onPlayerReady(event) {
  event.target.pauseVideo();

  var sn1 = document.getElementById("seekto");
  sn1.addEventListener("click", function () {
    player.seekTo(document.getElementById("seektosec").value, true);
  });
}

function playVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}
