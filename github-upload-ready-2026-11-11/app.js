import { categoryLabels, portfolio, fanVideos } from "./data.js";

const hostedSite = "https://seo-harin-framegyeol.genuinemacaw.chatgpt.site";
const pages = [
  ["home", "index.html", "홈"],
  ["about", "about.html", "서하린 소개"],
  ["portfolio", "portfolio.html", "포트폴리오"],
  ["news", "news.html", "소식"],
  ["fan", "fan.html", "팬 콘텐츠"],
  ["contact", "contact.html", "협업 문의"],
];
const currentPage = document.body.dataset.page || "home";
const app = document.querySelector("#app");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
}

function header() {
  const navLink = ([id, href, label], mobile = false) =>
    `<a class="${mobile ? "mobile-nav__link" : "nav-link"}${id === currentPage ? " is-active" : ""}" href="${href}"${id === currentPage ? ' aria-current="page"' : ""}>${label}${mobile ? '<span aria-hidden="true">↗</span>' : ""}</a>`;
  return `<a class="skip-link" href="#main-content">본문으로 건너뛰기</a>
    <header class="site-header"><div class="site-header__inner container">
      <a class="wordmark" href="index.html">SEO HARIN</a>
      <nav class="desktop-nav" aria-label="주 메뉴">${pages.slice(0, -1).map((item) => navLink(item)).join("")}</nav>
      <a class="button button--primary header-cta" href="contact.html">협업 문의 <span aria-hidden="true">↗</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-navigation" aria-label="메뉴 열기"><span></span><span></span></button>
    </div><nav id="mobile-navigation" class="mobile-nav" aria-label="모바일 주 메뉴">${pages.map((item) => navLink(item, true)).join("")}</nav></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="container site-footer__main"><div>
    <a class="wordmark wordmark--footer" href="index.html">SEO HARIN</a><p>브랜드의 이야기에 새로운 장면을 만듭니다.</p>
    </div><div class="site-footer__right"><a href="portfolio.html">포트폴리오</a><a href="fan.html">팬 콘텐츠</a><a href="contact.html">협업 문의</a></div></div>
    <div class="container site-footer__bottom"><p>서하린은 AI로 창작한 가상 인물이며, 프레임결 스튜디오는 가상 소속사입니다. 작품은 실제 협업·방영·발행 이력이 아닌 포트폴리오용 콘셉트입니다.</p><span>© 2026 FRAMEGYEOL STUDIO</span></div></footer>`;
}

function heading(eyebrow, title, description) {
  return `<div class="section-heading"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${description}</p></div>`;
}

function home() {
  const featured = ["afterglow", "city-in-tune", "dawn"].map((id) => portfolio.find((item) => item.id === id));
  return `<main id="main-content"><section class="home-hero"><div class="container home-hero__grid">
    <div class="home-hero__copy"><span class="eyebrow">FRAMEGYEOL STUDIO · AI INFLUENCER</span><h1>브랜드의 이야기에<br><em>새로운 장면을.</em></h1>
    <p>배우의 서사, 화보의 시선, 캠페인의 분위기까지.<br>브랜드에 맞춰 새로운 콘셉트를 만드는 AI 인플루언서 서하린입니다.</p>
    <div class="button-row"><a class="button button--primary" href="portfolio.html">포트폴리오 보기 <span aria-hidden="true">↗</span></a><a class="button button--outline" href="contact.html">협업 문의</a></div>
    <a class="intro-teaser" href="about.html#intro-video"><span class="intro-teaser__image"><img src="media/intro-poster.jpg" alt="서하린 자기소개 영상 미리보기"><span class="play-icon" aria-hidden="true">▶</span></span><span><strong>서하린, 첫 인사</strong><small>자기소개 영상 보기</small></span><span class="intro-teaser__arrow" aria-hidden="true">↗</span></a></div>
    <div class="home-hero__visual"><img src="media/profile.jpg" alt="검은 재킷과 아이보리 니트를 입은 AI 인플루언서 서하린의 프로필"><span class="home-hero__side-label">SEO HARIN / AI INFLUENCER</span></div></div></section>
    <section class="home-paths container"><div class="home-paths__intro"><span class="eyebrow">EXPLORE THE PORTFOLIO</span><h2>하나의 얼굴, 서로 다른 장면.</h2><p>광고를 시작으로 화보와 드라마까지, 서하린의 표현 범위를 살펴보세요.</p></div>
    <div class="home-paths__grid">${featured.map((item, index) => `<a class="path-card" href="portfolio.html?category=${item.category}"><div class="path-card__image"><img src="${item.image}" alt="${escapeHtml(item.imageAlt)}" loading="lazy"></div><div class="path-card__meta"><span>0${index + 1} / ${index === 2 ? "DRAMA" : "CAMPAIGN"}</span><span aria-hidden="true">↗</span></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.subtitle)}</p></a>`).join("")}</div></section>
    <section class="home-closing"><div class="container home-closing__inner"><div><span class="eyebrow eyebrow--light">COLLABORATE</span><h2>다음 장면을 함께 만들어요.</h2><p>캠페인, 화보, 영상 프로젝트의 새로운 콘셉트를 제안해 주세요.</p></div><a class="button button--light" href="contact.html">협업 문의하기 <span aria-hidden="true">↗</span></a></div></section></main>`;
}

