import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DevlyDataComponent } from './devly-data/devly-data.component';
import { AppRoutingModule } from './routing.module';
import { DevlySidepanelComponent } from './devly-sidepanel/devly-sidepanel.component';
import { ProjectsComponent } from './projects/projects.component';
import { DevlyFooterComponent } from './devly-footer/devly-footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevlyDataComponent,
    DevlySidepanelComponent,
    ProjectsComponent,
    DevlyFooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
