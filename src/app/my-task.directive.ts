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
    this.changeColorTask();
  }
  
  @HostListener('click')
  onClick() { 
    alert('Em manutenção. No futuro terá a possibilidade de remover');
  }

  changeColorTask() { 
    this.el.nativeElement.style.color = this.myTask.value < 0 ? 'gray' : 'white';
  }
}