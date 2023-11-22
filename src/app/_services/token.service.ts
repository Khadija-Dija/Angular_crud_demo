import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'c:/Users/HP/Desktop/Angular/standar/ng-demo-app222/node_modules/jwt-decode/build/cjs/index';

import { ITokenUser } from '../_interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['admin']);
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  clearToken(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  clearTokenExpired(): void {
    localStorage.removeItem('token');
    this.router.navigate(['auth']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getPayload() {
    let user: ITokenUser = {
      id: 0,
      nom: '',
      prenom: '',
      pseudo: '',
      email: '',
    };

    let token = localStorage.getItem('token');
    if (token != null) {
      const decode = jwtDecode(token) as ITokenUser;
      user.id = decode.id;
      user.nom = decode.nom;
      user.prenom = decode.prenom;
      user.pseudo = decode.pseudo;
      user.email = decode.email;
    }

    return user;
  }
}
