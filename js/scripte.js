
selector(".menu").addEventListener('click', function() {
    this.classList.toggle('open');
    selector('header').classList.toggle('open');
    selector('.vito').classList.toggle('open');
});


function selector(s) {
    return document.querySelector(s);
};

$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });
    