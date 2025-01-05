import {ActivatedRouteSnapshot, ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {Supplement} from "../models/supplement";
import {first, map} from "rxjs";
import {SupplementService} from "../services/supplement.service";
import {Category} from "../models/category";

export const supplementResolver: ResolveFn<Supplement> = (route: ActivatedRouteSnapshot) => {
    return inject(SupplementService).getSupplements().pipe(
        map(supplements => supplements.filter(supplement =>
            formatCategoryName(supplement.category) === route.params['category'] &&
            formatSupplementName(supplement) === route.params['supplement'])
        ),
        map(matches => matches[0]),
        first()
    );
}

export const supplementsResolver: ResolveFn<Supplement[]> = (route: ActivatedRouteSnapshot) => {
    if (!route.params['category']) {
        return inject(SupplementService).getSupplements();
    } else {
        return inject(SupplementService).getSupplements().pipe(
            map(supplements => supplements.filter(supplement => formatCategoryName(supplement.category) === route.params['category']))
        );
    }
}

function formatCategoryName(category: Category) {
    return category.name.toLowerCase().replace(/ /g, '-')
}

function formatSupplementName(supplement: Supplement) {
    return supplement.name.toLowerCase().replace(/ /g, '-')
}