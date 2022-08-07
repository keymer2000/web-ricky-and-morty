import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    CardCharacterComponent,
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
