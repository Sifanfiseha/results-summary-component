function displayData() {
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const container = document.querySelector(".result-container");
      const result = document.querySelector(".res");
      let sum = 0;
      data.forEach((x) => {
        sum += x.score;
      });
      sum = Math.round((sum * 100) / 400);
      result.innerText = sum;
      data.forEach((d) => {
        const div = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const span = document.createElement("span");
        const icon = document.createElement("img");
        icon.setAttribute("src", d.icon);
        p1.appendChild(icon);
        span.innerText = d.category;
        p1.appendChild(span);
        p2.innerHTML = `<p class="score"><span>${d.score}</span> / 100</p>`;
        div.classList.add("result");
        div.appendChild(p1);
        div.appendChild(p2);
        container.appendChild(div);
      });
    });
}
displayData();
