import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'mapIterator'})
export class MapIteratorPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}