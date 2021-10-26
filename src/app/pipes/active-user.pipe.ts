import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeCheckUser'
})
export class ActiveUserPipe implements PipeTransform {

  transform(value: unknown): string {

    if(value === true ||  value === true){
      return 'Activo'
    }else{
      return 'Inactivo'

    }

  }

}
