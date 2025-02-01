window.addEventListener('load', function() {
    const message1 = document.querySelector('.message1');
    const message2 = document.querySelector('.message2');
    const message3 = document.querySelector('.message3');
    const message4 = document.querySelector('.message4');
    const nextButton = document.querySelector('.next-button');
    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');
    const memoryImage = document.querySelector('.memory-image');
    const textContainer = document.querySelector('.text-container');
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');

    // Initial message sequence
    setTimeout(() => message1.classList.add('visible'), 0);
    setTimeout(() => message1.classList.remove('visible'), 4000);
    setTimeout(() => message2.classList.add('visible'), 5000);
    setTimeout(() => message2.classList.remove('visible'), 11000);
    setTimeout(() => message3.classList.add('visible'), 12000);
    setTimeout(() => message3.classList.remove('visible'), 22000);
    setTimeout(() => {
        message4.classList.add('visible');
        setTimeout(() => nextButton.classList.add('visible'), 2000);
    }, 23000);

    // Button click handler
    nextButton.addEventListener('click', () => {
        page1.style.transform = 'translateX(-100vw)';
        page2.style.transform = 'translateX(0)';
        
        setTimeout(() => {
            // Show image
            memoryImage.classList.add('visible');
            
            // First move to left after 2 seconds
            setTimeout(() => {
                memoryImage.classList.add('move-left');
                
                // Show text after 1 second
                setTimeout(() => {
                    textContainer.classList.add('visible');
                    text1.classList.add('visible');
                    
                    // Show second text after 4 seconds
                    setTimeout(() => {
                        text2.classList.add('visible');
                        
                        // Final sequence after 3 seconds
                        setTimeout(() => {
                            // Fade out text
                            text1.classList.add('fade-out');
                            text2.classList.add('fade-out');
                            
                            // Shrink animation
                            memoryImage.classList.add('shrink');
                            
                            // Diagonal movement after shrink
                            setTimeout(() => {
                                memoryImage.classList.add('move-diagonal');
                            }, 500); // 0.5s after shrink starts
                        }, 3000); // Wait 3 seconds
                    }, 4000); // Wait 4 seconds
                }, 1000); // Wait 1 second
            }, 2000); // Wait 2 seconds
        }, 1000); // Initial delay
    });

    // Button hover effect
    document.addEventListener('mousemove', (e) => {
        const buttonRect = nextButton.getBoundingClientRect();
        const threshold = 100;
        const nearButton = (
            e.clientX >= buttonRect.left - threshold &&
            e.clientX <= buttonRect.right + threshold &&
            e.clientY >= buttonRect.top - threshold &&
            e.clientY <= buttonRect.bottom + threshold
        );
        nextButton.classList.toggle('zoom-out', nearButton);
    });
});