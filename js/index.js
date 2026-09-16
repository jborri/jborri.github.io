const portfolioData = {
  profile: {
    linkedinUrl: null
  },
  projects: [
    {
      id: "interactive-data-visualization",
      number: "01",
      title: "Interactive Data Visualization",
      shortTitle: "Interactive Data Visualization",
      resumeTracks: "Data Visualization",
      question: "How can multiple public datasets become clear, explorable visual stories?",
      toolsLine: "Observable · D3 · Geospatial data",
      tags: ["Observable Framework", "Observable Plot", "D3.js", "JavaScript", "Geospatial data"],
      overview: "A collection of interactive analytical stories covering city elections, water quality, transit staffing, and pollinator behavior.",
      approach: "Built responsive maps and comparative views with tooltips, annotations, temporal and categorical comparisons, and narrative structure.",
      output: "Published as a GitHub Pages site containing multiple interactive data stories.",
      limitations: "Each story is scoped to its source data and should be interpreted within the provenance and coverage documented in the project.",
      liveUrl: "https://jborri.github.io/Interactive-Data-Vis-Fall2025/",
      repositoryUrl: "https://github.com/jborri/Interactive-Data-Vis-Fall2025"
    },
    {
      id: "community-indicators",
      number: "02",
      title: "Community Indicators",
      shortTitle: "Community Indicators",
      resumeTracks: "Data Analysis · Data Visualization · Computational Biology",
      question: "How do social, health, economic, and governance indicators relate to reported social support?",
      toolsLine: "Python · Regression · Tableau",
      tags: ["Python", "pandas", "OLS", "Logistic regression", "Tableau"],
      overview: "An exploratory cross-national analysis combining social, health, economic, and governance indicators from multiple sources.",
      approach: "Cleaned and merged the datasets in Python, then used OLS and logistic regression to examine associations with reported social support.",
      output: "An exploratory Tableau dashboard supported by documented data provenance and analytical interpretation.",
      limitations: "The results describe associations rather than causal effects and remain sensitive to source coverage, measurement choices, and missing data.",
      liveUrl: "https://public.tableau.com/app/profile/joseph.borri/viz/CommunityIndicators_17224364594760/Dashboard1?publish=yes",
      repositoryUrl: "https://github.com/jborri/Community-Indicators"
    },
    {
      id: "genetic-variant-analysis",
      number: "03",
      title: "Genetic Variant Analysis",
      shortTitle: "Genetic Variant Analysis",
      resumeTracks: "Data Analysis · Computational Biology",
      question: "What can small biological datasets support—and where does prediction become unreliable?",
      toolsLine: "Python · scikit-learn · PhyloTree",
      tags: ["Python", "pandas", "scikit-learn", "UniProt", "PhyloTree"],
      overview: "Two exploratory biological-data workflows: mitochondrial haplogroup lookup and classification experiments using human insulin variant records.",
      approach: "Implemented mutation-based lookup and compared random-forest experiments using bootstrap estimates, cross-validation, and grid search.",
      output: "A reproducible repository containing the lookup workflow, preprocessing, exploratory models, and supporting documentation.",
      limitations: "Missing labels, class imbalance, and small samples limit predictive interpretation; the classification work is presented as an experiment rather than a validated clinical model.",
      liveUrl: null,
      repositoryUrl: "https://github.com/jborri/Mitochondrial-Haplogroup-Mutations"
    },
    {
      id: "bestseller-trends-d3",
      number: "04",
      title: "Bestseller Trends with D3",
      shortTitle: "Bestseller Trends",
      resumeTracks: "Data Visualization",
      question: "How have bestseller genres, authorship, page counts, and ratings changed across decades?",
      toolsLine: "D3.js · JavaScript · SVG",
      tags: ["D3.js", "JavaScript", "HTML", "CSS", "SVG"],
      overview: "An interactive exploration of Publishers Weekly, Goodreads, and Wikipedia metadata describing bestselling books across decades.",
      approach: "Combined publishing metadata and built D3 views for genre distribution, authorship, page counts, ratings, and change over time.",
      output: "A repository containing interactive visualizations and the data-processing work supporting them.",
      limitations: "The analysis reflects the coverage and matching quality of the source datasets and should not be treated as a complete history of publishing.",
      liveUrl: null,
      repositoryUrl: "https://github.com/jborri/D3_S24"
    }
  ],
  indexProjects: [
    {
      id: "mayoral-mystery",
      number: "01",
      title: "Mayoral Mystery",
      resumeTracks: "Data Visualization",
      question: "What do election results, survey responses, campaign events, and district geography suggest about a future NYC campaign?",
      toolsLine: "Observable Plot · JavaScript · Geospatial data",
      tags: ["Observable Framework", "Observable Plot", "JavaScript", "GeoJSON", "Campaign analysis"],
      overview: "A geospatial campaign-analysis dashboard combining election results, survey responses, campaign events, and NYC district geometry.",
      approach: "Built maps and linked comparisons to examine demographic, geographic, and policy patterns across several supplied datasets.",
      output: "A responsive interactive dashboard published through GitHub Pages.",
      limitations: "The scenario is hypothetical and the interpretation is bounded by the coverage and definitions of the course datasets.",
      liveUrl: "https://jborri.github.io/Interactive-Data-Vis-Fall2025/lab_3/",
      repositoryUrl: "https://github.com/jborri/Interactive-Data-Vis-Fall2025/tree/main/src/lab_3"
    },
    {
      id: "clearwater-crisis",
      number: "02",
      title: "Clearwater Crisis",
      resumeTracks: "Data Visualization",
      question: "What does the temporal and spatial evidence suggest about a fictional ecological decline?",
      toolsLine: "Observable Plot · JavaScript · Environmental data",
      tags: ["Observable Framework", "Observable Plot", "JavaScript", "Geospatial data", "Environmental analysis"],
      overview: "An investigative data story combining fish surveys, water-quality measurements, monitoring-station locations, and activity records.",
      approach: "Compared observations across time and place to evaluate competing explanations and organize the evidence into a readable narrative.",
      output: "A published interactive environmental investigation with maps, comparisons, tooltips, and annotations.",
      limitations: "The scenario and data were supplied for coursework, so the conclusions belong to the fictional case rather than a real ecosystem.",
      liveUrl: "https://jborri.github.io/Interactive-Data-Vis-Fall2025/lab_4/",
      repositoryUrl: "https://github.com/jborri/Interactive-Data-Vis-Fall2025/tree/main/src/lab_4"
    },
    {
      id: "subway-staffing",
      number: "03",
      title: "Subway Staffing",
      resumeTracks: "Data Visualization",
      question: "Which stations should receive additional staffing for upcoming events?",
      toolsLine: "Observable Plot · JavaScript · Operations data",
      tags: ["Observable Framework", "Observable Plot", "JavaScript", "Operations analysis", "Dashboard design"],
      overview: "A multi-table operations dashboard relating ridership, local events, incident response, current staffing, and a future event calendar.",
      approach: "Connected operational tables and comparative views to surface stations where expected demand and current coverage diverge.",
      output: "An interactive staffing dashboard with station-level comparisons and recommendations.",
      limitations: "Recommendations are specific to the supplied scenario and do not account for operational factors absent from the datasets.",
      liveUrl: "https://jborri.github.io/Interactive-Data-Vis-Fall2025/lab_2/",
      repositoryUrl: "https://github.com/jborri/Interactive-Data-Vis-Fall2025/tree/main/src/lab_2"
    },
    {
      id: "prolific-pollinators",
      number: "04",
      title: "Prolific Pollinators",
      resumeTracks: "Data Visualization",
      question: "How do morphology and weather relate to pollinator visits and nectar production?",
      toolsLine: "Observable Plot · JavaScript · Biological data",
      tags: ["Observable Framework", "Observable Plot", "JavaScript", "Biological data", "Exploratory analysis"],
      overview: "An exploratory dashboard examining pollinator morphology, weather conditions, visit frequency, and nectar production.",
      approach: "Used linked categorical and quantitative comparisons to inspect patterns across pollinator species and environmental conditions.",
      output: "A published interactive dashboard with exploratory charts and tooltips.",
      limitations: "The views describe the supplied observations and do not establish causal relationships among weather, morphology, and pollination outcomes.",
      liveUrl: "https://jborri.github.io/Interactive-Data-Vis-Fall2025/lab_1/",
      repositoryUrl: "https://github.com/jborri/Interactive-Data-Vis-Fall2025/tree/main/src/lab_1"
    },
    {
      id: "bestseller-trends-d3",
      number: "05",
      title: "Bestseller Trends with D3",
      resumeTracks: "Data Visualization",
      question: "How have bestseller genres, authorship, page counts, and ratings changed across decades?",
      toolsLine: "D3.js · JavaScript · SVG",
      tags: ["D3.js", "JavaScript", "HTML", "CSS", "SVG"],
      overview: "An interactive exploration of Publishers Weekly, Goodreads, and Wikipedia metadata describing bestselling books across decades.",
      approach: "Combined publishing metadata and built D3 views for genre distribution, authorship, page counts, ratings, and change over time.",
      output: "A repository containing interactive visualizations and the data-processing work supporting them.",
      limitations: "The analysis reflects the coverage and matching quality of the source datasets and should not be treated as a complete history of publishing.",
      liveUrl: null,
      repositoryUrl: "https://github.com/jborri/D3_S24"
    },
    {
      id: "community-indicators",
      number: "06",
      title: "Community Indicators",
      resumeTracks: "Data Analysis · Data Visualization · Computational Biology",
      question: "How do social, health, economic, and governance indicators relate to reported social support?",
      toolsLine: "Python · Regression · Tableau",
      tags: ["Python", "pandas", "OLS", "Logistic regression", "Tableau"],
      overview: "An exploratory cross-national analysis combining social, health, economic, and governance indicators from multiple sources.",
      approach: "Cleaned and merged the datasets in Python, then used OLS and logistic regression to examine associations with reported social support.",
      output: "An exploratory Tableau dashboard supported by documented data provenance and analytical interpretation.",
      limitations: "The results describe associations rather than causal effects and remain sensitive to source coverage, measurement choices, and missing data.",
      liveUrl: "https://public.tableau.com/app/profile/joseph.borri/viz/CommunityIndicators_17224364594760/Dashboard1?publish=yes",
      repositoryUrl: "https://github.com/jborri/Community-Indicators"
    },
    {
      id: "mitochondrial-haplogroup-lookup",
      number: "07",
      title: "Mitochondrial Haplogroup U Lookup",
      resumeTracks: "Data Analysis · Computational Biology",
      question: "How can an entered mutation set be matched against defining PhyloTree haplogroup U mutations?",
      toolsLine: "Python · CSV · PhyloTree",
      tags: ["Python", "CSV", "PhyloTree", "Mitochondrial DNA", "Variant lookup"],
      overview: "A command-line lookup tool for matching user-supplied mitochondrial mutations to haplogroup U subclades.",
      approach: "Compared the entered mutations with defining mutation sets compiled from the PhyloTree haplogroup U tree.",
      output: "A reproducible Python workflow that returns the first subclade whose defining mutations are all present.",
      limitations: "The tool does not perform sequence alignment, probabilistic classification, quality control, or clinical ancestry interpretation.",
      liveUrl: null,
      repositoryUrl: "https://github.com/jborri/Mitochondrial-Haplogroup-Mutations/tree/main/Haplogroup%20Analysis%20Tool"
    },
    {
      id: "ins-variant-classification",
      number: "08",
      title: "Human INS Variant Classification",
      resumeTracks: "Data Analysis · Computational Biology",
      question: "What can a small set of human insulin variant records support in an exploratory classification workflow?",
      toolsLine: "Python · scikit-learn · UniProt",
      tags: ["Python", "pandas", "scikit-learn", "UniProt", "Random forest"],
      overview: "An exploratory random-forest workflow built from human insulin variant records in a UniProt export.",
      approach: "Parsed the variant records, encoded available features, and compared bootstrap estimates, 5-fold cross-validation, and grid search.",
      output: "A documented model prototype for examining submitted clinical-significance labels associated with the human INS gene.",
      limitations: "The dataset is small and imbalanced, many labels are missing or uncertain, and the results do not establish clinical predictive validity.",
      liveUrl: null,
      repositoryUrl: "https://github.com/jborri/Mitochondrial-Haplogroup-Mutations/tree/main/Predicting%20the%20Effects%20of%20Variant%20Mutations"
    }
  ],
  collections: {
    art: [],
    writing: [],
    photography: []
  }
};

