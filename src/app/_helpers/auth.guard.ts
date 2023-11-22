import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //
    // return false;

    //rediriger vers une route (route de login)
    //si logged = true; => laisse passer //sinon =>auth
    if (this.tokenService.isLogged()) {
      console.log('logged');
      // return this.router.navigate(['dashboard']);
      return true;
    }
    //rediriger vers une route (route de login)

    return this.router.navigate(['auth']);
  }
}
