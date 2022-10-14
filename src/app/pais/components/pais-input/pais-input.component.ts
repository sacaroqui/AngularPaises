import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';



@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit  {

termino:string='';
@Input() placeholder:string = '';
@Output () onEnter : EventEmitter<string> = new EventEmitter();
@Output () onDebounce: EventEmitter<string> = new EventEmitter();

debouncer : Subject<string> = new Subject();

ngOnInit()  {
  this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor=>{
        this.onDebounce.emit(valor);
    console.log('debouncer:', valor);
  })
}
buscar (){
  console.log(this.termino);
  this.onEnter.emit(this.termino);
}
teclaPresinada(){
  this.debouncer.next(this.termino);
}

}
