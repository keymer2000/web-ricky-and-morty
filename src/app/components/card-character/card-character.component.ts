import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character-interfaces';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {
  // @Input() character?: Character;
  @Input('character') character: Character;

  constructor() { 
  }
  
  ngOnInit(): void {
    changeDetection: ChangeDetectionStrategy.OnPush
  }

}
