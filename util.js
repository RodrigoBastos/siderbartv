// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {

  player = new YT.Player('player', {

    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      // 'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }

  });
}

var nomeVideo;

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {

   getNomeVideo();
   event.target.playVideo();

}

function getNomeVideo(){

  nomeVideo = player.getVideoData().title;
  
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {

  if (event.data == YT.PlayerState.PLAYING && !done) {

    done = true;

  }

  if(player.getPlayerState() ===  0) {

    console.log("Video encerrado!");
    // Iniciar reprodução de novo video

  }

}

$(function(){

    $(".panel-video").mouseenter(function() {

         $(this).find(".btn-fechar").css("opacity","1");
         $(this).css("background-color","#cccccc");

    });

    $(".panel-video").mouseleave(function() {

        $(this).find(".btn-fechar").css("opacity","0");
        $(this).css("background-color","#ffffff ");

    });


    // Tratamento botão mais informações
    $(".panel-video").click(function(){
       
       if($(this).find(".mais-informacoes").val() === "+") {

          $(this).css("height","150px");
          $(this).find(".mais-informacoes").val("-");

       } else {

          $(this).css("height","80px");
          $(this).find(".mais-informacoes").val("+");

       }

    });


    $("#btn-add").click(function(){

        $("ul").append("<li>teste</li>");

    });


    $(".btn-fechar").click(function(){

        $(this).closest("li").remove();
        
    });

    // Get youtube video thumbnail
    var url = '';
  
    url = $.jYoutube("https://www.youtube.com/watch?v=PwDdi8YPdH4","small");
     
    $("#thumbnail").attr({
        src: url,
        title:'titulo da imagem'
    });

});


// Thumbnail
$.extend({
  jYoutube: function( url, size ){
    if(url === null){ return ""; }
 
    size = (size === null) ? "big" : size;
    var vid;
    var results;
 
    results = url.match("[\?&amp;]v=([^&amp;#]*)");
 
    vid = ( results === null ) ? url : results[1];
 
    if(size == "small"){
      return "http://img.youtube.com/vi/"+vid+"/2.jpg";
    }else {
      return "http://img.youtube.com/vi/"+vid+"/0.jpg";
    }
  }
});
