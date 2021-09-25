import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  componentes : Componente[] =[
    {
      icon: 'business-outline',
      name: 'GTA SA', 
      redirecTo: '/gtasa'
    },
    {
      icon: 'diamond-outline',
      name: 'GTA Five', 
      redirecTo: '/gta5'
    },
  ]
  constructor(private menuController: MenuController) { }

  ngOnInit() {

  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
