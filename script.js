const LINKS = {
  line: "https://lin.ee/wX5GsqL",
  instagram: "https://www.instagram.com/ayumi.mahou/",
  threads: "https://www.threads.net/@ayumi.mahou",
  note: "https://note.com/clear_egret7013",
  standfm: "https://stand.fm/channels/674c5e4269bc2015d00409ae"
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const key = element.dataset.link;
  const href = LINKS[key];
  if (!href) return;

  element.setAttribute("href", href);
  if (/^https?:\/\//.test(href)) {
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  }
});
