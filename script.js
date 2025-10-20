const projects = [
    {
    title: "ShopLite Online Shop Web App",
    description: "Clear interface and a bit more than just basic functionality. Shopping cart working with session data, filtering and sorting products and a fully fledged admin panel.",
    image: "images/shopLite.png",
    tags: ["C#", "ASP.NET Core MVC", "EF Core", "Azure"],
    liveUrl: "https://shoplite-digidoo-g7hybdamecbbfbfj.polandcentral-01.azurewebsites.net/",
    repoUrl: "https://github.com/digidoo-dev/ShopLite"
  },
  {
    title: "MiniMag Warehouse Web App",
    description: "A tiny application for keeping track of items in a warehouse. CRUD operations for items and suppliers, handling intakes and issues.",
    image: "images/minimag.png",
    tags: ["C#", "ASP.NET Core MVC", "EF Core", "Azure"],
    liveUrl: "https://minimag-digidoo-dtg7hye3b0g8cef2.polandcentral-01.azurewebsites.net/",
    repoUrl: "https://github.com/digidoo-dev/MiniMag"
  },
  {
    title: "Frog Skip Game",
    description: "A casual multiplayer game where you control a frog. Built in Unity using Unity's Multiplayer Services and the Netcode for GameObjects package.",
    image: "images/Frog_Skip_Logo.png",
    tags: ["C#", "Unity", "Multiplayer", "Netcode for GO"],
    liveUrl: "https://play.unity.com/en/games/9d736a15-d049-4244-ab11-7244bf402100/frog-skip",
    repoUrl: "https://github.com/digidoo-dev/Frog-Skip-Game"
  },
  {
    title: "The King's Will Game (Work in progress)",
    description: "A city building game I am currently working on.",
    image: "images/the_kings_will_title.jpg",
    tags: ["C#", "Unity"],
    liveUrl: "https://play.unity.com/en/games/3cdd8184-d6b9-400b-a632-723f6ce0f550/the-kings-will",
    repoUrl: "https://github.com/digidoo-dev/TheKingsWill-Game"
  },
  {
    title: "Paint Math Web App",
    description: "A web app that paints mathematical equations on a coordinate system.",
    image: "images/paint_math.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://digidoo-dev.github.io/Paint-Math/",
    repoUrl: "https://github.com/digidoo-dev/Paint-Math"
  },
  {
    title: "Connect Four Web Game",
    description: "A web game for two players - connect four chips of your color in a row to win.",
    image: "images/connect_four.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://digidoo-dev.github.io/connect-four-web-game/",
    repoUrl: "https://github.com/digidoo-dev/connect-four-web-game"
  }
];

// ====== GENEROWANIE HTML ======
const container = document.getElementById("projects-container");

projects.forEach(project => {
  // Tworzymy element główny karty
  const card = document.createElement("div");
  card.classList.add("project-card");

  // Wnętrze karty (HTML z danymi z tablicy)
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="project-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="links">
        <a href="${project.liveUrl}" class="btn live" target="_blank">Live Demo</a>
        <a href="${project.repoUrl}" class="btn repo" target="_blank">Repository</a>
      </div>
    </div>
  `;

  // Dodajemy kartę do kontenera
  container.appendChild(card);
});