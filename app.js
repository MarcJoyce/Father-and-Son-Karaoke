const videos =
[
  {
    id: 112,
    title: "Lay Down Sally",
    artist: "Eric Clapton",
    description: "'Lay Down Sally' is a song performed by Eric Clapton, and written by Clapton, Marcella Detroit and George Terry. It appeared on his November 1977 album Slowhand, and reached No. 3 on the Billboard Hot 100 chart.",
    link: "5-FzBIieXWo"
  },
  {
    id: 111,
    title: "Route 66",
    artist: "Chuck Berry",
    description: "'(Get Your Kicks on) Route 66' is a popular rhythm and blues song, composed in 1946 by American songwriter Bobby Troup. The lyrics follow the path of U.S. Route 66 (US 66), which traversed the western two-thirds of the U.S. from Chicago, Illinois, to Los Angeles, California. The song became a standard, with several renditions appearing on the record charts.",
    link: "JfsNY1PS1Ig"
  },
  {
    id: 110,
    title: "Blue Suede Shoes",
    artist: "Carl Perkins",
    description: "'Blue Suede Shoes' is a rock-and-roll standard written and first recorded by Carl Perkins in 1955. It is considered one of the first rockabilly records, incorporating elements of blues, country and pop music of the time. Perkins' original version of the song appeared on the Cashbox Best Selling Singles list for 16 weeks and spent two weeks at the number two position",
    link: "93AtHD5XFXA"
  },
  {
    id: 109,
    title: "The Last Time",
    artist: "The Rolling Stones",
    link: "9EiBslvSICM"
  },
  {
    id: 108,
    title: "Sweet Caroline",
    artist: "Neil Diamond",
    description: "In a 2007 interview, Diamond stated the inspiration for his song was John F. Kennedy's daughter, Caroline, who was eleven years old at the time it was released. Diamond sang the song to her at her 50th birthday celebration in 2007. In an interview in 2011, Diamond said that a magazine cover photo of Caroline Kennedy as a young child on a horse with her parents created an image in his mind, and the rest of the song came together about five years after seeing the picture",
    link: "cNEh1-DpnpA"
  },
  {
    id: 107,
    title: "Little Sister",
    artist: "Elvis Presley",
    description: "'Little Sister' is a rock and roll song written by Doc Pomus and Mort Shuman. It was originally released as a single in 1961 by American singer Elvis Presley, who enjoyed a No. 5 hit with it on the Billboard Hot 100.",
    link: "yWOzIaFd9JU"
  },
  {
    id: 106,
    title: "I Hear You Knockin'",
    artist: "Dave Edwards",
    description: "",
    link: "p75uVoigW_o"
  },
  {
    id: 105,
    title: "Peggy Sue got Married",
    artist: "Buddy Holly",
    description: "Buddy Holly recorded the vocal, accompanying himself on guitar, on December 8, 1958. It was posthumously released in July 1959 as a 45-rpm single with 'Crying, Waiting, Hoping'. It refers to his 1957 hit song 'Peggy Sue'. It was one of the first sequels of the rock era.",
    link: "Uf3Bs65EGcw"
  },
  {
    id: 104,
    title: "2468 Motorway",
    artist: "Tom Robinson",
    description: "",
    link: "SYPgdB1WKgs"
  },
  {
    id: 103,
    title: "Shake, Rattle 'n' Roll",
    artist: "Bill Haley",
    description: "",
    link: "XfyBBG-gyRw"
  },
  {
    id: 102,
    title: "Baker Street",
    artist: "Gerry Rafferty",
    description: "'Baker Street' is a song written and recorded by Scottish singer-songwriter Gerry Rafferty. Released as a single in 1978, it reached No. 1 in Cash Box and No. 2 on the Billboard Hot 100,where it held its Billboard position for six weeks. Let's see those Air-Saxophone riffs!",
    link: "q80U6fh-BrU"
  },
  {
    id: 101,
    title: "Love's Got a Hold on You",
    artist: "Alan Jackson",
    description: "'Love's Got a Hold on You' is a song written by Carson Chamberlain and Keith Stegall and performed by American country music artist Alan Jackson. It was released in July 1992 as the final single from Jackson's second album, Don't Rock the Jukebox. It was also the only song that Jackson did not co-write on the album. It peaked at number 1 on both the U.S. Billboard country music chart, and on the Canadian RPM country music chart.",
    link: "4dp_nRvdGkI"
  },
  {
    id: 100,
    title: "Teddy Bear",
    artist: "Elvis Presley",
    description: "'(Let Me Be Your) Teddy Bear' is a popular song first recorded by Elvis Presley in 1957 for the soundtrack of his second motion picture, Loving You, during which Presley performs the song on screen.",
    link: "eXJKnBnqk_g"
  },
  {
  id: 99,
    title: "Let it Rock",
    artist: "Chuck Berry",
    link: "IW9BrGsu4ds"
  },
  {
    id: 98,
    title: "Country Roads",
    artist: "John Denver",
    description: "'Country Roads', is a song written by Bill Danoff, Taffy Nivert and John Denver about West Virginia. It was released as a single performed by Denver on April 12, 1971, peaking at number two. The song was a success on its initial release and was certified Gold by the RIAA in 1971, and Platinum in 2017. In March 2014, it became one of the four official state anthems of West Virginia.",
    link: "L2nA_kyAd0E"
  },
  {
    id: 97,
    title: "My Girl",
    artist: "The Temptations",
    description: "'My Girl' is a soul music song recorded by the Temptations for the Gordy (Motown) record label. Written and produced by the Miracles members Smokey Robinson and Ronald White, it became the Temptations' first U.S. number 1 single, and is today their signature song. Robinson's inspiration for writing 'My Girl' was his wife, Miracles member Claudette Rogers Robinson. The song was included on the Temptations 1965 album The Temptations Sing Smokey.",
    link: "VPE_nmo_vik"
  },  
  {
    id: 96,
    title: "Sweet Home Chicago",
    artist: "Status Quo",
    description: "'Sweet Home Chicago' is a blues standard first recorded by Robert Johnson in 1936. Although he is often credited as the songwriter, several songs have been identified as precedents. The song has become a popular anthem for the city of Chicago despite ambiguity in Johnson's original lyrics. Numerous artists have interpreted the song in a variety of styles, including Status Quo, which is the inspiration behind Wal and Dions.",
    link: "epDVn7GHeMY"
  },
  {
    id: 95,
    title: "You Gave Me a Mountain",
    artist: "Elvis Presley",
    description: "'You Gave Me a Mountain' is a song written by country singer-songwriter Marty Robbins during the 1960s. Elvis performed the song at his 1973 Honolulu concert Aloha from Hawaii being included on the subsequent live album/ Presley's version was included in many of his other releases throughout the 1970s.",
    link: "rm_iFzhU6fA"
  },
  {
    id: 94,
    title: "Green Green Grass of Home",
    artist: "Tom Jones",
    description: "'Green, Green Grass of Home', is a country song and in 1966, Tom Jones recorded a version and had a worldwide No. 1 hit with it.",
    link: "AbeLqXSrQNI"
  },
  {
    id: 93,
    title: "Angels",
    artist: "Robbie Williams",
    description: "'Angels' is a song by Robbie Williams. It was included on Williams's debut solo album Life thru a Lens (1997), and released as a single in December 1997. 'Angels' was written by Williams and Guy Chambers, based on an earlier song written by Ray Heffernan. It is Williams' best-selling single and was voted the best song of the previous 25 years at the 2005 Brit Awards.",
    link: "dLxUVag1mF4"
  },
  {
    id: 92,
    title: "Rock n Roll Heart",
    artist: "Eric Clapton",
    description: "",
    link: "IudI47oILUc"
  },
  {
    id: 91,
    title: "Another Saturday Night",
    artist: "Jimmy Buffet",
    description: "'Another Saturday Night' is the title of a 1963 hit single by Sam Cooke from the album Ain't That Good News. The song was written by Cooke while touring in England when staying in a hotel where no female guests were allowed. In 1993, Jimmy Buffett recorded the song. His version peaked at No. 74 on the Billboard Hot Country Singles & Tracks chart.",
    link: "0MO8soPicIE"
  },

  {
    id: 90,
    title: "El Paso",
    artist: "Marty Robbins",
    description: "'El Paso' is a western ballad written and originally recorded by Marty Robbins, and first released on Gunfighter Ballads and Trail Songs in September 1959. It was released as a single the following month, and became a major hit on both the country and pop music charts, reaching No. 1 in both at the start of 1960 (the first No. 1 hit of the 1960s). It won the Grammy Award for Best Country & Western Recording in 1961, and remains Robbins' best-known song.",
    link: "dBO10xxaUgI"
  },
  {
    id: 89,
    title: "American Trilogy",
    artist: "Elvis Presley",
    description: "'An American Trilogy' is a 1971 song medley arranged by country composer Mickey Newbury and popularized by Elvis Presley, who included it as a showstopper in his concert routines",
    link: "mve-soqn9fM"
  },
  {
    id: 88,
    title: "Take It Easy",
    artist: "The Eagles",
    description: "'Take It Easy' is a song by the American rock band Eagles, written by Jackson Browne and Eagles band member Glenn Frey, who also provides lead vocals. It was the band's first single, released on May 1, 1972. It peaked at No. 12 on the July 22, 1972, Billboard Hot 100 chart. It also was the opening track on the band's debut album Eagles and it has become one of their signature songs, included on all of their live and compilation albums. It is listed as one of The Rock and Roll Hall of Fame's 500 Songs that Shaped Rock and Roll.",
    link: "Bay1u1nFeIc"
  },
  {
  id: 87,
  title: "Saints Rock n Roll",
    artist: "Bill Haley",
    description: "Saints Rock n Roll is an alternative cover of the traditional 'When the Saints go Marching in?' song, performed by Bill Haley and his Comets appearing on the 1958 album 'Rockin' the Joint'",
    link: "la6EzW6kwLo"
  },
  
{
  id: 86,
  title:"Rockin' Robin",
  artist:"Bobby Day",
  description:"'Rockin' Robin' was Day's biggest hit single, becoming a number two hit on the (US) Billboard Hot 100, and spent one week at the top of the charts in R&B sales. Michael Jackson covered the song in 1972, but didn't better Day's number two hit.",
  link:"vRLKZwSd3no"
},
{
  id: 85,
  title:"Hucklebuck",
  artist:"Paul Williams and the Hucklebuckers",
  description:"",
  link:"DDLwR_6ACUU"
},
{
  id: 84,
  title:"Lonely Blue Boy",
  artist:"Conway Twitty",
  description:"",
  link:"X8756xneI48"
},
  {
    id:83,
    title:"Chasing that Neon Rainbow",
    artist: "Alan Jackson",
    description: "'Chasin' That Neon Rainbow' is a song written by American country music artist Alan Jackson and Jim McBride, and recorded by Jackson. It was released in September 1990 as the fourth single from Jackson's first album, Here in the Real World",
    link: "lxSIAlp_5-4"
  },
  {
    id: 82,
    title: "GI Blues",
    artist: "Elvis Presley",
    description: "G.I. Blues is the third soundtrack album and seventh album by American singer and musician Elvis Presley, released in October 1960. It is the soundtrack to the 1960 film of the same name in which he starred.",
    link: "f6tXLbMPuV8"
  },
  {
    id: 81,
    title: "Jump Jive an' Wail",
    artist: "Brian Setzer",
    description: "Originally performed by Louis Prima in 1956, The Brian Setzer Orchestra covered the song on their 1998 album The Dirty Boogie. In 1999, Setzer's cover won the Grammy Award for Best Pop Performance by a Duo or Group with Vocals at the 41st Grammy Awards.",
    link: "LJ6JQkhlr3o"
  },
  {
    id: 80,
    title: "Twistin' the Night Away",
    artist: "Sam Cooke",
    description: "Twistin' the Night Away is a song written and recorded by Sam Cooke. The song was recorded with The Wrecking Crew as session musicians, including Rene Hall as band leader, Red Callender on bass, Earl Palmer on drums, Tommy Tedesco and Clifton White on guitars, Ed Beal on piano, John Kelson, John Ewing and Jewell Grant on saxophone and Stuart Williamson on trumpet.[",
    link: "gUFrR-iMVBA"
  },
  {
    id: 79,
    title: "Let's Think About Livin",
    artist: "Bob Luman",
    description: "The song is an open critique of the teenage tragedy song and gunfighter ballad genera of the time, humorously quipping that if Marty Robbins, Patti Page and the Everly Brothers actually died in the songs where they mention dying that the singer will soon be the last surviving musician in the industry.",
    link: "ffUMx029-yY"
  },
  {
    id:78,
    title: "Everything",
    artist: "Michael Buble",
    description: "",
    link: "lA4gSRnI6po"
  },
  {
    id: 77,
    title: "If Tomorrow Never Comes",
    artist: "Garth Brookes",
    description: "'If Tomorrow Never Comes' is a song recorded by American country music artist Garth Brooks. This was his first number-one single on the US Billboard Country Singles chart. It is also sometimes referred to as his signature song. 'If Tomorrow Never Comes' was named Favorite Country Single in the American Music Awards of 1991.",
    link: "15Z-kE0yUi8"
  },
  {
    id: 76,
    title: "Way Down",
    artist: "Elvis Presley",
    description: "",
    link: "fvAZCJqhCK4"
  },
    {
        id: 75,
        title: "Donna",
        artist: "Richie Valens",
        description: "'Donna' is a song written by Ritchie Valens, featuring the 1950s progression. The song was released in 1958 on Del-Fi Records. Written as a tribute to his high school sweetheart Donna Ludwig, it was Valens' highest-charting single, reaching No. 2 on the Billboard Hot 100 chart the following year.",
        link: "ADfOjWSlKQk"
    },
    {
    id: 74,
    title: "At The Hop",
    artist: "Danny & the Juniors",
    description: "'At the Hop' is a 50s pop song written by Artie Singer, John Medora, and David White and originally released by Danny & the Juniors. The song was released in the fall of 1957 and reached number one on the US charts on January 6, 1958, becoming one of the top-selling singles of 1958.",
    link: "cOfTDgKWFVc"
  },
  {
    id: 73,
    title: "The Story of My Life",
    artist: "Michael Holliday",
    description: "'The Story of My Life' is a song written by Burt Bacharach and Hal David. The song was a 1957 hit for American country music singer Marty Robbins, which peaked at number one on the US country chart. In the UK, a cover version recorded by Michael Holliday reached No.1 in the UK Singles Chart in February 1958, before being replaced by Perry Como's 'Magic Moments', also written by Bacharach and David.",
    link: "7_KL5eXbMzU"
  },
  {
    id: 72,
    title: "Rave On",
    artist: "Buddy Holly",
    description: "'Rave On', is a song written by Sonny West, Bill Tilghman and Norman Petty in 1958. It was first recorded by West for Atlantic Records, which released his version in February 1958. Buddy Holly recorded the song later the same year, and his version became a hit, one of six of his recordings that charted in 1958. Holly is instantly recognizable as the artist: the record begins with a drawn-out 'Well…' as stylized by Holly's distinctive hiccup",
    link: "fXwJ07lrpjk",
  },
  {
    id: 71,
    title: "I Walk the Line",
    artist: "Johnny Cash",
    description: "",
    link: "Dtn4WM7JvYk",
  },
  {
    id: 70,
    title: "You're the Devil in Disguise",
    artist: "Elvis Presley",
    description: "The song peaked at No. 3 in the US on the Billboard singles chart, becoming Elvis's last top ten single on the Rhythm and Blues charts. The single was certified 'Gold' for sales in excess of 500,000 units in the US. In 1963, when the song was debuted to British audience's; John Lennon voted the song 'a miss'. The song went on to reach No. 1 in the UK.",
    link: "MYiKRM7qmWc"
  },
  {
    id: 69,
    title: "Father and Son",
    artist: "Cat Stevens",
    description: "",
    link: "S5NLsWCVXlE"
  },
  {
    id: 68,
    title: "Words",
    artist: "Bee Gees",
    description: "Words is a song by the Bee Gees, written by Barry, Robin & Maurice Gibb. The song reached No. 1 in Germany, Canada, Switzerland, and the Netherlands. 'Words' was the Bee Gees third UK top 10 hit, reaching number 8, and in a UK television special on ITV in December 2011 it was voted fourth in 'The Nation's Favourite Bee Gees Song'",
    link: "cmeygB66ZzY"
  },
  {
    id: 67,
    title: "Dance The Night Away",
    artist: "The Mavericks",
    description: "",
    link: "iGguynDDdzE"
  },
  {
    id: 66,
    title: "Here Comes My Baby",
    artist: "Tremeloes",
    description: "This was written in London in 1966 by Cat Stevens. It was almost released as Cat's first single, but 'I Love My Dog' was thought to be stronger. After 'I Love My Dog's' success, 'Here Comes My Baby' was shelved. The Tremeloes picked it up and it became their breakthrough hit in America and their first hit in the UK since their lead singer Brian Poole left them. Another of Cat Stevens most popular songs??? Father and Son.",
    link: "NwT6difmWZo"
  },
  {
    id: 65,
    title: "Lean on Me",
    artist: "Bill Withers",
    description: "",
    link: "vsQyB8JNl0w"
  },
  {
    id: 64,
    title: "What made Milwaukee famous",
    artist: "Jerry Lee Lewis",
    description: "What's Made Milwaukee Famous is a song written by Glenn Sutton. The song's title is a reference to beer, specifically Schlitz beer, which for many years was advertised with the slogan, 'The beer that made Milwaukee famous.'. In 1968, Jerry Lee Lewis released his version as a single. It became a top 10 hit on Billboard's Country chart and also made a minor impact on the Billboard Hot 100.",
    link: "ibQCCWj2Xlo"
  },
  {
    id: 63,
    title: "The Wonder of You",
    artist: "Elvis Presley",
    description: "A no. 1 hit in the UK and a Top 10 hit in the U.S., The Wonder of You was one of Elvis's most successful records in the UK ever, topping the UK Singles Chart for six weeks in the summer of that year. It is his fifth biggest seller in the UK to date, with sales of 891,000+.",
    link: "PTCVJBt8TrY"
  },
  {
    id: 62,
    title: "Oh Lonesome Me",
    artist: "The Kentucky Headhunters",
    description: "Oh Lonesome Me is a popular song written and recorded in December 1957 by Don Gibson. The song has been covered by many artists, including Elvis Presley, Nancy Sinatra, Neil Young, The Kentucky Headhunters and now; Dion and Wal. That's some good company!!",
    link: "KsgUjP5r2Ws",
  },
  {
    id: 61,
    title: "Haven't met you yet",
    artist: "Michael Buble",
    description: "Haven't Met You Yet is the first single from Canadian singer Michael Buble's sixth album, Crazy Love, released on August 31, 2009. The single and its official music video are about everyone's dream of finding a relationship and love. Buble dedicated it to his then fiancée and now wife, Luisana Lopilato.",
    link: "u_6837oWUio"
  },
  {
    id: 60,
    title: "Sheila",
    artist: "Tommy Roe",
    description: "Roe originally conceived the song as 'Frita', based on a girl from Roe's high school. The song was auditioned to Judd Records, but they suggested that the name be changed. By coincidence, Roe's Aunt Sheila was visiting, which inspired the final title.",
    link: "v8Hdu0PJJEM"
  },
  {
    id: 59,
    title: "Under the Boardwalk",
    artist: "The Drifters",
    description: "Under the Boardwalk is a pop song written by Kenny Young and Arthur Resnick and recorded by The Drifters in 1964. It charted at number four on the Billboard Hot 100 chart on August 22, 1964",
    link: "5oDW1dN2c_w"
  },
  {
    id: 58,
    title: "Tears in Heaven",
    artist: "Eric Clapton",
    description: "Dedicated to Jordan Banks, who sadly lost his life this week. Rest in Peace Jordan",
    link: "3Qlr8VU7AU0"
  },
  {
    id: 57,
    title: "Blue Blue Day",
    artist: "Don Gibson",
    description: "Blue Blue Day went to number one for two weeks on the Country & Western Best Seller chart and remained on that chart for a total of six months.",
    link: "oVOo3eI5Gsw"
  },
  {
    id: 56,
    title: "A Fool Such as I",
    artist: "Elvis Presley",
    description: "Originally sung by Hank Snow, the single reached number 4 on the US Country Charts. Then the King released his own version in 1958, whilst Presley was on leave from the Army; which rocketed to number 1 in the UK charts and number 2 in the US charts.",
    link: "NwOnbHS5ukY"
  },
  {
    id: 55,
    title: "Love Grows Where My Rosemary Goes",
    artist: "Edison Lighthouse",
    description: "Love Grows Where My Rosemary Goes is a popular song by Edison Lighthouse, originally recorded by Jefferson. The single reached the number one spot on the UK Singles Chart on the week ending on 31 January 1970, where it remained for a total of five weeks.",
    link: "74NIV7eh05c"
  },
  {
id: 54,
title: "Daydream Believer",
artist: "The Monkees",
description: "Daydream Believer is a song composed by American songwriter John Stewart, shortly before he left the Kingston Trio. It was originally recorded by the Monkees, and now by Wal and Dion.",
link: "WEgZBsSEAlQ"
},
  {
id: 53,
title: "Hello Mary Lou",
artist: "Ricky Nelson",
description: "",
link: "mUJWuHm0daI"
},
  {
id: 52,
title: "Wonderful World",
artist: "Louis Armstrong",
description: "",
link: "vtNrU-1eKvE"
},
  {
id: 50,
title: "Penny Arcade",
artist: "Roy Orbison",
description: "The line roll up and spend your last dime is a curious mix of American and British vernacular. Roll up is a British saying meaning to get in line (heard in The Beatles' Magical Mystery Tour); a dime is American currency.",
link: "VHDCeROwKeg"
},
  {
    id: 51,
    title: "Hey, Good Lookin'",
    artist: "Hank William Snr",
    description: "Hey, Good Lookin is a 1951 song written and recorded by Hank Williams, and his version was inducted into the Grammy Hall of Fame in 2001. In 2003, CMT voted the Hank Williams version #19 on CMT's 100 Greatest Songs of Country Music.",
    link: "RWc7jkIV5JE"
  },
  {
id: 49,
title: "I just can't help believing",
artist: "Elvis Presley",
description: "I Just Can't Help Believing was recorded by Elvis Presley in 1970 as a track on his album That's the Way It Is. It was released as a single in the UK in November 1971, peaking at No. 6. Presley's version also reached No. 6 in South Africa, and No. 12 in Ireland.",
link: "XPozYMZ8l7c"
},
  {
  id: 48,
    title: "Running Bear",
    artist: "Johnny Preston",
    description: "Running Bear is sung most famously by Johnny Preston in 1959. It was No. 1 for three weeks in January 1960 on the Billboard Hot 100 in the United States. The song also reached No. 1 in the UK Singles Chart and New Zealand in 1960.",
    link: "GFoaeDLDiYQ"
  },

  {
    id: 47,
    title: "Long black train",
    artist: "Josh Turner",
    description: "Having spent more than 30 weeks on the Billboard country charts, Long Black Train reached a peak of #13 in early 2004. On June 1, 2006 it was certified as Gold by the RIAA.",
    link: "L1_9sC3Wi74"
  },
  {
    id: 46,
    title: "Will you love me Tomorrow",
    artist: "Lobo",
    description: "Will You Love Me Tomorrow, is a song written by Gerry Goffin and Carole King. It was originally recorded in 1960 by the Shirelles, but over the years hundreads of artists have covered the single, including Wal and Dion with their own rendition, inspired by Lobo.",
    link: "XRe372R7nuY"
  },
  {
    id: 45,
    title: "I don't want our lovin to die",
    artist: "The Herd",
    description: "The Herd were an English rock band, founded in 1965. In 1966, 16-year-old Peter Frampton joined as lead singer and guitarist. The band had three UK top twenty hits in the late 1960s, including From the Underworld and I Don't Want Our Loving to Die",
    link: "mxD1QbK26s4"
  },
  {
    id : 44,
    title: "I fought the law",
    artist: "Bobby Fuller Four",
    description: "I Fought the Law is a song written by Sonny Curtis of the Crickets and popularized by a cover by the Bobby Fuller Four, which went on to become a top-ten hit for the band in 1966.",
    link: "0bGs5sExEas"
  },
  {
    id: 43,
    title: "I'm a lonesome fugitive",
    artist: "Merl Haggard",
    description: "The song I'm a Lonesome Fugitive brought Haggard country stardom. Although it sounds autobiographical (Haggard had done time at San Quentin), it was actually written by Liz Anderson and her husband, Casey, while driving cross country. Haggard felt a connection to the song immediately and when it was released it became his first number one country hit.",
    link: "-HQwQDBSKS8"
  },
  {
    id: 42,
    title: "Suspicious Minds",
    artist: "Elvis Presley",
    description: "Suspicious Minds is a 1968 song written and first recorded by American songwriter Mark James. After this recording failed commercially, it was cut by Elvis Presley with producer Chips Moman, becoming a No.1 song in 1969, and one of the most memorable hits of Presley's career.",
    link: "nQp9c0hgl2o"
  },
  {
id: 41,
title: "Somebody Help Me",
artist: "The Spencer Davis Group",
description: "Somebody Help Me became the band's second consecutive number-one hit in the UK Singles Chart, staying at the summit for two weeks in April 1966. In the US, the song peaked at number forty-seven.",
link: "PWgOk-UNF2E" 
  },
  {
    id: 40,
    title: "The Great Pretender",
    artist: "The Platters",
    description: "The Great Pretender is a popular song recorded by The Platters, with Tony Williams on lead vocals, and released as a single in November 1955. The song reached No. 1 on Billboard's Top 100, and No. 5 on the UK charts",
    link: "qUqGTIFZ72I"
  },
  {
    id: 39,
    title:"Pretty Flamingo",
    artist:"Manfred Man",
    description:"The single reached number one in the UK Singles Chart on 5 May 1966. Manfred Mann's recording was a minor hit in the United States where it spent eight weeks on Billboard 's Hot 100 chart, peaking at number 29 during the week of August 6, 1966",
    link:"K7bRFYUF_6g"
  },
  {
    id:38,
    title: "Let's Dance",
    artist: "Chris Montez",
    description: "The personnel on the original recording included Joel Hill on guitar, Ray Johnson on Philicorda organ, Ray Pohlman on bass guitar and Jesse Sailes on drums. When initially released, the song shot to #4 in the U.S chart and to #2 in the UK Chart.",
    link: "J-niB8cxXVs"
  },
  {
    id: 37,
    title: "Candida",
    artist: "Tony Orlando",
    description: "Candida became a worldwide hit, reaching number one in five countries, and the top ten in many others, including number 3 in the USA.",
    link: "UyOYq50UnSg"
  },
  {
    id: 36,
    title: "A thing called love",
    artist: "Johnny Cash",
    description: "A Thing Called Love is the 39th overall album by country singer Johnny Cash, released on Columbia Records in 1972. The title song, written by Jerry Reed, was released successfully as a single, reaching No. 2 on the country charts",
    link: "rgAoIVcbvu4"
  },
  {
    id: 35,
    title: "Promised Land",
    artist: "Elvis Presley",
    description: "Promised Land is the twenty-first studio album by American singer and musician Elvis Presley, released by RCA Records on January 8, 1975. It was recorded in December 1973 at Stax Records studios in Memphis and released on Presley's 40th birthday in January, 1975",
    link: "09HQ8jbBM_Q"
  },
  {
    id: 34,
    title: "You got it",
    artist: "Roy Orbison",
    description: "You Got It is a song from Roy Orbison's twenty-second studio album, Mystery Girl (1989). The song was released posthumously in January 1989 with The Only One as the B-side, and according to the Official Roy Orbison Discography by Orbison researcher Marcel Riesco, released again with Crying shortly thereafter.",
    link: "Oq2HPVdxWQ4"
  }, 
  {
    id: 33,
    title: "I only want to be with you",
    artist: "Bay City Rollers",
    description: "Three remakes of the song have been UK chart hits, the first two by the Bay City Rollers (1976) and The Tourists (1979) matching the number 4 peak of the Dusty Springfield original, while the 1989 remake by Samantha Fox peaked at number 16.",
    link: "CQx60GNuK_k"
  },
    {
    id: 32,
    title: "Sukiyaki",
    artist: "Kyu Sakamoto",
    description: "",
    link: "7i2gY4nuMgY"
  },
  {
    id: 31,
    title: "Love you forever and ever",
    artist: "Randy Travis",
    description: "",
    link: "N3V2PsqgmJ0"
  },
  {
    id: 30,
    title: "Treat me Nice",
    artist: "Elvis Presley",
    description:
      "Treat Me Nice is a song recorded by Elvis Presley. The song was included in the musical revue Smokey Joe's Cafe. The song was featured prominently in the film Jailhouse Rock.",
    link: "Q4ZTJnTj-PY",
  },
   { id : 29,
    title : "Love is in the Air",
    artist : "John Paul Young", 
    description : "Love Is in the Air is a 1977 disco song sung by John Paul Young and became a worldwide hit in 1978. At the Australian 1978 King of Pop Awards the song won Most Popular Australian Single",
    link : "3AaWcHduYh4"
  },
  {
    id : 28,
    title: "Crazy Little Thing called Love",
    artist: "Queen",
    description: "Having composed Crazy Little Thing Called Love on guitar, Mercury played rhythm guitar while performing the song live, which was the first time he played guitar in concert with Queen",
    link: "1-Hi17dEpA4"
  },
  {
    id: 27,
    title: "Hillbilly Rock",
    artist: "The Woolpackers",
    description:
      "Hillbilly Rock is a song written by Paul Kennerley, and recorded by American country music artist Marty Stuart. It was released in March 1990 as the third single and title track from the album Hillbilly Rock",
    link: "_PqagAEVvXk",
  },
  {
    id: 26,
    title: "Shang-a-lang",
    artist: "Bay City Rollers",
    description: "",
    link: "oIHEgzALE68",
  },
  {
    id: 25,
    title: "Chatahoochee",
    artist: "Alan Jackson",
    description: "",
    link: "ZdlHQyJ-Zzc",
  },
  {
    id: 24,
    title: "Rhinestone Cowboy",
    artist: "Glen Campbell",
    description:
      "Rhinestone Cowboy is a song written by Larry Weiss and most famously recorded by American country music singer Glen Campbell. When released in 1975, it enjoyed huge popularity with both country and pop audiences",
    link: "5zy4zrl6FJ0",
  },
  {
    id: 23,
    title: "Help me make it through the night",
    artist: "Kris Kristofferson",
    description: "",
    link: "b0dAGQJNenY",
  },
  {
    id: 22,
    title: "Wonderful Tonight",
    artist: "Eric Clapton",
    description: "",
    link: "sEVY-unOC7k",
  },
  {
    id: 21,
    title: "Up on the Roof",
    artist: "The Drifters",
    description: "",
    link: "AHJGmKum4BU",
  },
  {
    id: 20,
    title: "Tiger Feet",
    artist: "Mud",
    description:
      "Tiger Feet is a popular song by the English glam rock band Mud, released in January 1974",
    link: "EVDMnbrLSs8",
  },
  {
    id: 19,
    title: "Mama Tried",
    artist: "Merle Haggard & The Strangers",
    description:
      "In Mama Tried, Haggard focuses on the pain and suffering he caused his own mother by being incarcerated in 1957 in San Quentin.",
    link: "yc0DvTShwS0",
  },
  {
    id: 18,
    title: "Girl of my Best Friend",
    artist: "Elvis Presley",
    description: "",
    link: "v9HG-tC6y50",
  },
  {
    id: 17,
    title: "Little Deuce Coupe",
    artist: "The Beach Boys",
    description: "",
    link: "ZkdTI10EfBI",
  },
  {
    id: 16,
    title: "White Wedding",
    artist: "Billy Idol",
    description:
      "White Wedding is a song by Billy Idol that was released as the second single from his self-titled studio album in 1982. Although not Idol's highest-charting hit, it is often considered one of his most recognizable songs.",
    link: "GrgQPR3u6z4",
  },
  {
    id: 15,
    title: "Boot scootin boogie",
    artist: "Brooks and Dunn",
    description:
      "The song's success is credited with having sparked a renewed interest in line dancing throughout the United States.",
    link: "vMjHPMZvyfE",
  },
  {
    id: 14,
    title: "The Irish Rover",
    artist: "The Pogues and The Dubliners ",
    description:
      "The Irish Rover is an Irish folk song about a magnificent though improbable sailing ship that reaches an unfortunate end. ",
    link: "Obn7unMR4jw",
  },
  {
    id: 13,
    title: "At the Club",
    artist: "The Drifters",
    description: "",
    link: "UX8VEjPMOA8",
  },
  {
    id: 12,
    title: "Forever in Blue Jeans",
    artist: "Neil Diamond",
    description:
      "Diamond said about the song: the simple things are really the important things",
    link: "qS7hpXphVX0",
  },
  {
    id: 11,
    title: "Sunny Afternoon",
    artist: "The Kinks",
    description:
      "Its strong music hall flavour and lyrical focus was part of a stylistic departure for the band, which had risen to fame in 1964–65 with a series of hard-driving, power-chord rock hits.",
    link: "5m92XqS8-f0",
  },
  {
    id: 10,
    title: "Happy Together",
    artist: "The Turtles",
    description:
      "Released as a single in February 1967, the song knocked the Beatles Penny Lane out of the number one slot on the US Billboard Hot 100 and remained atop the chart for three weeks.",
    link: "oaOg0PurM0A",
  },
  {
    id: 9,
    title: "If I can dream",
    artist: "Elvis Presley",
    description:
      "If I Can Dream is a song made famous by Elvis Presley and notable for its direct quotations of Martin Luther King Jr.'s 1963 I Have a Dream speech",
    link: "MOjHp2kQwaw",
  },
  {
    id: 1,
    title: "Walk of Life",
    artist: "Dire Straits",
    link: "0kJKk0F-J_g",
  },
  {
    id: 2,
    title: "Save the last dance for me",
    artist: "Bruce Springsteen",
    link: "tKNenaTkM08",
  },
  {
    id: 3,
    title: "World without love",
    artist: "The Mavericks",
    link: "nQbbFTHBIVk",
  },
  {
    id: 4,
    title: "Sealed with a Kiss",
    artist: " Brian Hyland",
    link: "SLpZuhUxX1o",
  },
  {
    id: 5,
    title: "Only You",
    artist: "Elvis Presley",
    link: "ctp5qvOF7Mw",
  },
  {
    id: 6,
    title: "I Like It",
    artist: "Gerry and the Pacemakers",
    link: "M9ns1-zT5aU",
  },
  {
    id: 7,
    title: "Rockabilly Rebel",
    artist: "Matchbox",
    link: "hNShI0oKk8Q",
  },
  {
    id: 8,
    title: "Ring of Fire",
    artist: "Johnny Cash",
    link: "8sur4I10Fg4",
  },
];

