import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Menu } from './menu'

@NgModule({
    declarations: [Menu],
    imports: [CommonModule],
    exports: [Menu],
})

export class MenuModule { }