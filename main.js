$(function(){

  $(function() {
    $('.down').click(function(){
      var id = $('#about');
      var position = $(id).offset().top;
      $('html,body').animate({
        'scrollTop':position
      },500);
    }); 
  });

  $(function() {
    var offset = 100;
    var duration = 500;
    $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
    $('.pagetop').fadeIn(duration);
    } else {
    $('.pagetop').fadeOut(duration);
    }
    });
    
    $('.pagetop').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
    })
  });

  $(function(){
    setInterval(function(){
        $('.down').fadeOut(1000,function(){$(this).fadeIn(1000)});
    },2000);
  });
  
  $(function() {
    var offset = 100;
    var duration = 600;
    $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
    $('.about').fadeIn(duration);
    } else {
    $('.about').fadeOut(duration);
    }
    });
  });

  $(function() {
    var offset = 900;
    var duration = 600;
    $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
    $('.skill').fadeIn(duration);
    } else {
    $('.skill').fadeOut(duration);
    }
    });
  });

  $(function() {
    var offset = 1500;
    var duration = 600;
    $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
    $('.works').fadeIn(duration);
    } else {
    $('.works').fadeOut(duration);
    }
    });
  });

  $(function() {
    var offset = 2100;
    var duration = 600;
    $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
    $('.service').fadeIn(duration);
    } else {
    $('.service').fadeOut(duration);
    }
    });
  });

});
