import { AboutMeComponent } from './about-me.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AboutMeComponent
    }
];

export const AboutMeRoutes = RouterModule.forChild(routes);
