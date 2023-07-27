import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared/services/user.service';


@Injectable({
    providedIn: 'root'
})
export class AdminGuard{
    constructor(private router: Router,private userService:UserService) { }

    public arr:number[]=[];
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {    
        if (JSON.parse(localStorage.getItem('user')||'{}').user_role=='admin') {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }

}
