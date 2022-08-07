import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Character } from 'src/app/shared/interfaces/character-interfaces';
import { CharacterService } from 'src/app/shared/services/character.service';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character> | undefined;
  
  constructor(
    private activateRoute: ActivatedRoute,
    private characterService: CharacterService,
    // private location: Location
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      take(1)
    ).subscribe((params) => {
        const id = params['id'];
        this.character$ = this.characterService.getDetails(id);
        console.log(this.character$)
    });
  }

}
