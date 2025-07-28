import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class HeaderService {

    smoothNavigation(): void {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener("click", this.scrollToSection);
        });
    }

    private scrollToSection(event: Event): void {
        event.preventDefault();

        const linkClicado = event.currentTarget as HTMLAnchorElement;
        const selectionId = linkClicado.hash.replace('#', '');
        const target = document.getElementById(selectionId);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

