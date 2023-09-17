const createSpanAndColorEvents = (elementId, hoverColor, resetDelay) => {
    const element = document.querySelector(`#${elementId}`);
    const elementText = element.innerHTML;
    const elementLetters = elementText.split("");
    element.innerHTML = "";

    elementLetters.forEach((letter) => {
        const span = document.createElement("span");
        span.innerHTML = letter;
        element.appendChild(span);

        span.addEventListener("mouseover", () => {
            span.style.color = hoverColor;
        });

        span.addEventListener("mouseout", () => {
            setTimeout(() => {
                span.style.color = "";
            }, resetDelay);
        });
    });
};

createSpanAndColorEvents("first-name", "#CCBA78", 250);

createSpanAndColorEvents("last-name", "#CCBA78", 150);

createSpanAndColorEvents("title-biography", "#CCBA78", 150);

createSpanAndColorEvents("title-hobbies", "#CCBA78", 150);

createSpanAndColorEvents("title-sports", "#CCBA78", 150);

createSpanAndColorEvents("title-food", "#CCBA78", 150);

createSpanAndColorEvents("title-gallery", "#CCBA78", 150);
