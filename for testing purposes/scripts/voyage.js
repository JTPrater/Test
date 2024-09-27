// Function to create a cloud element
function createCloud() {
    const cloud = document.createElement('img');
    const cloudTypes = ['images/cloud1.png', 'images/cloud2.png']; // Array of cloud images
    cloud.src = cloudTypes[Math.floor(Math.random() * cloudTypes.length)]; // Randomly select a cloud image
    cloud.className = 'cloud';
    cloud.style.left = '100%'; // Start from the right edge

    // Set random vertical position for the cloud
    const verticalPosition = Math.random() * 20 + 5; // Random position between 5% and 25% of the viewport height
    cloud.style.top = `${verticalPosition}vh`;

    // Set random size for the cloud
    const size = Math.random() * 15 + 10; // Random size between 10% and 25%
    cloud.style.width = `${size}%`;
    cloud.style.height = 'auto'; // Maintain aspect ratio

    document.getElementById('cloud-container').appendChild(cloud);

    // Calculate the duration based on the desired speed (e.g., 10 pixels per second)
    const speed = 5; // Speed in pixels per second
    const viewportWidth = window.innerWidth;
    const cloudWidth = cloud.offsetWidth;
    const distance = viewportWidth + cloudWidth;
    const duration = distance / speed;

    // Animate the cloud to move to the left
    cloud.style.transition = `left ${duration}s linear`;
    setTimeout(() => {
        cloud.style.left = `-${cloudWidth}px`; // Move to the left edge
    }, 100); // Delay to ensure the transition applies

    // Remove the cloud once it goes off the page
    cloud.addEventListener('transitionend', () => {
        cloud.remove();
    });
}

// Function to generate clouds at intervals
function generateClouds() {
    createCloud();
    setInterval(createCloud, 40000); // Create a new cloud every 40 seconds
}

// Start generating clouds when the page loads
window.onload = generateClouds;