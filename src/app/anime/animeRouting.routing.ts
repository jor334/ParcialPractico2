import { Routes, RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime-list/anime-list.component';


const routes: Routes = [
  { path: ':id',
    component:  AnimeDetailComponent
   },
   {path: 'list',
    component: AnimeListComponent
   }
];

export const AnimeRoutingRoutes = RouterModule.forChild(routes);
