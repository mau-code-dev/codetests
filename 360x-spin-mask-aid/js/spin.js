
$(function(){
  $('.spritespin').spritespin({
    source: SpriteSpin.sourceArray('https://www.twintechpromo.com/mauricio/mask-aid/img/180-Mask-Aid_{frame}.jpg', {
      frame: [1,14],
      digits: 2
    }),
    width: 340,
    height: 340,
    sense: -1,
    responsive: true
  });
});