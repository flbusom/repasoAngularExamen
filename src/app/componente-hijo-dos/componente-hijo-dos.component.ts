import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo-dos',
  templateUrl: './componente-hijo-dos.component.html',
  styleUrls: ['./componente-hijo-dos.component.css']
})
export class ComponenteHijoDosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
 
  @Input() numeroComponenteDos: number = 0;

 @Output() onClickActualizar: EventEmitter<number> = new EventEmitter();


  actualizarNumero() {
    this.numeroComponenteDos += 1;

    this.onClickActualizar.emit(this.numeroComponenteDos);
  }

}
