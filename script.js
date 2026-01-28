const bgVideo = document.getElementById("bgVideo");
const toggle = document.getElementById("soundToggle");

bgVideo.muted = true;

toggle.addEventListener("click", () => {
  bgVideo.muted = !bgVideo.muted;
  toggle.textContent = bgVideo.muted ? "🔇" : "🔊";
});
