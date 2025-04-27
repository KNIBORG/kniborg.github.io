const images = ["2.png", "3.png", "4.png"];
let currentIndex = 0;


function changeImage() {
    const sliderImage = document.getElementById("slider-image");
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
    
    // Restart animation
    sliderImage.style.animation = 'none'; // Reset
    void sliderImage.offsetWidth; // Trigger reflow (technical magic you don't need to understand)
    sliderImage.style.animation = 'slowZoomOut 3s ease-in-out forwards';
}


setInterval(changeImage, 5000);

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
    const body = document.body;

    // SVG icons with a class for animation
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="animated-icon moon_icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                      </svg>`;

    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="animated-icon sun_icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>`;

    // Function to toggle dark mode and animate icon
    function setDarkMode(enabled) {
        darkModeToggle.innerHTML = enabled ? sunIcon : moonIcon; // Set icon

        const icon = darkModeToggle.querySelector("svg"); // Get the inserted icon
        icon.classList.add("rotate"); // Add rotation animation

        // Remove animation class after animation completes
        setTimeout(() => {
            icon.classList.remove("rotate");
        }, 400);

        if (enabled) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    }

    // Check if dark mode was previously enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }

    // Toggle dark mode on click
    darkModeToggle.addEventListener("click", function () {
        setDarkMode(!body.classList.contains("dark-mode"));
    });
});






