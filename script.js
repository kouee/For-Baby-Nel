window.addEventListener('load', function() {
    const message1 = document.querySelector('.message1');
    const message2 = document.querySelector('.message2');

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

    // Hide second message after duration
    setTimeout(() => {
        message2.classList.remove('visible');
    }, 12000); // 6s display + 1s fade out after previous sequence
});