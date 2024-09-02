import { IconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import { faRocket, faSatellite, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const icons: IconDefinition[] = [faRocket, faUserAstronaut, faSatellite];

class ArcadeIcon {
    element: HTMLDivElement;
    speed: number;
    rotation: number;
    icon: IconDefinition;

    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'arcade-icon';
        this.speed = Math.random() * 5 + 2;
        this.rotation = Math.random() * 360;
        this.icon = icons[Math.floor(Math.random() * icons.length)];
        this.element.style.left = `${Math.random() * 100}vw`;
        this.element.style.animationDuration = `${this.speed}s`;
        this.element.style.transform = `rotate(${this.rotation}deg)`;

        const iconElement = document.createElement('span');
        iconElement.className = 'fa-icon';
        this.element.appendChild(iconElement);

        iconElement.innerHTML = icon(this.icon).html[0];
    }
}

export function initArcadeBackground() {
    const container = document.getElementById('pixel-container');
    if (!container) return;

    const iconCount = Math.floor((window.innerWidth * window.innerHeight) / 40000); // Reduced count

    for (let i = 0; i < iconCount; i++) {
        const arcadeIcon = new ArcadeIcon();
        container.appendChild(arcadeIcon.element);
    }
}
