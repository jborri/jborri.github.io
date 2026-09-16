const portfolioData = {
  profile: {
    linkedinUrl: null
  },
  projects: [
    {
      id: "mayoral-mystery",
      number: "01",
      title: "Mayoral Mystery",
      discipline: "Data Visualization",
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
      discipline: "Data Visualization",
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
      discipline: "Data Visualization",
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
      discipline: "Data Visualization",
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
      discipline: "Data Visualization",
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
      discipline: "Data Analysis · Visualization",
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
      discipline: "Computational Biology",
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
      discipline: "Computational Biology",
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

const lensStates = [
  { x: "29%", y: "22%", glow: "0.34", driftX: "-3%", driftY: "2%" },
  { x: "66%", y: "30%", glow: "0.27", driftX: "4%", driftY: "-2%" },
  { x: "42%", y: "72%", glow: "0.31", driftX: "1%", driftY: "4%" },
  { x: "73%", y: "64%", glow: "0.38", driftX: "-4%", driftY: "-1%" },
  { x: "31%", y: "58%", glow: "0.24", driftX: "3%", driftY: "3%" },
  { x: "58%", y: "24%", glow: "0.35", driftX: "-2%", driftY: "-4%" },
  { x: "38%", y: "40%", glow: "0.3", driftX: "5%", driftY: "1%" },
  { x: "69%", y: "48%", glow: "0.4", driftX: "-5%", driftY: "3%" }
];

const projectList = document.querySelector("[data-project-list]");
const projectPreview = document.querySelector("[data-project-preview]");
const lens = document.querySelector("[data-lens]");
const sectionReadout = document.querySelector("#current-section");
const sectionLinks = [...document.querySelectorAll("[data-section-link]")];
const linkedinLink = document.querySelector("#linkedin-link");
const baseTitle = "Joseph Borri — Data Analyst & Visualization Specialist";
const sectionLabels = {
  projects: "Projects",
  art: "Art",
  writing: "Writing",
  photography: "Photography",
  about: "About"
};

let activeProjectIndex = 0;

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function findProjectIndex(id) {
  return portfolioData.projects.findIndex((project) => project.id === id);
}

function setLensState(index, pulse = false) {
  const project = portfolioData.projects[index];
  const state = lensStates[index];
  if (!project || !state) return;

  lens.style.setProperty("--focus-x", state.x);
  lens.style.setProperty("--focus-y", state.y);
  lens.style.setProperty("--focus-glow", state.glow);
  lens.style.setProperty("--drift-x", state.driftX);
  lens.style.setProperty("--drift-y", state.driftY);
  setText("[data-lens-number]", project.number);
  setText("[data-lens-title]", project.title);

  if (pulse) {
    lens.classList.remove("is-refracting");
    void lens.offsetWidth;
    lens.classList.add("is-refracting");
  }
}

function renderProject(index, { updateTitle = true } = {}) {
  const project = portfolioData.projects[index];
  if (!project) return;
  activeProjectIndex = index;

  setText("[data-preview-number]", project.number);
  setText("[data-preview-discipline]", project.discipline);
  setText("[data-preview-title]", project.title);
  setText("[data-preview-question]", project.question);
  setText("[data-preview-overview]", project.overview);
  setText("[data-preview-approach]", project.approach);
  setText("[data-preview-output]", project.output);
  setText("[data-preview-limitations]", project.limitations);

  const tagContainer = document.querySelector("[data-preview-tags]");
  tagContainer.replaceChildren();
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagContainer.append(tagElement);
  });

  const liveLink = document.querySelector("[data-preview-live]");
  if (project.liveUrl) {
    liveLink.href = project.liveUrl;
    liveLink.hidden = false;
  } else {
    liveLink.hidden = true;
    liveLink.removeAttribute("href");
  }

  const repositoryLink = document.querySelector("[data-preview-repository]");
  repositoryLink.href = project.repositoryUrl;

  document.querySelectorAll("[data-project-id]").forEach((link) => {
    if (link.dataset.projectId === project.id) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  setLensState(index, true);
  if (updateTitle) document.title = `${project.title} — Joseph Borri`;
}

function selectProject(index, { updateHistory = true, scrollPreview = false } = {}) {
  const project = portfolioData.projects[index];
  if (!project) return;

  if (updateHistory) history.pushState(null, "", `#project/${project.id}`);
  renderProject(index);
  updateCurrentSection("projects");

  if (scrollPreview) {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    projectPreview.scrollIntoView({ behavior, block: "start" });
  }
}

function buildProjectList() {
  projectList.replaceChildren();

  portfolioData.projects.forEach((project, index) => {
    const link = document.createElement("a");
    link.className = "project-row";
    link.href = `#project/${project.id}`;
    link.dataset.projectId = project.id;

    const number = document.createElement("span");
    number.className = "project-row-number";
    number.textContent = project.number;

    const copy = document.createElement("span");
    copy.className = "project-row-copy";

    const title = document.createElement("strong");
    title.textContent = project.title;

    const tools = document.createElement("small");
    tools.textContent = project.toolsLine;

    const discipline = document.createElement("span");
    discipline.className = "project-row-discipline";
    discipline.textContent = project.discipline;

    copy.append(title, tools);
    link.append(number, copy, discipline);
    projectList.append(link);

    link.addEventListener("click", (event) => {
      event.preventDefault();
      const isNarrow = window.matchMedia("(max-width: 900px)").matches;
      selectProject(index, { updateHistory: true, scrollPreview: isNarrow });
    });

    link.addEventListener("pointerenter", () => setLensState(index));
    link.addEventListener("pointerleave", () => setLensState(activeProjectIndex));
    link.addEventListener("focus", () => setLensState(index));
    link.addEventListener("blur", () => setLensState(activeProjectIndex));
  });
}

function createEmptyArchive(title, description) {
  const wrapper = document.createElement("div");
  wrapper.className = "empty-archive";

  const label = document.createElement("span");
  label.textContent = "Archive";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = description;

  wrapper.append(label, heading, paragraph);
  return wrapper;
}

function renderVisualCollection(collectionName, containerSelector, emptyTitle, emptyDescription) {
  const container = document.querySelector(containerSelector);
  const items = portfolioData.collections[collectionName];
  container.replaceChildren();

  if (!items.length) {
    container.append(createEmptyArchive(emptyTitle, emptyDescription));
    return;
  }

  container.classList.add("archive-grid");
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "archive-item";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.alt || "";
    image.loading = "lazy";

    const heading = document.createElement("h3");
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
    container.append(createEmptyArchive("Writing archive", "Essays, notes, and poetry are being prepared for publication."));
    return;
  }

  const list = document.createElement("div");
  list.className = "writing-list";
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "writing-item";

    const date = document.createElement("time");
    date.dateTime = item.date;
    date.textContent = item.displayDate;

    const heading = document.createElement("h3");
    heading.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description || "";

    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = "Read ↗";

    article.append(date, heading, description, link);
    list.append(article);
  });
  container.append(list);
}

function getProjectFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash.startsWith("project/")) return -1;
  return findProjectIndex(decodeURIComponent(hash.slice("project/".length)));
}

function applyHashRoute({ initial = false } = {}) {
  const projectIndex = getProjectFromHash();
  if (projectIndex >= 0) {
    renderProject(projectIndex);
    if (initial) {
      requestAnimationFrame(() => document.querySelector("#projects").scrollIntoView({ behavior: "auto" }));
    }
    return;
  }

  if (!window.location.hash || window.location.hash === "#projects") {
    renderProject(activeProjectIndex, { updateTitle: false });
    updateCurrentSection("projects");
    document.title = baseTitle;
    return;
  }

  const sectionId = window.location.hash.slice(1);
  if (sectionLabels[sectionId]) {
    updateCurrentSection(sectionId);
    document.title = `${sectionLabels[sectionId]} — Joseph Borri`;
  }
}

function updateCurrentSection(sectionId) {
  sectionReadout.textContent = sectionLabels[sectionId] || "Projects";

  sectionLinks.forEach((link) => {
    if (link.dataset.sectionLink === sectionId) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function observeSections() {
  const sections = [...document.querySelectorAll(".dossier-section")];
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) updateCurrentSection(visible.target.id);
  }, {
    rootMargin: "-22% 0px -58% 0px",
    threshold: [0.05, 0.2, 0.45]
  });

  sections.forEach((section) => observer.observe(section));
}

if (portfolioData.profile.linkedinUrl) {
  linkedinLink.href = portfolioData.profile.linkedinUrl;
  linkedinLink.hidden = false;
}

buildProjectList();
renderVisualCollection("art", "#art-collection", "Art portfolio", "Selected pieces are being prepared for publication.");
renderWritingCollection();
renderVisualCollection("photography", "#photography-collection", "Photography archive", "Selected photographs are being prepared for publication.");
renderProject(0, { updateTitle: false });
applyHashRoute({ initial: true });
observeSections();

window.addEventListener("popstate", () => applyHashRoute());
window.addEventListener("hashchange", () => applyHashRoute());

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const sectionId = link.dataset.sectionLink;
    updateCurrentSection(sectionId);
    document.title = sectionId === "projects" ? baseTitle : `${sectionLabels[sectionId]} — Joseph Borri`;
  });
});
