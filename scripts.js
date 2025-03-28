const images = ["2.png", "3.png", "4.png"];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-image").src = images[currentIndex];
}

setInterval(changeImage, 2000);

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-buttons button");
    const members = document.querySelectorAll(".team-member");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            // Debugging: Check if button click is detected
            console.log("Filter clicked:", filter);

            members.forEach(member => {
                if (filter === "all") {
                    member.classList.remove("hidden");
                } else {
                    // Debugging: Check each member’s category
                    console.log("Member:", member.getAttribute("data-category"));

                    if (member.getAttribute("data-category") === filter) {
                        member.classList.remove("hidden");
                    } else {
                        member.classList.add("hidden");
                    }
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const darkModeIcon = darkModeToggle.querySelector("ion-icon"); // Get the icon
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeIcon.setAttribute("name", "sunny"); // Change icon to sun
    } else {
        darkModeIcon.setAttribute("name", "moon-sharp"); // Default icon
    }

    // Toggle dark mode and change icon
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeIcon.setAttribute("name", "sunny"); // Change to sun icon
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeIcon.setAttribute("name", "moon-sharp"); // Change to moon icon
        }
    });
});
