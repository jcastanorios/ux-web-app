import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog.component';


@Component({
  selector: 'app-listas-activacion-cta',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,  
    MatTableModule,
    FormsModule    
  ],
  templateUrl: './listas-activacion-cta.html',
  styleUrl: './listas-activacion-cta.css'
})
export class ListasActivacionCtaComponent {

  username: string = '';
  menuOpen: boolean = false;
  initialUser: string = '';
  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {

    this.route.params.subscribe(param => {
      this.username = param['name_usuario'] || 'Usuario';
      this.currentRoute = param['section']
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
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  displayedColumns: string[] = ['id', 'username', 'account', 'status', 'checkbox'];
  dataSource = [
    { id: 1, username: 'Ignacio Mejia', user:'imejia', email: 'imejia@ux.edu.co', method: 'usuario y contraseña', selected: false },
    { id: 2, username: 'Julio Diaz', user:'jdiaz', email: 'jdiaz@ux.edu.co', method: 'usuario y contraseña', selected: false },
    { id: 3, username: 'Mariana Lopez', user:'mlopez', email: 'mlopez@ux.edu.co', method: 'usuario y contraseña', selected: false },
    { id: 4, username: 'Francisco Perez', user:'fperez', email: 'fperez@ux.edu.co', method: 'usuario y contraseña', selected: false },
    { id: 5, username: 'Julieta Garcìa', user:'jgarcia', email: 'jgarcia@ux.edu.co', method: 'huella digital', selected: false },
    { id: 6, username: 'Juan Castaño', user:'jucastano', email: 'jucastano@ux.edu.co', method: 'usuario y contraseña', selected: false },
    { id: 7, username: 'Jorge Toro', user:'jotoro', email: 'jtoro@ux.edu.co', method: 'usuario y contraseña', selected: false },
    { id: 8, username: 'Miguel Moreno', user:'mmoreno', email: 'mmoreno@ux.edu.co', method: 'usuario y contraseña', selected: false },
    { id: 9, username: 'Paula DStefano', user:'pdstefa', email: 'pdstefa@ux.edu.co', method: 'huella digital', selected: false },
  ];

  getRowColor(row: any) {
    return row.id % 2 === 0 ? '#B7E3FA' : '#8FD3F7';  // Alterna entre los dos colores
  }

  openConfirmDialog(): void {
    const dialogText = '¿Está seguro de activar las cuentas seleccionadas?';
    const path       = 'panel/seguridad';
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '440px',
      height: '290px',
      data: { text: dialogText, uri: path }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateData();
      }
    });
  }

  updateData(): void {
    console.log('Datos actualizados');
  }

}
