import {ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import {of} from "rxjs";
export const categoryTypeResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
    return of(route.params['categoryType'] as string);
}