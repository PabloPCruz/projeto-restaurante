import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Contacts } from './contacts/contacts';
import { Events } from './events/events';
import { Menu } from './menu/menu';
import { PresentationComponent } from './presentation/presentation';

export const routes: Routes = [
    { path: 'header', component: Header },
    { path: 'contacts', component: Contacts },
    { path: 'events', component: Events },
    { path: 'menu', component: Menu },
    { path: 'presentation', component: PresentationComponent },
];
