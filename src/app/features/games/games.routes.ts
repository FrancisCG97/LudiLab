import { Routes } from '@angular/router';

const gamesRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./list/list.component').then(m => m.ListComponent),
    }
];

export default gamesRoute;