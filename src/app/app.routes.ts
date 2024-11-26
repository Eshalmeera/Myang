import { Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { TodoComponent } from './content/todo/todo.component';
import { ContactComponent } from './content/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"todo",component:TodoComponent},
    {path:"contact",component:ContactComponent},
];
