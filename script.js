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

    // Show first message
    setTimeout(() => message1.classList.add('visible'), 0);

    // First message sequence
    setTimeout(() => {
        message1.classList.remove('visible');
        
        // Show second message after first fades out
        setTimeout(() => {
            message2.classList.add('visible');
        }, 1000);
        
    }, 4000); // 3s display + 1s fade out

    // Second message sequence
    setTimeout(() => {
        message2.classList.remove('visible');
        
        // Show third message after second fades out
        setTimeout(() => {
            message3.classList.add('visible');
        }, 1000);
        
    }, 11000); // 6s display + 1s fade out after previous sequence

    // Third message sequence
    setTimeout(() => {
        message3.classList.remove('visible');
        
        // Show fourth message after third fades out
        setTimeout(() => {
            message4.classList.add('visible');
            
            // Show the button after 2 seconds
            setTimeout(() => {
                nextButton.classList.add('visible');
            }, 2000); // 2-second delay for the button
        }, 1000);
        
    }, 22000); // 10s display + 1s fade out after previous sequence

    // Button click event
    nextButton.addEventListener('click', () => {
        // Slide page1 to the left
        page1.style.transform = 'translateX(-100vw)';
        
        // Slide page2 into view
        page2.style.transform = 'translateX(0)';
        
        // Show memory image after the page transition is done
        setTimeout(() => {
            memoryImage.classList.add('visible');
            
            // Wait 2 seconds, then move the image to the left
            setTimeout(() => {
                memoryImage.classList.add('move-left');
                
                // Wait 1 second, then show the text container
                setTimeout(() => {
                    textContainer.classList.add('visible');
                    
                    // Show the first text message
                    setTimeout(() => {
                        text1.classList.add('visible');
                        
                        // Show the second text message after 4 seconds
                        setTimeout(() => {
                            text2.classList.add('visible');
                            
                            // After 3 seconds, fade out text, shrink image, and move it to the top left
                            setTimeout(() => {
                                text1.classList.add('fade-out');
                                text2.classList.add('fade-out');
                                
                                // Shrink the image
                                memoryImage.classList.add('shrink');
                                
                                // Wait 0.5 seconds, then move the image to the top left
                                setTimeout(() => {
                                    memoryImage.classList.add('move-top-left');
                                }, 500); // 0.5 seconds delay
                            }, 3000); // 3 seconds delay
                        }, 4000); // 4 seconds delay
                    }, 1000); // 1 second delay
                }, 1000); // 1 second delay
            }, 2000); // 2 seconds delay
        }, 1000); // Wait for the page transition to finish
    });

    // Detect cursor proximity to the button
    document.addEventListener('mousemove', (e) => {
        const buttonRect = nextButton.getBoundingClientRect();
        const cursorX = e.clientX;
        const cursorY = e.clientY;

        // Define a proximity threshold (e.g., 100px)
        const proximityThreshold = 100;

        // Check if the cursor is near the button
        if (
            cursorX >= buttonRect.left - proximityThreshold &&
            cursorX <= buttonRect.right + proximityThreshold &&
            cursorY >= buttonRect.top - proximityThreshold &&
            cursorY <= buttonRect.bottom + proximityThreshold
        ) {
            nextButton.classList.add('zoom-out'); // Apply zoom-out effect
        } else {
            nextButton.classList.remove('zoom-out'); // Remove zoom-out effect
        }
    });
});