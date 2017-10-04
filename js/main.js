var photo_1 = document.getElementById('photo-1');
var photo_2 = document.getElementById('photo-2');
var photo_3 = document.getElementById('photo-3');
var photo_4 = document.getElementById('photo-4');

photo_1.addEventListener("mouseenter", function(){
  //var address = "." + photo.getAttribute('src');
  for(var i = 1; i < 5; ++i){
    document.getElementById('main-photo-'+i).style.display = "none";
  }
  document.getElementById('main-photo-1').style.display = "block";

});

photo_2.addEventListener("mouseenter", function(){
  //var address = "." + photo.getAttribute('src');
  for(var i = 1; i < 5; ++i){
    document.getElementById('main-photo-'+i).style.display = "none";
  }
  document.getElementById('main-photo-2').style.display = "block";

});

photo_3.addEventListener("mouseenter", function(){
  //var address = "." + photo.getAttribute('src');
  for(var i = 1; i < 5; ++i){
    document.getElementById('main-photo-'+i).style.display = "none";
  }
  document.getElementById('main-photo-3').style.display = "block";

});

photo_4.addEventListener("mouseenter", function(){
  //var address = "." + photo.getAttribute('src');
  for(var i = 1; i < 5; ++i){
    document.getElementById('main-photo-'+i).style.display = "none";
  }
  document.getElementById('main-photo-4').style.display = "block";

});
