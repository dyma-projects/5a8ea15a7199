import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';


@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
  	this.el.nativeElement.style.color = "red"
  }

   @HostListener('window:keydown', ['$event']) KeyboardEvent($event) {
     if($event.key == "ArrowDown"){
     	this.el.nativeElement.style.color = "red"

     }else if ($event.key == "ArrowUp"){
     	this.el.nativeElement.style.color = "blue"

     }else if ($event.key == "ArrowRight"){
     	this.el.nativeElement.style.color = "pink"

     }else if ($event.key == "ArrowLeft"){
     	this.el.nativeElement.style.color = "green"
     }else{
     	this.el.nativeElement.style.color = null

     }
  }

}
