
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button[id^='quiz']");

    // Check local storage and apply 'clicked' class if the quiz has been done
    buttons.forEach(button => {
        const quizId = button.id;
        if (localStorage.getItem(quizId) === "done") {
            button.classList.add("clicked");
        }

        // Add event listener to handle button clicks
        button.addEventListener("click", function() {
            localStorage.setItem(quizId, "done");
            button.classList.add("clicked");
        });
    });
});
