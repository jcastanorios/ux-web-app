
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      CommonModule
    ],
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';
  menuOpen: boolean = false;
  initialUser:string='';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.username = params['name_usuario'] || 'Usuario';
      this.extractInitial();
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
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
}