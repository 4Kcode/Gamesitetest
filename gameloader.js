var gamesText = `{
    "games":[
        {
            "name":"0hh1",
            "img":"img/0hh1.png",
            "path":"GFiles/0hh1/"
        },
        {
            "name":"0hn0",
            "img":"img/0hn0.png",
            "path":"GFiles/0hn0/"
        },
        {
            "name":"2048",
            "img":"img/2048.png",
            "path":"GFiles/2048/"
        },
        {
            "name":"Thirty Dollar Website",
            "img":"img/30dollarwebsite.jpg",
            "path":"GFiles/30dollarwebsite/"
        },
        {
            "name":"Cookie Clicker",
            "img":"img/cookieclicker.png",
            "path":"GFiles/cookieclicker/"
        {
            "name":"Eggy Car",
            "img":"img/eggycar.png",
            "path":"GFiles/eggy-car/"
        },
        {
            "name":"Flappy Bird",
            "img":"img/flappybird.png",
            "path":"GFiles/flappybird/"
        },
        {
            "name":"Five Nights at Freddy's",
            "img":"img/fnaf.jpeg",
            "path":"GFiles/fnaf/"
        },
        {
            "name":"Five Nights at Winston's",
            "img":"img/fnaw.jpg",
            "path":"GFiles/fnaw/"
        },
        {
            "name":"Friday Night Funkin",
            "img":"img/fnf.jpg",
            "path":"GFiles/fnf-week7/"
        },
        {
            "name":"Google Snake",
            "img":"img/gsnake.png",
            "path":"GFiles/google-snake/"
        },
        {
            "name":"Hextris",
            "img":"img/hextris.png",
            "path":"GFiles/hextris/"
        },
        {
            "name":"Impossible Quiz",
            "img":"img/impossiblequiz.jpg",
            "path":"GFiles/impossible-quiz/"
        },
        {
            "name":"Learn to Fly",
            "img":"img/ltf.png",
            "path":"GFiles/ltf/"
        },
        {
            "name":"Learn to Fly 2",
            "img":"img/ltf2.jpg",
            "path":"GFiles/ltf2/"
        },
        {
            "name":"N64 Emulator",
            "img":"img/n64.jpg",
            "path":"GFiles/n64/"
        },
        {
            "name":"Paper.io 2",
            "img":"img/paperio2.png",
            "path":"GFiles/paperio2/"
        },
        {
            "name":"Retro Bowl",
            "img":"img/retrobowl.jpg",
            "path":"GFiles/retro-bowl/"
        },
        {
            "name":"Riddle School",
            "img":"img/riddleschool.png",
            "path":"GFiles/riddleschool/"
        },
        {
            "name":"Riddle School 2",
            "img":"img/riddleschool2.png",
            "path":"GFiles/riddleschool2/"
        },
        {
            "name":"Riddle School 3",
            "img":"img/riddleschool3.png",
            "path":"GFiles/riddleschool3/"
        },
        {
            "name":"Riddle School 4",
            "img":"img/riddleschool4.png",
            "path":"GFiles/riddleschool4/"
        },
        {
            "name":"Riddle School 5",
            "img":"img/riddleschool5.png",
            "path":"GFiles/riddleschool5/"
        },
        {
            "name":"Riddle Transfer",
            "img":"img/riddletransfer.png",
            "path":"GFiles/riddletransfer/"
        },
        {
            "name":"Riddle Transfer 2",
            "img":"img/riddletransfer2.png",
            "path":"GFiles/riddletransfer2/"
        },
        {
            "name":"Ruffle (Flash Emulator)",
            "img":"img/ruffle.png",
            "path":"GFiles/ruffle-demo/"
        },
        {
            "name":"Temple Run 2",
            "img":"img/templerun2.jpeg",
            "path":"gfiles/temple-run-2/"
        },
        {
            "name":"Tetris",
            "img":"img/tetris.jpg",
            "path":"gfiles/tetris/"
        },
        {
            "name":"Vex 3",
            "img":"img/vex-3.jpg",
            "path":"gfiles/vex3/"
        },
        {
            "name":"Vex 4",
            "img":"img/vex4.jpg",
            "path":"gfiles/vex4/"
        },
        {
            "name":"Vex 5",
            "img":"img/vex-5.jpg",
            "path":"gfiles/vex5/"
        },
        {
            "name":"Vex 6",
            "img":"img/vex6.jpg",
            "path":"gfiles/vex6/"
        },
        {
            "name":"World's Hardest Game",
            "img":"img/hardestgame.jpg",
            "path":"gfiles/worlds-hardest-game/"
        }
    ]
}`;
var gameObject = JSON.parse(gamesText);
for (i in gameObject.games) {
  let elem1 = document.createElement("div");
  elem1.className = "game-button";
  document.getElementById("gameSelect").appendChild(elem1);
  console.log("div made");
  let elem2 = document.createElement("a");
  
    elem2.href = gameObject.games[i].path;
  
  elem1.appendChild(elem2);
  console.log("a made");
  let elem3 = document.createElement("img");
  elem3.src = gameObject.games[i].img;
  elem3.alt = gameObject.games[i].name;
  elem2.appendChild(elem3);
  console.log("img made");
  let elem4 = document.createElement("p");
  elem4.innerHTML = gameObject.games[i].name;
  elem2.appendChild(elem4);
  console.log("p made");
}
