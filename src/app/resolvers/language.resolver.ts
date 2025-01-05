import {ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import {of} from "rxjs";
export const languageResolver: ResolveFn<String> = (route: ActivatedRouteSnapshot) => {
    return of(route.params['lang'] as string);
}