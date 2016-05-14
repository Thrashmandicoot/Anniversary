//based on: http://codepen.io/vivinantony/pen/gbENBB

var love = setInterval(function() {
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  var bigHeart = "<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>"

  var smallHeart = "<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>"
  
  var ashLiz = "<div class='ashLiz' style='font-size:" + randomSize() +"px;color:" + randomColor() + ";width:" + (r_size + 150) + "px;height:" + (r_size + 150) + "px;left:" + (r_left - r_num) + "%;-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + (r_time + 15) + "s ease;animation:love " + (r_time + 15) + "s ease'>Ash & Liz</div>"
  
  $('.bg_heart').append(bigHeart);

  $('.bg_heart').append(smallHeart);
  
  $('.bg_heart').append(ashLiz);

  $('.heart').each(function() {
    var top = $(this).css("top").replace(/[^-\d\.]/g, '');
    var width = $(this).css("width").replace(/[^-\d\.]/g, '');
    if (top <= -100 || width >= 150) {
      $(this).detach();
    }
  });
  
  
}, 500);

function randomSize(){
    return Math.floor(Math.random() * 30) + 20;
}

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}