const images = [
  {
    id: 1,
    link: "/assets/gallery/photo1.jpg",
  },
  {
    id: 2,
    link: "/assets/gallery/photo2.jpg",
  },
  {
    id: 3,
    link: "/assets/gallery/photo3.jpg",
  },
  {
    id: 4,
    link: "/assets/gallery/photo4.jpg",
  },
  {
    id: 5,
    link: "/assets/gallery/photo5.jpg",
  },
  {
    id: 6,
    link: "/assets/gallery/photo6.jpg",
  },
  {
    id: 7,
    link: "/assets/gallery/photo7.jpg",
  },
  {
    id: 8,
    link: "/assets/gallery/photo8.jpg",
  },
  {
    id: 9,
    link: "/assets/gallery/photo9.jpg",
  },
  {
    id: 10,
    link: "/assets/gallery/photo10.jpg",
  },
  {
    id: 11,
    link: "/assets/gallery/photo11.jpg",
  },
  {
    id: 12,
    link: "/assets/gallery/photo12.jpg",
  },
  {
    id: 13,
    link: "/assets/gallery/photo13.jpg",
  },
  {
    id: 14,
    link: "/assets/gallery/photo14.jpg",
  },
];

const news = [
  {
    title: "CD Volume 2",
    text: "Here it is, the long awaited Father and Son The Karaoke Kings Golden Oldies Volume 2",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/280024873685748",
  },
  {
    title: "Wals Waffle",
    text: "Catch up on the latest announcements with Wal",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/464424861513084/?__tn__=-R"
  },
  {
    title: "Dions Waffle",
    text: "Catch up on the latest announcements with Dion",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/2899569050282064/?__tn__=-R"
  },
  {
    title: "Western Wednesdays",
    text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe adn hit that bell to be notified whenever our videos go live",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/163169632427502/?__tn__=-R"
  },
  {
    title: "Tupelo Tuesday. Devil in Disguise",
    text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/144042424424627/?__tn__=-R"
  },
  {
    title: "Wals waffle",
    text: "Catch up on the latest announcements with Wal",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/312889573732611"
  },
  {
    title: "Western Wednesday.  What made Milwaukee Famous'",
      text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
      link: "https://www.facebook.com/fatherandsonkaraoke/videos/557712051878066/"
    },
  {
    title: "Wals waffle",
    text: "Catch up on the latest announcements with Wal and Dion",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/vb.112197893801781/"
  },
  {
    title: "Tupelo Tuesday. The Wonder of You",
    text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/3038043243091393"
  },
  {
    title: "Wals waffle",
    text: "Catch up on the latest announcements with Wal",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/308988234122745"
  },
  {
    title: "Debby's Drivel",
    text: "Catch up on the latest announcements with Debby",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/308279850860250"
  },
  {
    title: "210k Followers",
    text: "We now have over 210k followers on our Facebook page. Thank you to everyone who are liking, sharing and commenting on our videos and posts, we couldn't have done this without you!",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/307608127594089"
  },
  {
    title: "Jordan Banks",
    text: "A special song dedicated to Jordan Banks. Rest in peace young man. ⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/307008887654013"
  },
  {
    title: "American folk music Wednesday",
    text: "Check out Dion's latest video as he sings Blue blue day by Don Gibson; with a surprise guest at around 37 secs into the video...",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/306298961058339"
  },
  {
    title: "Wals Waffle",
    text: "Catch up on the latest announcement and shout outs with Wal and special guest, Dion!",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/1160952327740520/?__tn__=-R"
  },
  {
    title: "Wals Waffle",
    text: "Catch up on the latest announcements with Wal",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/911410012763964/?__tn__=-R"
  },
  {
    title: "Western Wednesday.  Hey Good Lookin'",
      text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
      link: "https://www.facebook.com/fatherandsonkaraoke/posts/301761988178703"
    },
  {
title: "Tupelo Tuesday. I just can't help believing",
text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
link: "https://www.facebook.com/fatherandsonkaraoke/videos/260570329125430/?__tn__=-R"},
    {
    title: "Anniversary update",
    text: "Thank you to everyone who tuned into the anniversary show, we've already surpassed £2.4k in generous donations for Fleetwood RNLI!",
    link: "https://www.facebook.com/fatherandsonkaraoke/photos/a.115098416845062/299916975029871/?type=3&__xts__[0]=68.ARDsiPlxYNNpNy3EZ3yScKLqBoLsmJQ3AWibd81vQh-3nIqjR5pHasQ5qX3CEITgVQ7XWr5bZzQys4oQilGshHtD7wjRKTMjSOURmtcxOiqCpih5bc4EHxl4vMhyrakPQTx0eofY8rj1D_Ym_PkI-ua46aX95aJW0E9-3XReE71rbVd5lSejudfGjCh2Do1ccWAAafTuxK3ewZugtLjenm6omIchcncc1jMbsoFbeYJ7W9Fe7FXMiTb1ZrE5H7o4ZzpGP4HTbiib17GEexCOCux-8JmM-GkQZ8C7CDURCHy2JwefLNU"
  },
    {
    title: "Debbys Drivel",
    text: "Catch up on the latest announcements with Debby",
  link: "  https://www.facebook.com/fatherandsonkaraoke/videos/981878559292461/?__tn__=-R",
  },

  {
    title: "Wals waffle",
    text: "Catch up on the latest announcments with Wal",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/298507511837484"
  },
  {
    title: "Debbys Drivel",
    text: "Catch up on the latest announcements with Debby",
  link: "https://www.facebook.com/fatherandsonkaraoke/posts/297834138571488",
  },
  {
  title: "Western Wednesday.  I'm a lonesome fugitive. Merl Haggard.",
    text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/297244521963783"
  },
{
title: "Tupelo Tuesday. Suspicious Minds",
text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
link: "https://www.facebook.com/watch/?v=471242420866337"},
  {
    title: "Anniversary update",
    text: "Thank you to everyone who tuned into the anniversary show, we've already surpassed £2.4k in generous donations for Fleetwood RNLI!",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/295150708839831?__tn__=-R"
  },
  {
    title: "Wal's waffle",
    text: "Catch up on the latest announcements from Wal, and remember; be happy, be safe, love each other and a smile goes around the world!!",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/295967718758130"
  },
  {
    title: "Todays announcements",
    text: "Catch up on the latest announcements from Debby, featuring a special guest!",
    link: "https://www.facebook.com/fatherandsonkaraoke/videos/501677604577617/?__tn__=-R"
  }, 
  {
    title: "Western Wednesday. A thing called love.",
    text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/292654029089499",
  },
  {
    title: "Tupelo Tuesday. Promised Land.",
    text: "Check out the latest videos anytime on our YouTube channel. Make sure to like and subscribe and hit that bell to be notified whenever our videos go live",
    link: "https://www.facebook.com/fatherandsonkaraoke/posts/292022332486002",
  },
// {
//     title: "1st Anniversary Live Show",
//     text: "Not long to go now until our live anniversary show, make sure to join us 24th April 2021 19:30 GMT",
//     link: "https://www.facebook.com/fatherandsonkaraoke/posts/291392872548948",
//   }
]

