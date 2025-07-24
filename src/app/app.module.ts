import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { App } from "./app";
import { AppRoutingModule } from "./app-routing.module";

import { HeaderModule } from "./header/header.module";
import { PresentationModule } from "./presentation/presentation.module";
import { MenuModule } from "./menu/menu.module";
import { EventsModule } from "./events/events.module";
import { ContatcsModule } from "./contacts/contacts.module";

@NgModule({
    declarations: [App],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        PresentationModule,
        MenuModule,
        EventsModule,
        ContatcsModule
    ],
    bootstrap: [App],
})

export class AppModule { }