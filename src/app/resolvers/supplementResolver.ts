import {ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {Element} from "../models/element";
import {first, map} from "rxjs";
import {ElementService} from "../services/element.service";
import {Category} from "../models/category";

export const supplementResolver: ResolveFn<Element> = (route: ActivatedRouteSnapshot) => {
    return inject(ElementService).getSupplements().pipe(
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
        return inject(ElementService).getSupplements();
    } else {
        return inject(ElementService).getSupplements().pipe(
            map(supplements => supplements.filter(supplement => formatCategoryName(supplement.category) === route.params['category']))
        );
    }
}

function formatCategoryName(category: Category) {
    return category.name.toLowerCase().replace(/ /g, '-')
}

function formatSupplementName(supplement: Element) {
    return supplement.name.toLowerCase().replace(/ /g, '-')
}