import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PresentationComponent } from './presentation'

@NgModule({
    declarations: [PresentationComponent],
    imports: [CommonModule],
    exports: [PresentationComponent],
})

export class PresentationModule { }