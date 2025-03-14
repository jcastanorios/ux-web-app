import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog.component';


@Component({
  selector: 'app-listas-role',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,  
    MatTableModule,
    FormsModule    
  ],
  templateUrl: './listas-role.html',
  styleUrl: './listas-role.css'
})
export class ListasRoleComponent {

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
    { id: 1, username: 'Ignacio Mejia', account: '1234-98', status: 'Activo', selected: false },
    { id: 2, username: 'Julio Diaz', account: '33434-98', status: 'Activo', selected: false },
    { id: 3, username: 'Mariana Lopez', account: '99834', status: 'Activo', selected: false },
    { id: 4, username: 'Francisco Perez', account: '32091', status: 'Activo', selected: false },
    { id: 5, username: 'Julieta Garcìa', account: '20918', status: 'Activo', selected: false },
    { id: 6, username: 'Juan Castaño', account: '92871', status: 'Activo', selected: false },
    { id: 7, username: 'Jorge Toro', account: '1234', status: 'Activo', selected: false },
    { id: 8, username: 'Miguel Moreno', account: '9872', status: 'Activo', selected: false },
    { id: 9, username: 'Paula DStefano', account: 'A88882', status: 'Activo', selected: false }
  ];

  getRowColor(row: any) {
    return row.id % 2 === 0 ? '#B7E3FA' : '#8FD3F7';  // Alterna entre los dos colores
  }

  openConfirmDialog(): void {
    const dialogText = '¿Está seguro de actualizar los roles de usuario?';
    const path       = 'panel/roles';
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
