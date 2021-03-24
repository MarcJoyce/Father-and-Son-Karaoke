const videos = [
{
  "id" : 9,
  "title" : "If I can dream",
  "artist" : "Elvis Presley",
  "description" : "If I Can Dream is a song made famous by Elvis Presley and notable for its direct quotations of Martin Luther King Jr.'s 1963 I Have a Dream speech",
  "link" : "MOjHp2kQwaw"
},
{
  "id" : 1,
  "title" : "Walk of Life",
  "artist" : "Dire Straits",
  "link" : "0kJKk0F-J_g"
},
{
  "id" : 2,
  "title" : "Save the last dance for me",
  "artist" : "Bruce Springsteen",
  "link" : "tKNenaTkM08"
},
{
  "id" : 3,
  "title" : "World without love",
  "artist" : "The Mavericks",
  "link" : "nQbbFTHBIVk"
},
{
  "id" : 4,
  "title" : "Sealed with a Kiss",
  "artist" : " Brian Hyland",
  "link" : "SLpZuhUxX1o"
},
{
  "id" : 5,
  "title" : "Only You",
  "artist" : "Elvis Presley",
  "link" : "ctp5qvOF7Mw"
},
{
  "id" : 6,
  "title" : "I Like It",
  "artist" : "Gerry and the Pacemakers",
  "link" : "M9ns1-zT5aU"
},
{
  "id" : 7,
  "title" : "Rockabilly Rebel",
  "artist" : "Matchbox",
  "link" : "hNShI0oKk8Q"
},
{
  "id" : 8,
  "title" : "Ring of Fire",
  "artist" : "Johnny Cash",
  "link" : "8sur4I10Fg4"
}
];

const loadVideos = () => {
  const music__container = document.querySelector(".music__container");
  for (let item = 0; item < 4; item++) {
    const music__box = document.createElement("div");
    music__box.classList.add("music__box");

    const music__title = document.createElement("h6");
    music__title.classList.add("music__title");
    music__title.innerHTML = videos[item].title;

    const music__artist = document.createElement("p");
    music__artist.classList.add("music__artist");
    music__artist.innerHTML = videos[item].artist;

    const music__video = document.createElement("iframe");

    music__video.setAttribute("src","https://www.youtube.com/embed/" + videos[item].link + "?controls=0")
    music__video.setAttribute("title","YouTube Video Player");
    music__video.style.width = "280px";
    music__video.style.height = "300px";
    music__video.setAttribute("frameborder", "0");
    music__video.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
    music__video.setAttribute("allowfullscreen", "1");

    music__box.appendChild(music__title);
    music__box.appendChild(music__artist);
    music__box.appendChild(music__video);

    music__container.appendChild(music__box);
  }
}

const toggleMenu = () => {
  const menuButton = document.querySelector(".toggle__menu");
  const bars = document.querySelector(".fa-bars");
  const close = document.querySelector(".fa-times");
  const menu = document.querySelector(".responsive__menu");

  menu.classList.toggle("active");
  bars.classList.toggle("active");
  close.classList.toggle("active");
}

const updateHeroContainer = () => {
 const heroName = document.querySelector(".hero__name");
 const heroArtist = document.querySelector(".hero__artist");
 const heroDescription = document.querySelector(".hero__description__text");
 const heroLink = document.querySelector(".hero__cta__link");
  
 heroName.innerHTML = videos[0].title;
 heroArtist.innerHTML = videos[0].artist;
 heroDescription.innerHTML = videos[0].description;
 heroLink.href = "https://www.youtube.com/watch?v=" + videos[0].link;

}

loadVideos();
updateHeroContainer();
