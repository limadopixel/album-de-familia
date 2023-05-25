var foto = [
  "https://pm1.narvii.com/7582/4ed7c49a5e31ca9450c056c15148fbd83f31ddb3r1-726-413v2_hq.jpg",
  "https://img.quizur.com/f/img62fee157da8e79.15854886.jpeg?lastEdited=1660871005",
  "https://www.animeclick.it/immagini/personaggio/Tanjuro_Kamado/gallery_original/Tanjuro_Kamado-5d65b0217bf9a.jpg",
  "https://wallpapercave.com/wp/wp4898429.jpg",
  "https://i.pinimg.com/originals/8b/51/14/8b5114fe06c4d5299155d79039a0889b.jpg"
  
];

var nomes = [
  "Kie Kamado",
  "Tanjuro Kamado",
  "Nezuko Kamado",
  "Tanjiro Kamado",
  "Familia Kamado"
];


var i = 0;

function next(){
  if( i == 5){

    i = 0 ;

  }
  document.getElementById("foto").src = foto[i];
  i++;

}





