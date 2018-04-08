import { AboutMeRoutes } from './about-me.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';

@NgModule({
    imports: [CommonModule, AboutMeRoutes],
    declarations: [AboutMeComponent]
})
export class AboutMeModule {}
