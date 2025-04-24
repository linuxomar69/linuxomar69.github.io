let lines = [
    "[+] Initializing Cyber Delta Force...",
    "[+] Loading modules...",
    "[+] Verifying agents...",
    "[✓] Access granted. Welcome, Operator!"
  ];
  
  let i = 0;
  let consoleDiv = document.querySelector(".console-type");
  function typeLine() {
    if (i < lines.length) {
      consoleDiv.innerHTML += "<br>" + lines[i];
      i++;
      setTimeout(typeLine, 1000);
    }
  }
  setTimeout(typeLine, 1000);
  function toggleBio(id) {
    const bio = document.getElementById(id);
    bio.style.display = bio.style.display === "none" ? "block" : "none";
  }
  document.addEventListener('keydown', () => {
    document.getElementById('typeSound').play();
  });
  setInterval(() => {
    document.getElementById("clock").textContent =
      new Date().toLocaleTimeString();
  }, 1000);
  