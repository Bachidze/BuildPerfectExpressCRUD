const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = form.name.value;
    const desc = form.desc.value;
    const res = await fetch("http://localhost:3001/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, desc }),
    });
  
    if (res.ok) {
      window.location.href = "/"; 
    } else {
      console.error("Failed to add user");
    }
  });
  