import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-hijo-uno',
  templateUrl: './componente-hijo-uno.component.html',
  styleUrls: ['./componente-hijo-uno.component.css']
})
export class ComponenteHijoUnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  @Input()numeroComponenteHijoUno : number = 0;

}
