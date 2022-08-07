import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(
    private http: HttpClient
  ) { }


  searchCharacter(query='', page = 1){
    const filter = `${environment.baseUrlApi}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }
}
