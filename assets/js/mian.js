const elRender = document.querySelector(".js-skills");
const elTemplate = document.querySelector(".js-template").content;

var typed = new Typed(".typing", {
  strings: ["Web Developer!", "Backend Developer!", "NodeJs Coder!"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
(allSection = document.querySelectorAll(".section")),
  (totalSection = allSection.length);
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    shaowSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function shaowSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  shaowSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Skills data
const skills = [
  {
    id: 1,
    title: "JavaScript",
    desc: "Mocha, LiveScript, JavaScript",
    img: "./assets/images/js.svg",
    content: {
      title: "JavaScript",
      desc: "JavaScript is a versatile programming language primarily used for web development. It enables dynamic content, interactive features, and enhances user experience on websites. Developers utilize JavaScript frameworks to streamline coding and build robust applications.",
    },
  },
  {
    id: 2,
    title: "NodeJS",
    desc: "Asynchronous JavaScript runtime.",
    img: "./assets/images/node.svg",
    content: {
      title: "NodeJS",
      desc: "Node.js is a powerful runtime environment that allows developers to run JavaScript on the server side. It enables building scalable applications and supports asynchronous programming, enhancing performance and efficiency in web development.",
    },
  },
  {
    id: 3,
    title: "ExpressJS",
    desc: "NodeJS application framework.",
    img: "./assets/images/express.svg",
    content: {
      title: "ExpressJS",
      desc: "Express.js is a minimal and flexible Node.js web application framework. It simplifies the process of building robust web applications and APIs, providing essential features for routing, middleware, and server-side rendering.",
    },
  },
  {
    id: 4,
    title: "EJS",
    desc: "Embedded JavaScript templates",
    img: "./assets/images/ejs.svg",
    content: {
      title: "EJS",
      desc: "EJS (Embedded JavaScript) is a templating engine for Node.js. It enables dynamic HTML generation by embedding JavaScript code within HTML files, simplifying the creation of reusable templates and enhancing web application development.",
    },
  },
  {
    id: 5,
    title: "TelegramBot",
    desc: "Messaging automation tool.",
    img: "./assets/images/telegram.svg",
    content: {
      title: "TelegramBot",
      desc: "A Telegram bot is an automated software application that interacts with users on the Telegram platform. It can handle messages, respond to commands, and provide information, enhancing user engagement and automation in various tasks.",
    },
  },
  {
    id: 6,
    title: "Git",
    desc: "Global Information Tracker",
    img: "./assets/images/git.svg",
    content: {
      title: "Git",
      desc: "Git is a distributed version control system that tracks changes in source code. It allows multiple developers to collaborate on projects, manage code revisions, and maintain a history of changes efficiently and effectively.",
    },
  },
  {
    id: 7,
    title: "GitHub",
    desc: "GitHub online platform",
    img: "./assets/images/3d-fluency-github-logo.png",
    content: {
      title: "GitHub",
      desc: "GitHub is a web-based platform for version control using Git. It facilitates collaboration on software projects, offering features like issue tracking, pull requests, and project management tools, enhancing team productivity and code sharing.",
    },
  },
  {
    id: 8,
    title: "GraphQL",
    desc: "Graph query language",
    img: "./assets/images/graphql.svg",
    content: {
      title: "GraphQL",
      desc: "GraphQL is a query language for APIs that allows clients to request specific data. It enables efficient data fetching, reduces over-fetching, and improves flexibility, making it easier for developers to work with complex data structures.",
    },
  },
  {
    id: 9,
    title: "Websocket.IO",
    desc: "Real-time communication library.",
    img: "./assets/images/socket.png",
    content: {
      title: "Websocket.IO ",
      desc: "Socket.IO is a JavaScript library for real-time web applications. It enables bi-directional communication between clients and servers, supporting WebSocket and fallback protocols, facilitating event-based communication and enhancing user interaction in applications.",
    },
  },
  {
    id: 10,
    title: "MongoDB",
    desc: "NoSQL document database.",
    img: "./assets/images/mongodb.svg",
    content: {
      title: "MongoDB",
      desc: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It provides high performance, scalability, and ease of use, making it ideal for handling large volumes of unstructured data in modern applications.",
    },
  },
  {
    id: 11,
    title: "Postgresql",
    desc: "Relational database management.",
    img: "./assets/images/postgresql.svg",
    content: {
      title: "Postgresql",
      desc: "PostgreSQL is an advanced, open-source relational database management system. It supports SQL compliance, ACID transactions, and extensibility, making it suitable for complex applications requiring robust data integrity and reliability.",
    },
  },
  {
    id: 12,
    title: "Sequelize",
    desc: "Promise-based ORM.",
    img: "./assets/images/sequelize.jpg",
    content: {
      title: "Sequelize",
      desc: "Sequelize is a promise-based ORM for Node.js that simplifies database interactions. It supports various SQL dialects, enabling developers to manage models, relationships, and queries efficiently while promoting clean and maintainable code.",
    },
  },
  {
    id: 13,
    title: "Prisma",
    desc: "Type-safe database toolkit.",
    img: "./assets/images/prisma.svg",
    content: {
      title: "Prisma",
      desc: "Prisma is a modern ORM for Node.js and TypeScript that streamlines database access. It provides type safety, auto-completion, and powerful querying capabilities, allowing developers to build efficient, scalable applications with ease.",
    },
  },
  {
    id: 14,
    title: "Redis",
    desc: "In-memory data store.",
    img: "./assets/images/redis.png",
    content: {
      title: "Redis",
      desc: "Redis is an in-memory data structure store, used as a database, cache, and message broker. It offers high performance, persistence, and support for various data types, making it ideal for real-time applications.",
    },
  },
  {
    id: 15,
    title: "Restful API",
    desc: "Stateless web services.",
    img: "./assets/images/restapi.png",
    content: {
      title: "Restful API",
      desc: "A RESTful API is an architectural style for designing networked applications. It uses standard HTTP methods, such as GET, POST, PUT, and DELETE, to interact with resources, promoting stateless communication and scalability.",
    },
  },
  {
    id: 16,
    title: "OAuth2.0",
    desc: "Authorization delegation framework.",
    img: "./assets/images/oauth.svg",
    content: {
      title: "OAuth2.0",
      desc: "OAuth 2.0 is an authorization framework that enables third-party applications to access user data without exposing credentials. It allows users to grant limited access securely, enhancing privacy and improving user experience across platforms.",
    },
  },
  {
    id: 17,
    title: "Typescript",
    desc: "Static typed JavaScript.",
    img: "./assets/images/typescript.svg",
    content: {
      title: "Typescript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit nesciunt possimus eligendi doloribus perspiciatis placeat voluptatem, beatae aut doloremque harum mollitia nostrum quam exercitationem illo ab repellendus voluptatibus corrupti!",
    },
  },
  {
    id: 18,
    title: "NestJS",
    desc: "Progressive Node.js framework.",
    img: "./assets/images/nestjs.svg",
    content: {
      title: "NestJS",
      desc: "NestJS is a progressive Node.js framework for building efficient, scalable server-side applications. It uses TypeScript and incorporates design patterns like dependency injection, promoting modular architecture and enhancing developer productivity.",
    },
  },
  {
    id: 19,
    title: "Docker",
    desc: "Containerization platform tool.",
    img: "./assets/images/docker.svg",
    content: {
      title: "Docker",
      desc: "Docker is a platform for developing, shipping, and running applications in containers. It enables consistent environments, improves scalability, and simplifies deployment, allowing developers to package software with all dependencies seamlessly.",
    },
  },

];

// Skills data render
function rednerFn(arr, node) {
  const docFrg = document.createDocumentFragment();
  arr.forEach((item) => {
    const clone = elTemplate.cloneNode(true);
    clone.querySelector(".js-title").textContent = item.title;
    clone.querySelector(".js-desc").textContent = item.desc;
    clone.querySelector(".js-img").src = item.img;
    clone.querySelector(".js-img").alt = item.title;
    clone.querySelector(".js-skills-wrapper").dataset.dataId = item.id;
    docFrg.appendChild(clone);
  });
  node.appendChild(docFrg);
}
rednerFn(skills, elRender);

// Modal open
elRender.addEventListener("click", (evt) => {
  evt.preventDefault();
  const dataId = evt.target.closest(".js-skills-wrapper").dataset.dataId;
  skills.forEach((item) => {
    if (Number(item.id) === Number(dataId)) {
      const data = item.content;
      document.querySelector(".js-modal-img").src = item.img;
      document.querySelector(".js-modal-img").alt = data.title;
      document.querySelector(".js-modal-title").textContent = data.title;
      document.querySelector(".js-modal-desc").textContent = data.desc;

      document.querySelector(".js-modal").style.transform = "translateX(0)";
    }
  });
});

// Modal Close
document.querySelector(".js-modal-close").addEventListener("click", (evt) => {
  evt.preventDefault();
  document.querySelector(".js-modal").style.transform = "translateX(100%)";
});
