import {ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {Element} from "../models/element";
import {first, map} from "rxjs";
import {HttpService} from "../services/http.service";
import {Category} from "../models/category";
import {formatWordForUrl} from "../utils/url-formater.utils";

export const supplementResolver: ResolveFn<Element> = (route: ActivatedRouteSnapshot) => {
    return inject(HttpService).getSupplements().pipe(
        map(supplements => supplements.filter(supplement =>
            formatCategoryName(supplement.category) === route.params['category'] &&
            formatSupplementName(supplement) === route.params['supplement'])
        ),
        map(matches => matches[0]),
        first()
    );
}

export const supplementsResolver: ResolveFn<Element[]> = (route: ActivatedRouteSnapshot) => {
    if (!route.params['category']) {
        return inject(HttpService).getSupplements();
    } else {
        return inject(HttpService).getSupplements().pipe(
            map(supplements => supplements.filter(supplement => formatCategoryName(supplement.category) === route.params['category']))
        );
    }
}

function formatCategoryName(category: Category) {
    return formatWordForUrl(category.name)
}

function formatSupplementName(supplement: Element) {
    return formatWordForUrl(supplement.name)
}