function about() {
  return `<main id="main-content" class="page-shell container">${heading("ABOUT SEO HARIN", "장면이 남는 얼굴, 서하린", "시선과 작은 표정으로 장면의 온도를 바꾸는 AI 인플루언서입니다.")}
    <section class="about-profile"><div class="about-profile__image"><img src="media/profile.jpg" alt="차분한 표정으로 카메라를 바라보는 AI 인플루언서 서하린"></div>
    <div class="about-profile__copy"><span class="eyebrow">A FACE FOR MANY STORIES</span><h2>브랜드마다, 이야기마다<br>다른 결을 보여줍니다.</h2><p>서하린은 차분한 눈빛과 절제된 표현을 바탕으로 광고의 분명한 시선, 패션 화보의 정적인 장면, 드라마의 서사를 오갑니다. 한 사람의 일관된 얼굴 안에서 새로운 헤어와 의상, 빛과 분위기를 만들어 갑니다.</p>
    <dl class="profile-facts"><div><dt>활동 분야</dt><dd>광고 · 패션/뷰티 · 영상</dd></div><div><dt>이미지 키워드</dt><dd>고요함 · 관찰 · 여운</dd></div><div><dt>시그니처</dt><dd>차분한 눈매, 왼쪽 입가의 작은 점</dd></div><div><dt>소속</dt><dd>프레임결 스튜디오 <small>(가상 소속사)</small></dd></div></dl>
    <a class="text-link" href="portfolio.html">작품 속 서하린 보기 <span aria-hidden="true">↗</span></a></div></section>
    <section class="about-video" id="intro-video"><div class="about-video__heading"><div><span class="eyebrow">INTRODUCTION FILM</span><h2>서하린의 첫 인사</h2></div><p>사진 다음에, 영상 속 목소리와 표정으로 만나보세요.</p></div>
    <video controls playsinline preload="metadata" poster="media/intro-poster.jpg" aria-label="AI 인플루언서 서하린 자기소개 영상"><source src="media/intro.mp4" type="video/mp4">사용 중인 브라우저에서는 영상을 재생할 수 없습니다.</video><p class="media-note">AI 인플루언서 서하린의 자기소개 영상입니다. 영상의 대사 자막은 검수 후 제공할 예정입니다.</p></section></main>`;
}

function portfolioPage() {
  return `<main id="main-content" class="page-shell container">${heading("SELECTED WORKS", "포트폴리오", "광고에서 드라마까지. 한 인물이 만들어내는 서로 다른 장면을 선택해 보세요.")}
    <section class="portfolio-gallery" aria-label="서하린 포트폴리오"><div class="portfolio-gallery__tabs" role="tablist" aria-label="포트폴리오 분야"></div>
    <div class="portfolio-gallery__grid"><div class="portfolio-gallery__main"><div class="portfolio-gallery__image-frame"><img id="portfolio-main-image" alt=""><span class="portfolio-gallery__badge">AI 콘셉트</span></div>
    <div class="portfolio-gallery__controls"><button type="button" id="portfolio-prev" aria-label="이전 작품">←</button><span id="portfolio-counter" aria-live="polite"></span><button type="button" id="portfolio-next" aria-label="다음 작품">→</button></div>
    <div class="portfolio-gallery__media-tabs" aria-label="작품 이미지 선택"></div></div><div class="portfolio-gallery__rail"></div></div>
    <div class="portfolio-gallery__details" aria-live="polite"><div id="portfolio-details"></div><a class="button button--primary" href="contact.html">협업 문의 <span aria-hidden="true">↗</span></a></div></section></main>`;
}

