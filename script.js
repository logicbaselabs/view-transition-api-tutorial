function addStoryCard(data) {
    const templateCard = document.querySelector(".story-card");
    if (!templateCard) return;

    // Clone the card
    const newCard = templateCard.cloneNode(true);

    // Update image if provided
    if (data.image) {
        const currentImage = newCard.querySelector("img");
        currentImage.setAttribute("img", `url('${data.image}')`);
    }

    // Update content
    const tag = newCard.querySelector(".story-tag");
    const title = newCard.querySelector(".story-title");
    const desc = newCard.querySelector(".story-description");
    if (tag) tag.textContent = data.tag;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.description;

    return newCard;
}

const newStoryButton = document.querySelector(".new-story-btn");

newStoryButton.addEventListener("click", async () => {
    const container = document.querySelector(".stories-container");

    const newCard = addStoryCard({
        tag: "Fantasy",
        title: "Sky Kingdoms",
        description:
            "A tale of floating islands and the heroes who defend them.",
        image: "./assets/image-5.jpg",
    });

    newCard.style.viewTransitionName = "targeted-card";

    const transition = document.startViewTransition(async () => {
        container.appendChild(newCard);
    });

    await transition.finished;

    newCard.style.viewTransitionName = null;
});
