import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {
  // tabs: string[] ;
  // activeTab: number;
opcionSeleccionada : string;
  constructor() {
    // this.activeTab = 0
    // this.tabs = [];
    this.opcionSeleccionada = 'stats';
   }

ngOnInit(): void {
}
cambiarSeleccion( seleccion : string){
  this.opcionSeleccionada = seleccion;
}

//   selectTab(index: number): void {
//     this.activeTab = index;
//   }
// }
}
