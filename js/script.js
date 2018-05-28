$(document).ready(function()
{

  /*smoth scroll*/
  $('a[href^="#"]').on("click", function()
  {
    var theHrefValue = $(this).attr("href");
    if(theHrefValue != "#")
    {
      var element = $(theHrefValue);
      if(element.length >0)
      {
        var offsetTop = element.offset().top;
        $("body, html").animate(
                                  { scrollTop: offsetTop },
                                  1000
                                );
      }
    }
  })

  //sticky navbar
  $(document).on("scroll", function(){
      var distance = $(document).scrollTop();
      console.log(distance);
      if(distance >300){
        console.log("activation de la class")
        $("nav").addClass("sticky");
      }else{
        console.log("remettre le menu à sa place")
        $("nav").removeClass("sticky");
      }
    })
    /*position:sticky*/
    //STICKY MENU - scroll up
      var currentScroll = 0;
      $(document).on("scroll", function(){
        var distance = $(document).scrollTop();
        console.log(distance);
        if(distance>currentScroll){
          //console.log("vers le bas");
          $("nav").removeClass("sticky");
        }else{
          //console.log("vers le haut");
          $("nav").addClass("sticky");
        }
        currentScroll = distance;
      });

    //écoute de la souris
  $(document).on("mousemove", function(event){
    console.log(event.pageX + "/" + event.pageY);
  })

}); //end of jquery
