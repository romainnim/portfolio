import React from "react";
import { DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";

export const projects = [
  {
    id: "proj17",
    name: "Waldo Game (photo tagging app)",
    thumbnail: "./assets/img/projects/thumbnails/thumb-waldo.jpg",
    images: [
      "./assets/img/projects/waldo/waldo2.jpg",
      "./assets/img/projects/waldo/waldo1.jpg",
      "./assets/img/projects/waldo/waldo3.jpg",
      "./assets/img/projects/waldo/waldo4.jpg",
    ],
    description: [
      "The goal of this project was to build something similar to a photo tagging app using ReactJS on the front-end and learn how to use Firebase/Firestore to run the back-end.",
      "To make things fun, I went with a Waldo Game where the player has to click on an image to find a set of characters. Whenever the player clicks on the image and selects a character, a feedback is always sent back to let him know whether he has found the character or not.",

      "This project was particularly interesting as it had me play with the window size, getting click coordinates and positioning elements with these coordinates. The clicks and selections logic happens on the front-end, whereas the backend is holding information about the different characters to find.",

      "If you are not familiar with Waldo, it's a game where the player has to find different characters in a totally bizarre scenery! Try it out in the live preview and see if you can make it to the leaderboard!",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
      {
        skillName: "firebase",
        skillIcon: <IoLogoFirebase />,
      },
    ],
    livedemo: "https://romainnm.github.io/waldo-firebase/",
    github: "https://github.com/romainnm/waldo-firebase",
  },
  {
    id: "proj16",
    name: "Happy Pie - Shopping Cart",
    thumbnail: "./assets/img/projects/thumbnails/thumb-shop.jpg",
    images: [
      "./assets/img/projects/shop/shopcart1.jpg",
      "./assets/img/projects/shop/shopcart2.jpg",
      "./assets/img/projects/shop/shopcart3.jpg",
    ],
    description: [
      'This project was made to piece together all my learning with ReactJS (heavily focused on functional components + hooks) and work with "react-router-dom" to manage the navigation to different pages.',
      "The main focus of this project wasn't so much to build a shop. But more so to focus on the shopping cart functionality which lets the user add, edit, delete products and have an immediate feedback of the products count and total price.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
    ],
    livedemo: "https://romainnm.github.io/shopping-cart/",
    github: "https://github.com/romainnm/shopping-cart",
  },
  {
    id: "proj15",
    name: "Memory Game",
    thumbnail: "./assets/img/projects/thumbnails/thumb-memory.jpg",
    images: ["./assets/img/projects/memory/memory.jpg"],
    description: [
      'This memory game was made to cement some of the new concepts I learned with ReactJS and especially how React Hooks work and how they can act similarly to the "lifecycle" of the Class components.',
      "Game rules: There are 10 images in total. You score 1 point everytime you click on a new fruit. If the fruit you clicked on was previously clicked, you lose and the score  resets. Of course, to make things more difficult, the game board is shuffled whenever an image is clicked! Challenge your memory and get the highest score! You can try the game in the live preview.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
    ],
    livedemo: "https://romainnm.github.io/memory-game/",
    github: "https://github.com/romainnm/memory-game/",
  },
  {
    id: "proj14",
    name: "Quick CV - CV App",
    thumbnail: "./assets/img/projects/thumbnails/thumb-cv.jpg",
    images: [
      "./assets/img/projects/cv/cv1.jpg",
      "./assets/img/projects/cv/cv2.jpg",
    ],
    description: [
      "Quick CV is an app that lets users input information and generate a very basic CV.",
      "That was the first project I made with ReactJS. Its main focus was to help me get the basics of ReactJS by learning how Class Components and Props work.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
    ],
    livedemo: "https://romainnm.github.io/cv-project",
    github: "https://github.com/romainnm/cv-project",
  },
  {
    id: "proj13",
    name: "Tic Tac Toe",
    thumbnail: "./assets/img/projects/thumbnails/thumb-tic.jpg",
    images: [
      "./assets/img/projects/tictactoe/tic1.jpg",
      "./assets/img/projects/tictactoe/tic2.jpg",
      "./assets/img/projects/tictactoe/tic3.jpg",
    ],
    description: [
      "This Tic Tac Toe game was made with the intent to explore the idea of privacy in JavaScript by implementing some of its concepts, such as the Module pattern using Immediately Invoked Function Expression (IIFE) and Closures.",
      "Module pattern is a great way to create private methods and properties. That means that we can protect any state/information within a function and only reveal specifics parts by returning them as public methods.",
      "The game is available in the live preview. Take a break and grab someone nearby to  challenge them to a Tic Tac Toe!",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "javascript",
        skillIcon: <DiJavascript />,
      },
    ],
    livedemo: "https://romainnm.github.io/tictactoe/",
    github: "https://github.com/romainnm/tictactoe/",
  },
  {
    id: "proj12",
    name: "myBookShelf",
    thumbnail: "./assets/img/projects/thumbnails/thumb-book.jpg",
    images: ["./assets/img/projects/mybookshelf/mybookshelf.jpg"],
    description: [
      "myBookShelf is a library app that will let you keep track of books you are reading",
      "This is your typical basic JavaScript app. It lets a user input information and renders them. It was made so I could get comfortable around DOM manipulation, instantiate objects and learn how to use the localStorage to store data.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "javascript",
        skillIcon: <DiJavascript />,
      },
    ],
    livedemo: "https://romainnm.github.io/project-library/",
    github: "https://github.com/romainnm/project-library/",
  },
  {
    id: "proj11",
    name: "The NewHab challenge",
    thumbnail: "./assets/img/projects/thumbnails/thumb-newhab.jpg",
    images: [
      "./assets/img/projects/newhab/01newhabchallenge.jpg",
      "./assets/img/projects/newhab/01newhab-logo.jpg",
      "./assets/img/projects/newhab/01pochette1.jpg",
    ],
    description: [
      "TheNewHab Challenge website was initially made to be paired with a podcast project aimed at building new healthy habits. Two episodes were made, but we eventually realized that the audio space wasn't our thing and the project faded.",
      "At the time, I took this opportunity to explore Ruby On Rails and SASS. You can see below some of the mockups I worked on, such as the website layout, logo and podcast cover.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj10",
    name: "TravelStep",
    thumbnail: "./assets/img/projects/thumbnails/thumb-travelstep.jpg",
    images: [
      "./assets/img/projects/travelstep/02travelstep.jpg",
      "./assets/img/projects/travelstep/02homePage.jpg",
      "./assets/img/projects/travelstep/02itineraire.jpg",
    ],
    description: [
      "I love travel and the idea of building a website around it has been in a corner of my head for awhile. I enjoy exploring ideas throught prototyping and mockups (mostly using Photoshop).",
      "After playing with different ideas, TravelStep was the most fruitful one. Below are some mockups I was playing with.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj09",
    name: "Portfolio Prototype",
    thumbnail: "./assets/img/projects/thumbnails/thumb-folio.jpg",
    images: [
      "./assets/img/projects/portfolioprototype/Prototype---Portfolio.jpg",
    ],
    description: [
      "This is an older portfolio of mine. It is mostly showcasing parts of the design process I take with projects.",
      "Before jumping into mockups, I usually like to breakdown the different visual pieces, into color palette, fonts, size and spacing. It helps me to be consistent throughout a project.",
      "I will then work on responsive mockups to have an idea of how a website will behave on mobile and web.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj08",
    name: "Personal Logo",
    thumbnail: "./assets/img/projects/thumbnails/thumb-logo.jpg",
    images: ["./assets/img/projects/personallogo/03personallogo.jpg"],
    description: [
      "Designing a logo often starts with doodling on a piece of paper. After spending some time on Behance and Dribbble, I got inspired and wanted to work on a logo concept for myself. You can see below some of the thought process.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj07",
    name: "DriftyFeet Logo",
    thumbnail: "./assets/img/projects/thumbnails/thumb-drifty.jpg",
    images: [
      "./assets/img/projects/driftyfeet/05drifty-proto1.jpg",
      "./assets/img/projects/driftyfeet/05proto2-2.jpg",
    ],
    description: [
      "I love travel and I have countless footage of them! To make use of them I started to make short clips to share with friends and family. DriftyFeet was born in this context because I wanted to add a logo to my videos!",
      "Below are some of the concepts I came up with.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj06",
    name: "Taiwan Bike Tour",
    thumbnail: "./assets/img/projects/thumbnails/thumb-taiwan.jpg",
    images: [
      "./assets/img/projects/taiwan/bike-taiwan-v2.jpg",
      "./assets/img/projects/taiwan/map.jpg",
    ],
    description: [
      "In 2015, I lived in Taiwan and loved it so much that I decided to get on a bike and tour the entire island for weeks!",
      "I was eventually invited to share my experience in a local event and made that flyer for that occasion.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj05",
    name: "Up'Generation new year card",
    thumbnail: "./assets/img/projects/thumbnails/thumb-upgcard.jpg",
    images: ["./assets/img/projects/upgeneration/07print.jpg"],
    description: [
      "At the time I was working at Up’Generation, it was customary to send a thank you/happy new year card to our partners.",
      "In this particular card, we wanted to emphasize gratefulness for our partnerships and wish an innovating year to all of them.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj04",
    name: "TAM Place",
    thumbnail: "./assets/img/projects/thumbnails/thumb-tamplace.jpg",
    images: ["./assets/img/projects/tamplace/06tamplace_home.jpg"],
    description: [
      "TAM Place is a social network for businesses powered by Up'Generation.",
      "I got hired as a Web Designer to revitalize the app design, and customized interfaces for our clients.",
      "Below is one of the user interface I worked on.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj03",
    name: "Lointains Espaces",
    thumbnail: "./assets/img/projects/thumbnails/thumb-le.jpg",
    images: [
      "./assets/img/projects/le/07lointain_espace.jpg",
      "./assets/img/projects/le/LE02.jpg",
      "./assets/img/projects/le/LE03.jpg",
    ],
    description: [
      "Lointains Espaces was a travel agency offering tour packages in Asia.",
      "The agency already had a logo and only needed a website. I took part in this project as a webdesigner and partner with a developer. Sadly, the website was taken down and the agency no longer exists due the pandemic.",
      "Below are some of the mockups I made.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj01",
    name: "Espoir18",
    thumbnail: "./assets/img/projects/thumbnails/thumb-e18.jpg",
    images: [
      "./assets/img/projects/espoir/08espoir18-1.jpg",
      "./assets/img/projects/espoir/08espoir18-2.jpg",
    ],
    description: [
      "Espoir18 is local association based in the 18th disctrict of Paris.",
      "I worked there as an intern to help them make posters to promote cultural, sport and artistic events to the youth of the local community.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj02",
    name: "Tank Logo/T-Shirt",
    thumbnail: "./assets/img/projects/thumbnails/thumb-tank.jpg",
    images: [
      "./assets/img/projects/tank/09TANK.jpg",
      "./assets/img/projects/tank/resultat.jpg",
    ],
    description: ["This logo was made for a local collective in my hometown"],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
];