const shop = [
  {
    title: "Lockdown 2020 Father and Son",
    description: "Golden Oldies Volume 1",
    link: "https://www.ebay.co.uk/itm/Father-and-son-Karaoke-CD1/114877127433",
    image: "https://i.ebayimg.com/images/g/sJwAAOSwDl5gaz2d/s-l1600.jpg",
    image2: "/assets/cd_image_back.jpg",
    alt: "Father and Son CD"
  },
  {
    title: "Father and Son CD 2",
    description: "Golden Oldies Volume 2",
    link: "https://www.ebay.co.uk/itm/Father-And-Son-CD-2/114824431477",
    image: "https://i.ebayimg.com/images/g/z14AAOSw2INgZuei/s-l1600.jpg",
    image2: "/assets/cd_image_2_back.jpg",
    alt: "Father and Son CD - 2"
  },
]

const loadVideos = () => {
  const music__container = document.querySelector(".music__container");
  for (let item = 0; item < 4; item++) {
    const music__box = document.createElement("div");
    music__box.classList.add("music__box");

    const music__title = document.createElement("h6");
    music__title.classList.add("music__title");
    music__title.classList.add("heading");
    music__title.innerHTML = videos[item].title;

    const music__artist = document.createElement("p");
    music__artist.classList.add("music__artist");
    music__artist.classList.add("sub__heading");
    music__artist.innerHTML = videos[item].artist;

    const music__video = document.createElement("iframe");

    music__video.setAttribute("src","https://www.youtube.com/embed/" + videos[item].link + "?controls=0")
    music__video.setAttribute("title","YouTube Video Player");
    music__video.style.width = "280px";
    music__video.style.height = "300px";
    music__video.setAttribute("frameborder", "0");
    music__video.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    music__video.setAttribute("loading", "lazy");

    music__box.appendChild(music__title);
    music__box.appendChild(music__artist);
    music__box.appendChild(music__video);

    music__container.appendChild(music__box);
  }
}