function news() {
  return `<main id="main-content" class="page-shell container news-page">${heading("NEWS & UPDATES", "소식", "새로운 프로젝트와 콘텐츠가 공개될 때 이곳에 전합니다.")}
    <section class="news-empty" aria-label="현재 소식"><span class="news-empty__number">01</span><div><h2>다음 장면을 준비하고 있습니다.</h2><p>현재 공개된 새 프로젝트 소식은 없습니다. 새로운 소식이 생기면 이 페이지에 게시합니다.</p></div><span class="news-empty__mark" aria-hidden="true">↗</span></section>
    <section class="subscribe-panel"><div><span class="eyebrow eyebrow--light">STAY IN THE LOOP</span><h2>새 소식을 받아보세요.</h2><p>프로젝트가 생길 때마다 소식을 전할 예정입니다. 구독 신청은 운영 사이트에서 접수합니다.</p></div><div class="static-cta"><a class="button button--light" href="${hostedSite}/news" target="_blank" rel="noopener noreferrer">구독 신청 페이지 열기 <span aria-hidden="true">↗</span></a><p>새 창에서 신청할 수 있습니다. 실제 뉴스레터 발송은 준비 중입니다.</p></div></section></main>`;
}

function fan() {
  return `<main id="main-content" class="page-shell container">${heading("BEYOND THE FRAME", "팬 콘텐츠", "장면 밖의 서하린을 영상과 짧은 글로 만나보세요.")}
    <section class="fan-gallery" aria-label="서하린 팬 영상"><div class="fan-gallery__player"><video id="fan-player" controls playsinline preload="metadata"></video><div class="fan-gallery__caption"><span class="eyebrow">NOW PLAYING</span><h2 id="fan-title"></h2><p id="fan-description"></p></div></div><div class="fan-gallery__rail" aria-label="영상 선택"></div></section>
    <p class="media-note">서하린은 AI로 창작한 가상 인물입니다. 영상의 세부 장면 설명과 자막은 검수 후 제공됩니다.</p>
    <section class="fan-lower"><article class="fan-note"><span class="eyebrow">A NOTE FROM HARIN</span><h2>서하린의 짧은 글</h2><blockquote>“지나간 장면에도 아직 들리지 않은 이야기가 있어요.”</blockquote><p>도시의 소리, 한 장면의 비하인드, 옷과 빛의 변화를 짧은 글로 기록합니다. 새 글은 프로젝트가 생길 때마다 이곳에 게시합니다.</p></article>
    <div class="fan-message-form"><span class="eyebrow">A MESSAGE FOR HARIN</span><h2>팬 메시지 남기기</h2><p>메시지는 공개되지 않고 비공개로 접수됩니다.</p><p>팬 메시지 접수는 운영 사이트에서 진행합니다.</p><a class="button button--primary" href="${hostedSite}/fan" target="_blank" rel="noopener noreferrer">비공개 메시지 보내기 <span aria-hidden="true">↗</span></a></div></section></main>`;
}

function contact() {
  return `<main id="main-content" class="page-shell container contact-page">${heading("WORK WITH SEO HARIN", "협업 문의", "브랜드의 다음 장면을 함께 구상해 보세요.")}
    <div class="contact-layout"><div class="contact-intro"><span class="eyebrow">COLLABORATION</span><h2>브랜드의 이야기에<br>어울리는 얼굴을 찾고 계신가요?</h2><p>광고 캠페인, 패션·뷰티 화보, 드라마·영상 콘텐츠까지. 프로젝트의 목표와 분위기를 알려주시면 서하린의 새로운 콘셉트를 함께 고민하겠습니다.</p>
    <div class="contact-types"><span>01 · 광고 캠페인</span><span>02 · 패션·뷰티 화보</span><span>03 · 드라마·영상</span></div>
    <div class="contact-email"><small>기획용 이메일 · 실제 수신 주소 준비 중</small><strong>partnership@framegyeol.example</strong><p>현재 이 주소로 메일을 받을 수 없습니다.</p></div>
    <div class="contact-email"><small>기획용 SNS 계정명 · 실제 계정 준비 중</small><strong>@seoharin.framegyeol</strong><p>실제 계정이 준비되면 연결합니다.</p></div></div>
    <div class="contact-form static-contact"><span class="eyebrow">SEND A PROPOSAL</span><h2>프로젝트를 들려주세요.</h2><p>협업 제안은 운영 사이트의 비공개 양식으로 접수합니다. 아래 버튼을 누르면 새 창에서 양식이 열립니다.</p><a class="button button--primary" href="${hostedSite}/contact" target="_blank" rel="noopener noreferrer">협업 문의 양식 열기 <span aria-hidden="true">↗</span></a></div></div></main>`;
}

const renderers = { home, about, portfolio: portfolioPage, news, fan, contact };
app.innerHTML = `${header()}${(renderers[currentPage] || home)()}${footer()}`;

const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(expanded));
  menuButton.setAttribute("aria-label", expanded ? "메뉴 닫기" : "메뉴 열기");
  mobileNav.classList.toggle("is-open", expanded);
});

