/*
 * Retrocadia — singurul script al site-ului.
 *
 * Tot restul (navigația colapsabilă, revelațiile la scroll, stările de hover și
 * focus) este gestionat de HTML și CSS singure.
 * Acest fișier adaugă două îmbunătățiri mici, opționale și paginile funcționează
 * fără el: picker-ul de expoziție misterioasă și confirmația de contribuție.
 */
(() => {
  "use strict";

  /* Picker expoziție misterioasă pe consoles.html */
  const surprise = document.querySelector("#surprise-console");
  const signalName = document.querySelector("#signal-console");
  const signalDetail = document.querySelector("#signal-detail");

  if (surprise && signalName && signalDetail) {
    const exhibits = [
      { name: "SUPER NES", detail: "1990 // CARȚUȘ // 16-BITĂ" },
      { name: "PLAYSTATION", detail: "1994 // CD-ROM // 32-BITĂ" },
      { name: "SEGA GENESIS", detail: "1988 // CARȚUȘ // 16-BITĂ" },
      { name: "NINTENDO 64", detail: "1996 // CARȚUȘ // 64-BITĂ" },
      { name: "DREAMCAST", detail: "1998 // GD-ROM // 128-BITĂ" },
      { name: "GAME BOY ADVANCE", detail: "2001 // GAME PAK // PORTABIL" },
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
      surprise.textContent = "Scanează altul";
    });
  }

  /* Confirmație contribuție pe contribute.html */
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
      status.textContent = `"${title}" primit. Echipa de arhivă îl va revizui curând.`;
      form.reset();
    });
  }
})();
