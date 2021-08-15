import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { DevlyDataComponent } from './devly-data/devly-data.component';
import { AppRoutingModule } from './routing.module';
import { DevlySidepanelComponent } from './devly-sidepanel/devly-sidepanel.component';
import { ProjectsComponent } from './projects/projects.component';
import { DevlyFooterComponent } from './devly-footer/devly-footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevlyDataComponent,
    DevlySidepanelComponent,
    ProjectsComponent,
    DevlyFooterComponent,
    AboutusComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
