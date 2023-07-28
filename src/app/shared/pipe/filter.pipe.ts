import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'convertToFilter'
})

export class convertToFilterPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        value=value.split('_')
        const camelCasedWords = value.map((word:string, index:number) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        const camelCaseString = camelCasedWords.join(' ');
        return camelCaseString;
    }
}