const views = [...document.querySelectorAll("[data-view]")];
const routeLinks = [...document.querySelectorAll("[data-route-link]")];
const sectionReadout = document.querySelector("#current-section");
const projectOrb = document.querySelector("#project-orb");
const projectIndexDialog = document.querySelector("#project-index-dialog");
const indexTrigger = document.querySelector("[data-open-index]");
const indexList = document.querySelector("[data-project-index-list]");
const linkedinLink = document.querySelector("#linkedin-link");

let currentProjectIndex = 0;
let pointerStartX = null;

const sectionLabels = {
  projects: "Projects",
  art: "Art",
  writing: "Writing",
  photography: "Photography",
  about: "About"
};

function selectAll(selector) {
  return [...document.querySelectorAll(selector)];
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderProject() {
  const project = portfolioData.projects[currentProjectIndex];
  const previous = portfolioData.projects[(currentProjectIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length];
  const next = portfolioData.projects[(currentProjectIndex + 1) % portfolioData.projects.length];

  setText("[data-project-number]", project.number);
  setText("[data-project-control-number]", project.number);
  setText("[data-project-title]", project.title);
  setText("[data-project-question]", project.question);
  setText("[data-project-tools]", project.toolsLine);
  setText("[data-previous-number]", previous.number);
  setText("[data-previous-title]", previous.shortTitle);
  setText("[data-next-number]", next.number);
  setText("[data-next-title]", next.shortTitle);

  const openLink = document.querySelector("[data-project-open]");
  openLink.href = `#project/${project.id}`;
  openLink.setAttribute("aria-label", `View ${project.title}`);
  projectOrb.setAttribute("aria-label", `${project.title}. ${project.question}`);
}

function changeProject(direction) {
  const className = direction === "next" ? "is-changing-next" : "is-changing-previous";
  currentProjectIndex = direction === "next"
    ? (currentProjectIndex + 1) % portfolioData.projects.length
    : (currentProjectIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length;

  projectOrb.classList.remove("is-changing-next", "is-changing-previous");
  void projectOrb.offsetWidth;
  projectOrb.classList.add(className);
  renderProject();
}

function findProject(id) {
  return portfolioData.indexProjects.find((project) => project.id === id)
    || portfolioData.projects.find((project) => project.id === id)
    || null;
}

function renderProjectDetail(project) {
  setText("[data-detail-track]", project.resumeTracks);
  setText("[data-detail-title]", project.title);
  setText("[data-detail-question]", project.question);
  setText("[data-detail-overview]", project.overview);
  setText("[data-detail-approach]", project.approach);
  setText("[data-detail-output]", project.output);
  setText("[data-detail-limitations]", project.limitations);

  const tagContainer = document.querySelector("[data-detail-tags]");
  tagContainer.replaceChildren();
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagContainer.append(tagElement);
  });

  const liveLink = document.querySelector("[data-detail-live]");
  if (project.liveUrl) {
    liveLink.href = project.liveUrl;
    liveLink.hidden = false;
  } else {
    liveLink.hidden = true;
    liveLink.removeAttribute("href");
  }

  const repositoryLink = document.querySelector("[data-detail-repository]");
  repositoryLink.href = project.repositoryUrl;
}

function parseRoute() {
  const rawHash = window.location.hash.replace(/^#/, "");
  if (!rawHash) return { view: "projects", project: null };

  if (rawHash.startsWith("project/")) {
    const projectId = decodeURIComponent(rawHash.slice("project/".length));
    return { view: "project-detail", project: findProject(projectId) };
  }

  if (sectionLabels[rawHash]) return { view: rawHash, project: null };
  return { view: "projects", project: null };
}

function renderRoute() {
  const route = parseRoute();
  const validProjectRoute = route.view === "project-detail" && route.project;
  const activeView = validProjectRoute ? "project-detail" : route.view === "project-detail" ? "projects" : route.view;

  views.forEach((view) => {
    view.hidden = view.dataset.view !== activeView;
  });

  const activeNavRoute = activeView === "project-detail" ? "projects" : activeView;
  routeLinks.forEach((link) => {
    if (link.dataset.routeLink === activeNavRoute) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (validProjectRoute) {
    renderProjectDetail(route.project);
    sectionReadout.textContent = route.project.title;
    document.title = `${route.project.title} — Joseph Borri`;
  } else {
    sectionReadout.textContent = sectionLabels[activeView];
    document.title = activeView === "projects"
      ? "Joseph Borri — Data Analyst & Visualization Specialist"
      : `${sectionLabels[activeView]} — Joseph Borri`;
  }

  if (projectIndexDialog.open) projectIndexDialog.close();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function createEmptyCollection(label, description) {
  const wrapper = document.createElement("div");
  wrapper.className = "empty-collection";

  const content = document.createElement("div");
  const eyebrow = document.createElement("span");
  const heading = document.createElement("h2");
  const paragraph = document.createElement("p");

  eyebrow.textContent = "Collection in progress";
  heading.textContent = label;
  paragraph.textContent = description;

  content.append(eyebrow, heading, paragraph);
  wrapper.append(content);
  return wrapper;
}

function renderVisualCollection(collectionName, containerSelector, emptyLabel, emptyDescription) {
  const container = document.querySelector(containerSelector);
  const items = portfolioData.collections[collectionName];
  container.replaceChildren();

  if (!items.length) {
    container.classList.remove("collection-grid", "photography-grid");
    container.append(createEmptyCollection(emptyLabel, emptyDescription));
    return;
  }

  container.classList.add("collection-grid");
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "collection-item";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.alt || "";
    image.loading = "lazy";

    const heading = document.createElement("h2");
    heading.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description || "";

    article.append(image, heading, description);
    container.append(article);
  });
}

function renderWritingCollection() {
  const container = document.querySelector("#writing-collection");
  const items = portfolioData.collections.writing;
  container.replaceChildren();

  if (!items.length) {
    container.classList.remove("writing-list");
    container.append(createEmptyCollection("Writing archive", "Essays, notes, and poetry will be collected here."));
    return;
  }

  container.classList.add("writing-list");
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "writing-item";

    const date = document.createElement("time");
    date.dateTime = item.date;
    date.textContent = item.displayDate;

    const copy = document.createElement("div");
    const heading = document.createElement("h2");
    const description = document.createElement("p");
    heading.textContent = item.title;
    description.textContent = item.description || "";
    copy.append(heading, description);

    const link = document.createElement("a");
    link.className = "text-link";
    link.href = item.url;
    link.textContent = "Read ↗";

    article.append(date, copy, link);
    container.append(article);
  });
}

function buildProjectIndex() {
  indexList.replaceChildren();
  portfolioData.indexProjects.forEach((project) => {
    const link = document.createElement("a");
    link.className = "project-index-item";
    link.href = `#project/${project.id}`;

    const number = document.createElement("span");
    number.textContent = project.number;

    const title = document.createElement("strong");
    title.textContent = project.title;

    const metadata = document.createElement("span");
    metadata.className = "project-index-meta";

    const tracks = document.createElement("small");
    tracks.textContent = project.resumeTracks;

    const tools = document.createElement("small");
    tools.textContent = project.toolsLine;

    metadata.append(tracks, tools);
    link.append(number, title, metadata);
    indexList.append(link);
  });
}

selectAll("[data-project-direction]").forEach((button) => {
  button.addEventListener("click", () => changeProject(button.dataset.projectDirection));
});

projectOrb.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    changeProject("next");
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    changeProject("previous");
  }
  if (event.key === "Enter") {
    window.location.hash = `project/${portfolioData.projects[currentProjectIndex].id}`;
  }
});

