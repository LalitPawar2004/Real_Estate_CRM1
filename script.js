document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const breadcrumbLinks = document.querySelectorAll(".breadcrumb a");

    // Function to show the selected section and hide others
    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Add click event listeners to breadcrumb links
    breadcrumbLinks.forEach((link, index) => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            showSection(index);
            breadcrumbLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active'); // Highlight the active link
        });
    });

    // Show the first section by default
    showSection(0);
});




function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion-content');

    // Close other accordions
    allContents.forEach(item => {
        if (item !== content) {
            item.style.display = 'none';
        }
    });

    // Toggle the clicked accordion
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

function selectColor(color) {
    alert('You selected color: ' + color); // You can replace this with any functionality you want
}
