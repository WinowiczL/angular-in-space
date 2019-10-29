import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SpaceShipService} from './space-ship.service';

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard implements CanActivate {

  constructor(private spaceShipService: SpaceShipService, private router: Router) {

  }
  shipsNumber;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length > 0;
    if (hasSpaceShips) { return true; }

    alert('Nie ma statków w hangarze!');
    return this.router.parseUrl('/');
  }

}
