var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScript   
= document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(tag, firstScript);   

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('el-video-youtube-soporte', {
    // height: '100%',
    // width: '100%',
    videoId: '8KsIc7TeTP8?si=miICIQC42EaJyaAH',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}