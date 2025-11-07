// tab underline on hover effect (all pages with header)
document.addEventListener("DOMContentLoaded", () => {
    console.log("dom loaded");
    document.querySelectorAll('.tab').forEach(tab => {
        console.log("tab found");
        // Create the animated border element
        const border = document.createElement('div');
        border.className = `
            h-[4px] rounded
            transition-all duration-300 ease-in-out
        `;

        if (tab.parentElement && tab.parentElement.classList.contains('header')) {
            border.classList.add('bg-orange-400');
        } else {
            border.classList.add('bg-[#51658f]');
        }

        border.style.width = '0';
        tab.appendChild(border);

        // Animate on hover
        tab.addEventListener('mouseenter', () => {
            border.style.width = '100%';
        });

        tab.addEventListener('mouseleave', () => {
            border.style.width = '0';
        });
    });
});