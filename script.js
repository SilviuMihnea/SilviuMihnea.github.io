function createBubble(bubble) {
    const element = document.createElement('div');
    element.id = `floating-bubble-${bubble.name.replace('.png', '')}`;
    element.classList.add('floating');
    element.classList.add(`floating-${bubble.size}`);
    element.style.top = '150px';
    element.style.animation = `float-top ${10 + Math.random() * 10}s -200s linear infinite, 
                                float-left ${30 + 30 * Math.random()}s -200s linear infinite`;

    element.addEventListener('click', () => {
        if (element.style.animationPlayState === 'paused') {
            element.style.animationPlayState = 'running';
            element.classList.remove('floating-expanded');
        } else {
            element.style.animationPlayState = 'paused';
            element.classList.add('floating-expanded');
        }
    })                            
    // image
    const image = document.createElement('img');
    image.src = `./images/${bubble.name}`;
    element.appendChild(image);

    return element;
}

const bubblesWrapper = document.getElementById('floating-bubbles');

skills.map(createBubble).forEach(bubble => bubblesWrapper.appendChild(bubble));