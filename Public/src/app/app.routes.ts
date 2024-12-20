import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RoominfoComponent } from './components/roominfo/roominfo.component';
import { LostpassComponent } from './components/lostpass/lostpass.component';
import { LogoutComponent } from './components/logout/logout.component';
import { userAuthGuard } from './guards/user-auth.guard';
import { adminAuthGuard } from './guards/admin-auth.guard';

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: 'lostpass', component: LostpassComponent
  },
  {
    path: 'rooms', component: RoomsComponent
  },
  {
    path: 'rooms/:id', component: RoominfoComponent, canActivate: [userAuthGuard]
  },
  {
    path: 'admin', canActivate: [AdminAuthGuard],
    children : [
      {
        path: 'rooms', component: ManageRoomsComponent
      },
      {
        path: 'bookings', component: ManageBookingsComponent
      }
    ]
  },
  {
    path: '', redirectTo: 'rooms', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponent
  }
];
