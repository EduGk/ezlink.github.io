//CONTACT
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.innerHTML = "⏳ Enviando...";

    let data = new FormData(form);

    try {
      let response = await fetch("https://formspree.io/f/xdkldbvb", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.innerHTML = "✅ ¡Mensaje enviado con éxito!";
        form.reset();
      } else {
        status.innerHTML = "❌ Hubo un error. Intenta nuevamente.";
      }
    } catch (err) {
      status.innerHTML = "⚠️ Error de conexión.";
    }
  });
});