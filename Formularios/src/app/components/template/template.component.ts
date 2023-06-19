import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

@ViewChild('parrafo') parrafo: ElementRef | undefined = undefined

  ngOnInit() {
    console.log(this.parrafo)
  }
  ngAfterViewInit() {
  //this.parrafo!.nativeElement.style.backgroundColor= 'red' // equivale a los metodos de capturar el DOM en JAVASCRIPT, pero no se utilizan ya que existen herramientas como ngStyle o ngClass para modificar elementos.
  }

  onSubmit(formValue: any) {
    console.log(formValue);
  }

}
