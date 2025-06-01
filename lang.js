const translations = {
  en: {
    navHome: "Home",
    navDox: "Doxes",
    navDiscord: "Discord",
    titleText: "SpaceDev",
    homeTitle: "Hacked By Saox + SpaceDev",
    homeMsg1: "Your site has been hacked for poor security. Fix it or we attack again.",
    homeMsg2: "Greetz: Saox + SpaceDev",
    homeMsg3: "Fuck EsqueleSquad, Glory To SpaceDev",
    doxHeader: "Dox",
    authorPlaceholder: "Enter your name",
    descPlaceholder: "What do you want to post?",
    uploadBtn: "Upload",
    discordHeader: "Join our Discord",
    discordLink: "Join Discord"
  },
  es: {
    navHome: "Inicio",
    navDox: "Doxes",
    navDiscord: "Discord",
    titleText: "SpaceDev",
    homeTitle: "Hackeado Por Saox + SpaceDev",
    homeMsg1: "Tu sitio ha sido hackeado por mala seguridad. Arréglalo o volveremos.",
    homeMsg2: "Saludos: Saox + SpaceDev",
    homeMsg3: "Fuck EsqueleSquad, Gloria a SpaceDev",
    doxHeader: "Dox",
    authorPlaceholder: "Pon tu nombre",
    descPlaceholder: "¿Qué quieres poner?",
    uploadBtn: "Upload",
    discordHeader: "Únete a nuestro Discord",
    discordLink: "Entrar al Discord"
  }
};

function changeLanguage() {
  const lang = document.getElementById('languageSelect').value;
  const t = translations[lang];

  document.getElementById("navHome").textContent = t.navHome;
  document.getElementById("navDox").textContent = t.navDox;
  document.getElementById("navDiscord").textContent = t.navDiscord;
  document.getElementById("titleText").textContent = t.titleText;

  document.getElementById("homeTitle").textContent = t.homeTitle;
  document.getElementById("homeMsg1").textContent = t.homeMsg1;
  document.getElementById("homeMsg2").textContent = t.homeMsg2;
  document.getElementById("homeMsg3").textContent = t.homeMsg3;

  document.getElementById("doxHeader").textContent = t.doxHeader;
  document.getElementById("author").placeholder = t.authorPlaceholder;
  document.getElementById("description").placeholder = t.descPlaceholder;
  document.getElementById("uploadBtn").textContent = t.uploadBtn;

  document.getElementById("discordHeader").textContent = t.discordHeader;
  document.getElementById("discordLink").textContent = t.discordLink;
}
