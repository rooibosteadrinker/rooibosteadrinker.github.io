const roleButtons = document.querySelectorAll(".role-button");
const detailPanel = document.querySelector(".role-detail");
const detailCompany = document.querySelector("[data-detail-company]");
const detailPosition = document.querySelector("[data-detail-position]");

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roleButtons.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      item.closest("li")?.classList.remove("is-selected");
    });

    button.setAttribute("aria-expanded", "true");
    button.closest("li")?.classList.add("is-selected");

    detailCompany.textContent = button.dataset.company || "";
    detailPosition.textContent = button.dataset.position || "";
    detailPanel.classList.add("is-visible");
  });
});