if (currentPage === "portfolio") {
  const categories = ["advertising", "drama", "fashion"];
  const requested = new URLSearchParams(location.search).get("category");
  let category = categories.includes(requested) ? requested : "advertising";
  let index = 0;
  let mediaIndex = 0;
  const tabs = document.querySelector(".portfolio-gallery__tabs");
  const rail = document.querySelector(".portfolio-gallery__rail");
  const mediaTabs = document.querySelector(".portfolio-gallery__media-tabs");
  const details = document.querySelector("#portfolio-details");
  const image = document.querySelector("#portfolio-main-image");
  const counter = document.querySelector("#portfolio-counter");
  const items = () => portfolio.filter((item) => item.category === category);

  function renderPortfolio() {
    const list = items();
    const selected = list[index];
    const images = [selected.image, ...(selected.additionalImages || [])];
    tabs.innerHTML = categories.map((value) => `<button class="category-tab${value === category ? " is-active" : ""}" type="button" role="tab" aria-selected="${value === category}" data-category="${value}">${categoryLabels[value]}</button>`).join("");
    image.src = images[mediaIndex];
    image.alt = mediaIndex === 0 ? selected.imageAlt : `${selected.title} 가상 콘셉트 포스터`;
    counter.innerHTML = `${String(index + 1).padStart(2, "0")} <i>/</i> ${String(list.length).padStart(2, "0")}`;
    mediaTabs.innerHTML = images.length > 1 ? images.map((_, position) => `<button type="button" class="${position === mediaIndex ? "is-active" : ""}" data-media="${position}">${position === 0 ? "스틸" : "포스터"}</button>`).join("") : "";
    rail.setAttribute("aria-label", `${categoryLabels[category]} 작품 목록`);
    rail.innerHTML = list.map((item, position) => `<button class="rail-item${position === index ? " is-active" : ""}" type="button" aria-pressed="${position === index}" data-index="${position}"><span class="rail-item__thumb"><img src="${item.image}" alt="" loading="lazy"></span><span class="rail-item__text"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.subtitle)}</small></span><span class="rail-item__arrow" aria-hidden="true">↗</span></button>`).join("");
    details.innerHTML = `<span class="eyebrow">${categoryLabels[category]} / ${selected.year}</span><h2>${escapeHtml(selected.title)} <span>${escapeHtml(selected.subtitle)}</span></h2><p class="portfolio-gallery__role">${escapeHtml(selected.role)}</p><p>${escapeHtml(selected.description)}</p><p class="concept-disclosure">AI로 제작한 가상 콘셉트 작품 · 실제 협업·방영·발행 이력이 아닙니다.</p>`;
  }
  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    category = button.dataset.category; index = 0; mediaIndex = 0;
    history.replaceState(null, "", `portfolio.html?category=${category}`);
    renderPortfolio();
  });
  rail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    index = Number(button.dataset.index); mediaIndex = 0; renderPortfolio();
  });
  mediaTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-media]");
    if (!button) return;
    mediaIndex = Number(button.dataset.media); renderPortfolio();
  });
  document.querySelector("#portfolio-prev").addEventListener("click", () => { index = (index - 1 + items().length) % items().length; mediaIndex = 0; renderPortfolio(); });
  document.querySelector("#portfolio-next").addEventListener("click", () => { index = (index + 1) % items().length; mediaIndex = 0; renderPortfolio(); });
  renderPortfolio();
}

if (currentPage === "fan") {
  const player = document.querySelector("#fan-player");
  const rail = document.querySelector(".fan-gallery__rail");
  let selectedId = "behind";
  function renderVideo() {
    const selected = fanVideos.find((video) => video.id === selectedId);
    player.pause();
    player.poster = selected.poster;
    player.src = selected.src;
    player.setAttribute("aria-label", `${selected.title} 영상`);
    player.load();
    document.querySelector("#fan-title").textContent = selected.title;
    document.querySelector("#fan-description").textContent = selected.description;
    rail.innerHTML = fanVideos.map((video) => `<button class="fan-video-option${video.id === selectedId ? " is-active" : ""}" type="button" aria-pressed="${video.id === selectedId}" data-video="${video.id}"><img src="${video.poster}" alt="" loading="lazy"><span><small>VIDEO</small><strong>${video.title}</strong></span><span class="fan-video-option__play" aria-hidden="true">▶</span></button>`).join("");
  }
  rail.addEventListener("click", (event) => { const button = event.target.closest("[data-video]"); if (!button) return; selectedId = button.dataset.video; renderVideo(); });
  renderVideo();
}

