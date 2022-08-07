import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSearch(value: string){
    console.log('Buscar el valor', value)
    if(value && value.length > 3){
      this.router.navigate(['/'],{
        queryParams: {q:value}
      })
    }
  }

}
