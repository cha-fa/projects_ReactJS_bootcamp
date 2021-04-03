  window.addEventListener('DOMContentLoaded', (event) => {
    window.document.getElementById("btnCount").addEventListener("click", event => {
      event.preventDefault();
      document.getElementById("articlesCount").classList.toggle("invisible")
    })
  });
