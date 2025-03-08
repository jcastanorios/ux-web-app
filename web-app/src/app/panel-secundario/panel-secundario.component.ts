
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      CommonModule
    ],
  templateUrl:'./panel-secundario.component.html',
  styleUrls: ['./panel-secundario.component.css']
})
export class PanelSecundarioComponent {
  username: string = '';
  menuOpen: boolean = false;
  initialUser:string='';
  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(param=>{
      this.username = param['name_usuario'] || 'Usuario';
      this.currentRoute=param['section']
      this.extractInitial();
    });
  }

  toggleMenu() {
    this.menuOpen = true;
  }

  logout() {
    this.router.navigate(['/']);
  }

  extractInitial() {
    this.initialUser = this.username.charAt(0).toUpperCase();
  }

  navigateToPanel(route: string) {
    this.router.navigate([route]);
  }
  navigateToHome(){
    this.router.navigate(['/home']); 
  }

}