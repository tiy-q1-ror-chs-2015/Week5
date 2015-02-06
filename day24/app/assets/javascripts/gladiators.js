
var gladiator1 = {};
var gladiator2 = {};
$(document).ready(function() {
  console.log("Hey!");

  $(".pick-me").click(function() {
    console.log(gladiator1.name);
    if( !gladiator1.name ) {
      gladiator1.hp = $(this).attr("gladiator_hp");
      gladiator1.damage = $(this).attr("gladiator_damage");
      gladiator1.name = $(this).attr("gladiator_name");
      gladiator1.image = $(this).attr("gladiator_image");
      render();
      
    } else if(!gladiator2.name){
      gladiator2.hp = $(this).attr("gladiator_hp");
      gladiator2.damage = $(this).attr("gladiator_damage");
      gladiator2.name = $(this).attr("gladiator_name");
      gladiator2.image = $(this).attr("gladiator_image");
      render();
         
    } 

    if ( gladiator1.name && gladiator2.name ){
      $(".battle").show();
    }
  })

  $(".battle").click(function() {
    gladiator1.hp -= gladiator2.damage
    gladiator2.hp -= gladiator1.damage
    render();
    if(gladiator1.hp <= 0) {
      $("body").html(gladiator2.name + " Wins!")
      $("<audio></audio>").attr({
        'src': '/assets/Wilhelm Scream.wav',
        'autoplay': 'autoplay'
      }).appendTo("body");
    }

    if(gladiator2.hp <= 0) {
      $("body").html(gladiator1.name + " Wins!")
      $("<audio></audio>").attr({
        'src': '/assets/Wilhelm Scream.wav',
        'autoplay': 'autoplay'
      }).appendTo("body");
    }

    $("<audio></audio>").attr({
      'src': '/assets/sword.mp3',
      'autoplay': 'autoplay'
    }).appendTo("body");
  })

  function render() {
    $(".gladiator2").html( 
      gladiator2.name + "<br>" +
      gladiator2.hp + "<br>" +
      gladiator2.damage + "<br>" +
      "<img class='image' src='" + gladiator2.image + "'>"
    )   
    $(".gladiator1").html( 
      gladiator1.name + "<br>" +
      gladiator1.hp + "<br>" +
      gladiator1.damage + "<br>" +
      "<img class='image' src='" + gladiator1.image + "'>"
    )
  }
})




