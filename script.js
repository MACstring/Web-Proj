document.addEventListener('DOMContentLoaded', function() {
    const introPage = document.querySelector('.intro-page');
    const mainContent = document.querySelector('.main-content');
    const cursor = document.querySelector('.custom-cursor');
    const cursorGlow = document.querySelector('.custom-cursor-dot');
    const gradient = document.querySelector('.gradient');

    let isCursorMoving = false;

    setTimeout(function() {
        introPage.style.transform = 'translateY(-100vh)';
        mainContent.style.display = 'block';

        setTimeout(function() {
            introPage.style.display = 'none';
            mainContent.style.opacity = '1';
        }, 1000);
    }, 1000);

    const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursor.style.top = mouseY + 'px';
        cursor.style.left = mouseX + 'px';

        if (!isCursorMoving && cursorGlow && cursorGlow.style) {
            const glowX = mouseX - 50;
            const glowY = mouseY - 50;

            cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;
        }
    };

    document.addEventListener('mousemove', handleMouseMove);

    cursor.addEventListener('mouseenter', () => {
        isCursorMoving = true;
    });

    cursor.addEventListener('mouseleave', () => {
        isCursorMoving = false;
    });

    const aboutSection = document.querySelector('.about-us');
    const contactSection = document.querySelector('.contact-us');

    const handleAboutClick = () => {
        // Handle click for the 'About Us' section
        // You can add your logic here
        console.log('About Us clicked!');
        // Example: Redirect to About Us page
        window.location.href = '/about';
    };

    const handleContactClick = () => {
        // Handle click for the 'Contact Us' section
        // You can add your logic here
        console.log('Contact Us clicked!');
        // Example: Redirect to Contact Us page
        window.location.href = '/contact';
    };

    aboutSection.addEventListener('click', handleAboutClick);
    contactSection.addEventListener('click', handleContactClick);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sectionHeight = aboutSection.offsetHeight;
        const showAtScrollPosition = sectionHeight;

        if (scrollPosition >= showAtScrollPosition) {
            gradient.style.opacity = '1';
        } else {
            gradient.style.opacity = '0';
        }
    };

    window.addEventListener('scroll', handleScroll);
});
