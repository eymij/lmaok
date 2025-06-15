document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("start-overlay");
  const music = document.getElementById("bg-music");

  const startApp = () => {
    if (music) {
      music.play().catch((e) => console.warn("Audio play failed:", e));
    }
    overlay.style.display = "none";
    document.removeEventListener("click", startApp);
  };

  document.addEventListener("click", startApp);
});
