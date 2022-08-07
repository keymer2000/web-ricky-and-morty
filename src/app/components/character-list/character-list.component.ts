import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character-interfaces';
import { CharacterServiceService } from 'src/app/shared/services/character-service.service';
import { filter, take } from 'rxjs/operators';

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
    private characterService: CharacterServiceService
  ) { }

  ngOnInit(): void {
    this.getDataFromService();
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

}
