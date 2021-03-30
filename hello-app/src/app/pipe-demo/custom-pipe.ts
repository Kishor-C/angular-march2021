import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'findLength'
})
export class LengthFinder implements PipeTransform {
    // {{name | findLegth}}
    transform(value : string) {
        return value.length;
    }
}

