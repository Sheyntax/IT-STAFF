
// SELECT NAVIGATION LINKS
const navLinks = document.querySelectorAll("nav a");

// SELECT WEBSITE SECTIONS
const sections = document.querySelectorAll("section[id]");

// DETECT WHICH SECTION IS VISIBLE
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            // REMOVE ACTIVE CLASS FROM ALL LINKS
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            // FIND THE MATCHING NAVIGATION LINK
            const activeLink = document.querySelector(
                `nav a[href="#${entry.target.id}"]`
            );

            // ADD ACTIVE CLASS
            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}, {
    threshold: 0.4
});

// OBSERVE ALL SECTIONS
sections.forEach((section) => {
    observer.observe(section);
});

