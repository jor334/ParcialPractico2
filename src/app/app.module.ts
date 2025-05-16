import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeModule } from './anime/anime.module';
import { HttpClientModule } from '@angular/common/http';
import { AnimeRoutingRoutes } from './anime/animeRouting.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimeModule,
    HttpClientModule,
    AnimeRoutingRoutes  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }    

