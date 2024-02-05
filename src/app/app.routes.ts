import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LibraryComponent } from './pages/library/library.component';
import { DetailsComponent } from './pages/details/details.component';
import { ReadComponent } from './pages/read/read.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'user/:userId/home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'book/:bookId/details',
        component: DetailsComponent,
        title: 'Details'
    },
    {
        path: 'user/:userId',
        component: ProfileComponent,
        title: 'Profile'
    },
    {
        path: 'store',
        component: StoreComponent,
        title: 'Store'
    },
    {
        path: 'user/:userId/library',
        component: LibraryComponent,
        title: 'Library'
    },
    {
        path: 'book/:bookId/read',
        component: ReadComponent,
        title: 'Read'
    },

];

export default routes;