const loadImages = () => {
  const galleryContainer = document.querySelector(".gallery__container");
  for (let i = 0; i < 14; i++) {
    const img = document.createElement("img");
    img.setAttribute('src', images[i].link);
    img.setAttribute('alt', "Image of the Father and Son Karaoke Kings team");
    img.setAttribute('loading', "lazy");

    galleryContainer.appendChild(img);
  }
}

const imageSlider = () => {
  const heroImage = document.querySelector("#image__slider");
  heroImage.src = images[1].link;
  let i = 2;
  setInterval(() => {
    heroImage.src = images[i].link
    i = i + 1
    if (i > 12) {
      i = 1
    }
  }, 5000)
  
}

const loadNews = () => {
  const newsContainer = document.querySelector(".news__container");

  for (let i = 0; i < (news.length <= 3 ? news.length : 4); i++) {
    const newsItem = document.createElement("div");
    const newsHeadline = document.createElement("h6");
    const newsText = document.createElement("p");
    const newsLink = document.createElement("a");

    newsHeadline.classList.add("sub__heading");
    newsHeadline.innerHTML = news[i].title;

    newsText.classList.add("text");
    newsText.innerHTML = news[i].text;

    newsLink.setAttribute('href', news[i].link);
    newsLink.setAttribute('target', '_blank');
    newsLink.setAttribute('rel', 'noreferrer');
    newsLink.setAttribute('aria-label', 'Click to read more on Facebook');
    newsLink.innerHTML = "Click to read more";

    newsItem.appendChild(newsHeadline);
    newsItem.appendChild(newsText);
    newsItem.appendChild(newsLink);
    newsContainer.appendChild(newsItem);
  }
}

