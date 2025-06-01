const langData = {
  en: {
    home: "Home",
    doxes: "Doxes",
    hacked: "Hacked By SpaceDev",
    msg: "Your Site Has Been Hacked For Poor Security. If you don't fix the bug we will attack again.",
  },
  es: {
    home: "Inicio",
    doxes: "Doxeos",
    hacked: "Hackeado por SpaceDev",
    msg: "Tu sitio ha sido hackeado por mala seguridad. Si no corriges el error, atacaremos de nuevo.",
  }
};

document.getElementById("lang-switcher").addEventListener("change", function () {
  const lang = this.value;
  document.querySelectorAll("[data-key]").forEach(el => {
    el.textContent = langData[lang][el.getAttribute("data-key")];
  });
});
