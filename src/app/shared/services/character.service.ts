import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private API_URL: string = environment.baseUrlApi;

  constructor(
    private http: HttpClient
  ) { }

  searchCharacter(query='', page = 1){
    const filter = `${environment.baseUrlApi}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }

  getDetails(id:number){
    return this.http.get<Character>(`${environment.baseUrlApi}/${id}`)
  }

  //PETICIONES CON RXJS
  getCharacters( searchTerm:string, page = 1 ):Observable<any>{
    const filter = `${environment.baseUrlApi}/?name=${searchTerm}&page=${page}`;
    // return this.http.get(this.API_URL +'?name='+ searchTerm)
    return this.http.get<Character[]>(filter);
  }
}
