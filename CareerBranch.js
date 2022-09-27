window.onload = () => {
  document.querySelectorAll(".careerCarousel").forEach((careerCarousel) => {
    const panel = careerCarousel.querySelectorAll(".careerCarouselPanel");
    // const buttonsHTML = Array.from(panel, () => {
    //   return `<span class = "careerCarouselButton"></span>`;
    // });

    careerCarousel.insertAdjacentHTML(
      "beforeend",
      `
        <div class = "careerCarouselNav">
            ${buttonsHTML.join("")}
        </div>
    `
    );

    const buttons = careerCarousel.querySelectorAll(".careerCarouselButton");

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        panel.forEach((item) =>
          //deselecting all
          panel.classList.remove("careerCarouselPanelSelected")
        );
        buttons.forEach((button) =>
          button.classList.remove("careerCarouselButtonSelected")
        );
        panel[i].classList.add("careerCarouselPanelSelected");
        button.classList.add("careerCarouselButtonSelected");
      });
    });

    //Select the first item of the page load
    panel[0].classList.add("careerCarouselPanelSelected");
    buttons[0].classList.add("careerCarouselButtonSelected");
  });
};
