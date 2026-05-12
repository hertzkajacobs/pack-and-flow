const quoteForm = document.querySelector("#quoteForm");
const formNote = document.querySelector("#formNote");
const savingsButtons = document.querySelectorAll("[data-savings-view]");
const savingsCards = document.querySelectorAll("[data-cost-card]");

savingsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedView = button.dataset.savingsView;

    savingsButtons.forEach((option) => {
      const isActive = option === button;
      option.classList.toggle("active", isActive);
      option.setAttribute("aria-pressed", String(isActive));
    });

    savingsCards.forEach((card) => {
      card.classList.toggle("active", card.dataset.costCard === selectedView);
    });
  });
});

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
