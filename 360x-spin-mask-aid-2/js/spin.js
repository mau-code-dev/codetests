
$(function(){
  $('.spritespin').spritespin({
    source: SpriteSpin.sourceArray('https://www.twintechpromo.com/mauricio/mask-aid-spin-2/mask-aid-{frame}.jpg', {
      frame: [1,34],
      digits: 2
    }),
    width: 1272,
    height: 800,
    sense: -1,
    responsive: true
  });
});