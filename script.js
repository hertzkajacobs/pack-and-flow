const quoteForm = document.querySelector("#quoteForm");
const formNote = document.querySelector("#formNote");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(quoteForm);
  const subject = encodeURIComponent("Pack and Flow quote request");
  const body = encodeURIComponent(
    [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Store platform: ${data.get("platform")}`,
      `Monthly orders: ${data.get("orders")}`,
      "",
      "Shipping needs:",
      data.get("message") || "Not provided"
    ].join("\n")
  );

  formNote.textContent = "Opening your email app with the quote request ready to send.";
  window.location.href = `mailto:packandf@gmail.com?subject=${subject}&body=${body}`;
});
