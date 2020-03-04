jQuery(document).ready(function(){
  var dogCount=0;
  var catCount=0;
  var keyCount=0;
  
  var user = function(string1){
    jQuery("ul#user").prepend("<li>" + string1 + "</li>");
  };
  
  var computer = function(string1){
    setTimeout(function(){
      jQuery("ul#computer").prepend("<li>" + string1 +"</li>");
    }, 500);
  };

  jQuery("button#hello").click(function(){
    user("Hello");
    computer("Hello");
  });

  jQuery("button#goodbye").click(function(){
    user("Goodbye");
    computer("Goodbye");
  });

  jQuery("button#name").click(function(){
    user("What is your name?");
    computer("What is <em>your<em> name?");
  });

  jQuery("button#error").click(function(){
    user("Do you have any errors?");
    computer("Do <em>you</em> have any errors?");
  });

  jQuery("button#stopCopy").click(function(){
    user("STOP COPYING ME!");
    computer("no.");
  });

  jQuery("img#kitten").click(function(){
    user("Woof");
    if(dogCount === 0){
      computer("I believe you indended to say 'Meow'");
    } else if(dogCount === 1){
      computer("I think there is something wrong with you");
    } else{
      computer("please just stop");
    };
    dogCount = dogCount + 1;
  });

  jQuery("img#puppy").click(function(){
    user("Meow")
    if(catCount === 0){
      computer("I believe you inteded to say 'Woof'");
    } else if(catCount === 1){
      computer("I think there is something wrong with you");
    } else{
      computer("please just stop");
    };
    catCount = catCount + 1;
  });

  jQuery("h3#cosmere").click(function(){
    if(keyCount === 0){
      jQuery("div#key").append("<img src=\"img/key.jpg\" alt=\"key\" title=\"Click to grab the key for yourself\">");
      keyCount = 1;
    };
  });

  jQuery("#key").click(function(){
    jQuery("#key img").remove();
    keyCount = 0;
  });

});