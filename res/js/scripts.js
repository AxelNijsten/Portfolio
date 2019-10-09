

// This translate the nav element to show the selected item
function translateNav(item) {
    // If animation is defined, pause it
    if (navItemsAnimation) navItemsAnimation.pause();
    // Animate the `translateY` of `nav` to show only the current link
    navItemsAnimation = anime({
        targets: navEl,
        translateY: (item ? -activeIndex * navHeight : 0) + 'px',
        easing: 'easeOutCubic',
        duration: 500
    });
    // Update link on arrows, and disable/enable accordingly if first or last link
    updateArrows();
}