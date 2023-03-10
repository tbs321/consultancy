export function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

export function addShooting(pdf) {
  if (!pdf) return;

  const shootingButton = document.querySelector(".cta-btn--shooting");
  shootingButton.setAttribute("href", pdf);
}

export function addIcef(pdf) {
  if (!pdf) return;

  const icefButton = document.querySelector(".cta-btn--icef");
  icefButton.setAttribute("href", pdf);
}