const loadShop = () => {
const shopContainer = document.querySelector(".shop__container");
shop.forEach((shop) => {
  const item = document.createElement("div");
  const title = document.createElement("h6");
  const description = document.createElement("p");
  const link = document.createElement("a");
  const image = document.createElement("img");

  title.innerHTML = shop.title;
  title.classList.add("sub__heading");

  description.innerHTML = shop.description;
  description.classList.add("text");

  link.setAttribute("href", shop.link);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer");
  link.setAttribute("aria-label", "Click to view item on Ebay");

  image.setAttribute("src", shop.image);
  image.setAttribute("alt", shop.alt);
  image.setAttribute("loading", "lazy");

  link.appendChild(image);

  item.appendChild(title);
  item.appendChild(description);
  item.appendChild(link);
  shopContainer.appendChild(item);
})
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

const toggleDarkMode = () => {
  const body = document.querySelector('body');
  body.classList.toggle('dark');
}

const updateHeroContainer = () => {
 const heroName = document.querySelector(".hero-name");
 const heroArtist = document.querySelector(".hero-artist");
 const heroDescription = document.querySelector(".hero-description");
 const heroLink = document.querySelector(".hero-cta-link");

 heroName.innerHTML = videos[0].title;
 heroArtist.innerHTML = videos[0].artist;
 heroDescription.innerHTML = videos[0].description;
 heroLink.href = "https://youtu.be/" + videos[0].link;
}



document.addEventListener("scroll", () => {
  const scrollPos = window.innerHeight * 0.8;
  const sections = document.querySelectorAll('.section');
  const menuItems = document.querySelectorAll('.menu__item');

  for ( let i = sections.length - 1; i >= 0; i-- ) {
    if ( scrollPos > sections[i].getBoundingClientRect().top && sections[i].getBoundingClientRect().top >= 0) {
      menuItems.forEach((item) => {
        if ( item.hash === `#${sections[i].id}`) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })
    }
  }
})

const countdown = () => {
  const countdownDate = new Date("24 April 2021, 19:30 GMT+02:00");
  const countdownTimer = setInterval(() => {
    const now = new Date();
const timeNow = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    const timeDifference = countdownDate - timeNow;
    if ( timeDifference <= 0 ) {
      clearInterval();
    } else {
    const days = Math.floor(timeDifference / ( 1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % ( 1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60 ));
    const mins = Math.floor((timeDifference % ( 1000 * 60 * 60)) / ( 1000 * 60 ));
    const secs = Math.floor((timeDifference % ( 1000 * 60)) / ( 1000 ));

    const dayField = document.querySelector('#days');
    const hourField = document.querySelector('#hours');
    const minField = document.querySelector('#minutes');
    const secsField = document.querySelector('#seconds');

    dayField.innerHTML = days;
    hourField.innerHTML = hours;
    minField.innerHTML = mins;
    secsField.innerHTML = secs;
    }
  }, 1000)
}

  loadVideos();
  loadImages();
  // loadNews();
  loadShop();
  updateHeroContainer();
  // imageSlider();
