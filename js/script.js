/*
 * Retrocadia — the only script on the site.
 *
 * Everything else (the collapsible navigation, the scroll reveals, hover and
 * focus states) is handled by HTML and CSS alone.
 * This file adds two small, optional enhancements and the pages work without
 * it: the mystery-exhibit picker and the contribution confirmation.
 */
(() => {
  "use strict";

  /* Mystery exhibit picker on consoles.html */
  const surprise = document.querySelector("#surprise-console");
  const signalName = document.querySelector("#signal-console");
  const signalDetail = document.querySelector("#signal-detail");

  if (surprise && signalName && signalDetail) {
    const exhibits = [
      { name: "SUPER NES", detail: "1990 // CARTRIDGE // 16-BIT" },
      { name: "PLAYSTATION", detail: "1994 // CD-ROM // 32-BIT" },
      { name: "SEGA GENESIS", detail: "1988 // CARTRIDGE // 16-BIT" },
      { name: "NINTENDO 64", detail: "1996 // CARTRIDGE // 64-BIT" },
      { name: "DREAMCAST", detail: "1998 // GD-ROM // 128-BIT" },
      { name: "GAME BOY ADVANCE", detail: "2001 // GAME PAK // HANDHELD" },
    ];

    let previous = -1;

    surprise.addEventListener("click", () => {
      let index = Math.floor(Math.random() * exhibits.length);
      if (index === previous) {
        index = (index + 1) % exhibits.length;
      }
      previous = index;

      signalName.textContent = exhibits[index].name;
      signalDetail.textContent = exhibits[index].detail;
      surprise.textContent = "Scan another";
    });
  }

  /* Contribution confirmation on contribute.html */
  const form = document.querySelector("#contribution-form");
  const status = document.querySelector("#form-status");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const title = String(form.elements["game-title"].value).trim();
      status.textContent = `"${title}" received. The archive team will review it shortly.`;
      form.reset();
    });
  }
})();