projectOrb.addEventListener("pointerdown", (event) => {
  if (event.target.closest("a, button")) return;
  pointerStartX = event.clientX;
  projectOrb.setPointerCapture?.(event.pointerId);
});

projectOrb.addEventListener("pointerup", (event) => {
  if (pointerStartX === null) return;
  const distance = event.clientX - pointerStartX;
  pointerStartX = null;
  if (Math.abs(distance) < 48) return;
  changeProject(distance < 0 ? "next" : "previous");
});

projectOrb.addEventListener("pointercancel", () => {
  pointerStartX = null;
});

indexTrigger.addEventListener("click", () => {
  if (typeof projectIndexDialog.showModal === "function") {
    projectIndexDialog.showModal();
  } else {
    projectIndexDialog.setAttribute("open", "");
  }
});

document.querySelector("[data-close-index]").addEventListener("click", () => {
  if (typeof projectIndexDialog.close === "function") {
    projectIndexDialog.close();
  } else {
    projectIndexDialog.removeAttribute("open");
  }
});

projectIndexDialog.addEventListener("click", (event) => {
  if (event.target === projectIndexDialog) projectIndexDialog.close();
});

if (portfolioData.profile.linkedinUrl) {
  linkedinLink.href = portfolioData.profile.linkedinUrl;
  linkedinLink.hidden = false;
}

renderVisualCollection("art", "#art-collection", "Art portfolio", "Finished pieces, titles, media, and dates will be collected here.");
renderWritingCollection();
renderVisualCollection("photography", "#photography-collection", "Photography archive", "Selected photographs and visual studies will be collected here.");
buildProjectIndex();
renderProject();

window.addEventListener("hashchange", renderRoute);

if (!window.location.hash) {
  history.replaceState(null, "", "#projects");
}

renderRoute();
