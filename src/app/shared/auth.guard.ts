import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared/services/user.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard{
    constructor(private router: Router,private userService:UserService) { }

    public arr:number[]=[];

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {    
        if (this.userService.isUserLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }

}
