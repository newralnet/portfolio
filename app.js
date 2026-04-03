function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function createEntryBlock(duration, title, organization) {
  const wrapper = document.createElement("div");

  const durationEl = document.createElement("p");
  durationEl.className = "typo-duration";
  durationEl.textContent = duration;

  const titleEl = document.createElement("p");
  titleEl.className = "typo-role-title";
  titleEl.textContent = title;

  const orgEl = document.createElement("p");
  orgEl.className = "typo-body";
  orgEl.textContent = organization;

  wrapper.append(durationEl, titleEl, orgEl);
  return wrapper;
}

function createProjectLink(label, href) {
  const link = document.createElement("a");
  link.className = "project-link";
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";

  const text = document.createElement("span");
  text.className = "project-link-text";
  text.textContent = label;

  const icon = document.createElement("span");
  icon.className = "material-symbols-outlined";
  icon.textContent = "north_east";

  link.append(text, icon);
  return link;
}

function renderHero(hero) {
  setText("hero-name", hero.name);

  const subtitle = document.getElementById("hero-subtitle");
  if (subtitle) {
    subtitle.textContent = "";
    subtitle.append(document.createTextNode(hero.role));

    const divider = document.createElement("span");
    divider.className = "text-outline-variant font-light";
    divider.textContent = "|";

    subtitle.append(divider, document.createTextNode(hero.qualification));
  }

  const image = document.getElementById("hero-image");
  if (image) {
    image.src = hero.imageSrc;
    image.alt = hero.imageAlt;
  }
}

function renderAbout(about) {
  setText("about-label", about.label);
  setText("about-title", about.title);
  setText("about-description", about.description);
  setText("experience-title", about.experienceTitle);
  setText("education-title", about.educationTitle);

  const experienceList = document.getElementById("experience-list");
  const educationList = document.getElementById("education-list");

  if (experienceList) {
    experienceList.textContent = "";
    about.experience.forEach((entry) => {
      experienceList.append(
        createEntryBlock(entry.duration, entry.role, entry.organization),
      );
    });
  }

  if (educationList) {
    educationList.textContent = "";
    about.education.forEach((entry) => {
      educationList.append(
        createEntryBlock(entry.duration, entry.degree, entry.organization),
      );
    });
  }
}

function renderProjects(section, projects) {
  setText("projects-label", section.label);
  setText("projects-title", section.title);

  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.textContent = "";
  projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "py-2 md:py-3 border-b border-gray-100";

    const topRow = document.createElement("div");
    topRow.className =
      "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3";

    const title = document.createElement("p");
    title.className = "typo-item-title";
    title.textContent = project.title;

    const metric = document.createElement("p");
    metric.className = "typo-meta whitespace-nowrap";
    metric.textContent = project.metric;

    topRow.append(title, metric);

    const summary = document.createElement("p");
    summary.className = "typo-body mt-1";
    summary.textContent = project.summary;

    const links = document.createElement("div");
    links.className = "flex flex-wrap gap-x-4 gap-y-1 mt-2";
    links.append(
      createProjectLink("Live", project.live),
      createProjectLink("GitHub", project.github),
    );

    article.append(topRow, summary, links);
    grid.append(article);
  });
}

function renderDiscourse(discourse) {
  setText("discourse-label", discourse.label);
  setText("discourse-title", discourse.title);

  const list = document.getElementById("publications-list");
  if (!list) return;

  list.textContent = "";

  discourse.items.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "discourse-row";

    const rowIndex = document.createElement("p");
    rowIndex.className = "discourse-index";
    rowIndex.textContent = String(index + 1).padStart(2, "0");

    const content = document.createElement("div");

    const meta = document.createElement("p");
    meta.className = "typo-meta discourse-meta";
    meta.textContent = item.meta;

    const link = document.createElement("a");
    link.className = "discourse-link typo-item-title";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = item.title;

    content.append(meta, link);
    row.append(rowIndex, content);
    list.append(row);
  });
}

function renderSocials(socials, signature) {
  const socialLinks = document.getElementById("social-links");
  if (socialLinks) {
    socialLinks.textContent = "";
    socials.forEach((item) => {
      const link = document.createElement("a");
      link.className = "typo-duration text-[#4A443F]/70 hover:underline";
      link.href = item.href;
      link.textContent = item.label;

      if (!item.href.startsWith("mailto:")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }

      socialLinks.append(link);
    });
  }

  setText("footer-signature", signature);
}

function renderPortfolio(data) {
  renderHero(data.hero);
  renderAbout(data.about);
  renderProjects(data.projectsSection, data.projects);
  renderDiscourse(data.discourse);
  renderSocials(data.socials, data.signature);
}

renderPortfolio(PORTFOLIO_DATA);
