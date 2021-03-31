const videos = [
{
  "id" : 19,
  "title" : "Mama Tried",
  "artist" : "Merle Haggard & The Strangers",
  "description" : "In Mama Tried, Haggard focuses on the pain and suffering he caused his own mother by being incarcerated in 1957 in San Quentin.",
  "link" : "yc0DvTShwS0"
},
{
  "id" : 18,
  "title" : "Girl of my Best Friend",
  "artist" : "Elvis Presley",
  "description" : "",
  "link" : "v9HG-tC6y50"
},
{
  "id" : 17,
  "title" : "Little Deuce Coupe",
  "artist" : "The Beach Boys",
  "description" : "",
  "link" : "ZkdTI10EfBI"
},
{
  "id" : 16,
  "title" : "White Wedding",
  "artist" : "Billy Idol",
  "description" : "White Wedding is a song by Billy Idol that was released as the second single from his self-titled studio album in 1982. Although not Idol's highest-charting hit, it is often considered one of his most recognizable songs.",
  "link" : "GrgQPR3u6z4"
},
  {
  "id" : 15,
  "title" : "Boot scootin boogie",
  "artist" : "Brooks and Dunn",
  "description" : "The song's success is credited with having sparked a renewed interest in line dancing throughout the United States.",
  "link" : "vMjHPMZvyfE"
},
  {
  "id" : 14,
  "title" : "The Irish Rover",
  "artist" : "The Pogues and The Dubliners ",
  "description" : "The Irish Rover is an Irish folk song about a magnificent though improbable sailing ship that reaches an unfortunate end. ",
  "link" : "Obn7unMR4jw"
},
{
  "id" : 13,
  "title" : "At the Club",
  "artist" : "The Drifters",
  "description" : "",
  "link" : "UX8VEjPMOA8"
},
{
  "id" : 12,
  "title" : "Forever in Blue Jeans",
  "artist" : "Neil Diamond",
  "description" : "Diamond said about the song: the simple things are really the important things",
  "link" : "qS7hpXphVX0"
},
{
  "id" : 11,
  "title" : "Sunny Afternoon",
  "artist" : "The Kinks",
  "description" : "Its strong music hall flavour and lyrical focus was part of a stylistic departure for the band, which had risen to fame in 1964–65 with a series of hard-driving, power-chord rock hits.",
  "link" : "5m92XqS8-f0"
},
{
  "id" : 10,
  "title" : "Happy Together",
  "artist" : "The Turtles",
  "description" : "Released as a single in February 1967, the song knocked the Beatles Penny Lane out of the number one slot on the US Billboard Hot 100 and remained atop the chart for three weeks.",
  "link" : "oaOg0PurM0A"
},   
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
  for (let item = 0; item < 8; item++) {
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
 heroLink.href = "https://youtu.be/" + videos[0].link;

}

const sections = document.querySelectorAll(".section");

document.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  sections.forEach(section => {
    if (scrollPos >= (section.offsetTop - section.offsetHeight / 2)) {
      let menuItems = document.querySelectorAll(".menu__item");
      menuItems.forEach(item => {
        if (item.hash == "#" + section.id) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      })
    }
  })
})



loadVideos();
updateHeroContainer();
