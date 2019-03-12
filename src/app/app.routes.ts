import {Routes} from  '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomelsComponent } from './homels/homels.component';
import { HoomlesComponent } from './hoomles/hoomles.component';

export const ROUTES: Routes = [
    {path:'home',component: HomeComponent},
    {path:'homels',component: HomelsComponent},
    {path:'hoomles',component: HoomlesComponent}

];