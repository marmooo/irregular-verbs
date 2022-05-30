function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.dataset.theme = "dark";
  }
}

function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    delete document.documentElement.dataset.theme;
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.dataset.theme = "dark";
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function shuffleProblems() {
  const tables = [...document.getElementsByTagName("tbody")];
  shuffleArray(trs);
  tables.forEach((table, n) => {
    const rows = trs.slice(n * 20, n * 20 + 20);
    for (const row of rows) {
      table.appendChild(row);
    }
  });
}

function setHideEvent() {
  const ths = [...document.getElementsByTagName("th")];
  ths.forEach((th) => {
    th.firstElementChild.onclick = () => {
      const ths = [...th.parentNode.children];
      const pos = ths.indexOf(th);
      const trs = [...th.parentNode.parentNode.children];
      trs.slice(1).forEach((tr) => {
        tr.children[pos].classList.toggle("transparent");
      });
    };
  });
}

function setTranslation() {
  document.querySelectorAll("td:not(:nth-child(2))").forEach((e) => {
    e.classList.add("notranslate");
  });
}

loadConfig();
setHideEvent();
setTranslation();

document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("shuffleProblems").onclick = shuffleProblems;
