document.querySelectorAll("nav a[data-section]").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("data-section");
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    document.querySelectorAll(".section").forEach(section => {
      section.classList.remove("active");
      section.classList.add("hidden");
    });

    targetSection.classList.add("active");
    targetSection.classList.remove("hidden");
  });
});

const postDoxBtn = document.getElementById("postDoxBtn");
const doxForm = document.getElementById("doxForm");
postDoxBtn.addEventListener("click", () => {
  doxForm.classList.toggle("hidden");
});

const uploadBtn = document.getElementById("uploadBtn");
const doxList = document.getElementById("doxList");

uploadBtn.addEventListener("click", () => {
  const author = document.getElementById("doxAuthor").value.trim();
  const desc = document.getElementById("doxDesc").value.trim();

  if (!author || !desc) return alert("Debes completar ambos campos.");

  const entry = document.createElement("div");
  entry.className = "dox-entry";
  entry.innerHTML = `<strong>${author}</strong><div class="dox-content">${desc}</div>`;

  entry.addEventListener("click", () => {
    const content = entry.querySelector(".dox-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });

  doxList.appendChild(entry);

  document.getElementById("doxAuthor").value = "";
  document.getElementById("doxDesc").value = "";
  doxForm.classList.add("hidden");
});
