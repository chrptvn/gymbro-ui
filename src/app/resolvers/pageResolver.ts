import {ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {HttpService} from "../services/http.service";

export const homePageResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
    return inject(HttpService).getHomePage(route.params['lang'])
}

export const aboutPageResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
    return inject(HttpService).getAboutPage(route.params['lang'])
}

export const privacyPolicyPageResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
    return inject(HttpService).getPrivacyPolicyPage(route.params['lang'])
}