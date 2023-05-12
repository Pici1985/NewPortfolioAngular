import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolbarOverviewExampleComponent } from './Components/toolbar-overview-example/toolbar-overview-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { CharacterListComponent } from './Components/character-list/character-list.component';
import { CreateCharacterComponent } from './Components/create-character/create-character.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DetailsComponent } from './Components/details/details.component';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';





@NgModule({
  declarations: [
    AppComponent,
    ToolbarOverviewExampleComponent,
    SidenavComponent,
    CharacterListComponent,
    CreateCharacterComponent,
    HomePageComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    ContactComponent,
    DetailsComponent,
    BlogDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MaterialExampleModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
