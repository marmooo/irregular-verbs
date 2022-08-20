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

function shuffle(array) {
  for (i = array.length; 1 < i; i--) {
    k = Math.floor(Math.random() * i);
    [array[k], array[i - 1]] = [array[i - 1], array[k]];
  }
  return array;
}

function shuffleProblems() {
  const tables = [...document.getElementsByTagName("tbody")];
  const trs = [...document.querySelectorAll("tbody > tr")];
  shuffle(trs);
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
      const trs = [...document.querySelectorAll("tbody > tr")];
      trs.forEach((tr) => {
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
