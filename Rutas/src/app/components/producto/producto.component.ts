import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


  ActivatedRoute = inject(ActivatedRoute);

productoId: any ;

ngOnInit() {
  //me subscribo al observable "params" para recuperar los valores variables de la URL
  this.ActivatedRoute.params.subscribe(params => {
    this.productoId = params['productoId'];
});
}

}
