import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AppAuthorize implements CanActivate {

    /// init and set the routes allowed for the user
    allowableRoutes: any[] = ["home", "contact"];
    routerObj: Router;

    // constructor
    constructor(router: Router) {
        this.routerObj = router;
    }

    // implemented member
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.IsAuthorized(route);
    }

    // handles authorization code
    IsAuthorized(route: ActivatedRouteSnapshot): boolean {

        // init flag as false
        let isValid: boolean = false;
        console.log(route.data["name"].toLowerCase())

        // check logic ==> could be any...
        isValid = !this.isNullOrUndefined(this.allowableRoutes.find(rte =>
            rte.toLowerCase() === route.data["name"].toLowerCase()));

        // check its valid or not
        if (!isValid) {
            console.log("User is not authorized to navigate");
            this.routerObj.navigateByUrl("accessdenied");
            return isValid;
        }

        // return the flag
        return isValid;
    }

    // to check null or defined...
    isNullOrUndefined(obj: any) {
        return typeof obj === "undefined" || obj === null;
    }
}