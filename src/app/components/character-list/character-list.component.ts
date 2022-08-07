import { Component, Inject, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character-interfaces';
import { CharacterService } from 'src/app/shared/services/character.service';
import { filter, take } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { DOCUMENT } from "@angular/common";


type RequestInfo = {
  next: string | null;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  public characters: Character[] = [];
  info: RequestInfo = {
    next: null,

  }
  private pageNum = 1;
  private query!: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private characterService: CharacterService,
    private activateRoute:ActivatedRoute,
    private router:Router
  ) {
    this.onUrlChanged();
   }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  private onUrlChanged():void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd )
    ).subscribe(
      () => {
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      }
    )
  }

  private getCharactersByQuery():void{
    this.activateRoute.queryParams.pipe(
      take(1)).subscribe( (params: ParamMap) => {
      console.log('params', params)
      this.query = params['q'];
      this.getDataFromService();
    })
  }

  private getDataFromService(): void{
    this.characterService.searchCharacter(this.query, this.pageNum)
      .pipe(
        take(1)
      ).subscribe( (res:any) => {
        console.log('Response', res)
        if(res?.results?.length){
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        }else {
          this.characters = [];
        }

      })
  }

  onScrollDown():void{
    if(this.info.next){
      this.pageNum++;
      this.getDataFromService;
    }
  }

  onScrollTop():void{
    this.document.body.scrollTop = 0; //safari
    this.document.documentElement.scrollTop = 0; //other browser
  }

}
