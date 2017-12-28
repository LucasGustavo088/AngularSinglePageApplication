import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Task } from './task';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask:Task;

  constructor(private el:ElementRef) { 
    this.el.nativeElement.innerHTML += '';
  }
  
  get myTask() {
    return this._myTask;
  }

  @Input()
  set myTask(value:Task) {
    this._myTask = value;
    this.menorQueZero();
  }
  
  @HostListener('click')
  onClick() { 
    alert('Em manutenção. No futuro terá a possibilidade de remover');
  }

  menorQueZero() { 
    this.el.nativeElement.innerHTML = this.myTask.value < 0 ?'Não é possível remover uma tarefa com valor menor que R$ 0,00' : 'Remover';
  }
}
