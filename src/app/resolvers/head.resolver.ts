import {ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import {of} from "rxjs";
export const titleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
    return of("GymBro.ca");
}