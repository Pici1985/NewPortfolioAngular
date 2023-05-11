import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './Components/character-list/character-list.component';
import { CreateCharacterComponent } from './Components/create-character/create-character.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
  { path: 'list', component: CharacterListComponent },
  { path: 'create', component: CreateCharacterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', component: HomePageComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }