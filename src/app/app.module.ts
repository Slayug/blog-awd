import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TopComponent } from './components/top/top.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { ArticlesService } from './services/articles.service';
import { ProjectsService } from './services/projects.service';


import { RouterModule }   from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
    declarations: [
        AppComponent,
        PresentationComponent,
        TopComponent,
        CategoriesComponent,
        BottomComponent,
        ArticleDetailComponent,
        ArticlesComponent,
        NavBarComponent,
        ProjectsComponent,
        ProjectDetailComponent,
        CvComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule

    ],
    providers: [ArticlesService, ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
