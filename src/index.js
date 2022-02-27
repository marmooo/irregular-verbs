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

loadConfig();

const trs = [...document.getElementsByTagName("tr")]
  .filter((tr) => tr.children[0].tagName == "TD");
[...document.getElementsByTagName("th")].filter((th) => {
  th.onclick = () => {
    const pos = [...th.parentNode.children].indexOf(th);
    trs.forEach((tr) => {
      tr.children[pos].classList.toggle("transparent");
    });
  };
});

document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("shuffleProblems").onclick = shuffleProblems;
