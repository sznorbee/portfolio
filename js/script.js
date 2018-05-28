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
