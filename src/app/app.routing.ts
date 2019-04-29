import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { ServerTableComponent } from './serverTable';
import { SubmitServerComponent } from 'src/app/submit-server';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'servers', component: ServerTableComponent  },
    { path: 'servers/add', component: SubmitServerComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
