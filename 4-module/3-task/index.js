function highlight(table) {
  [...table.querySelectorAll("tr")].map((row, index) => {
    if (index > 0) {
      const isAvailable = row.lastElementChild.dataset.available;

      if (!isAvailable) {
        row.setAttribute("hidden", "");
      }

      if (isAvailable === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }

      if (row.children[2].textContent === "m") {
        row.classList.add("male");
      } else {
        row.classList.add("female");
      }

      if (Number(row.children[1].textContent) < 18) {
        row.style.textDecoration = "line-through";
      }
    }
  });
}
