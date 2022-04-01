import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamsfilter'
})
export class FilterTeamPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    
    const resultSearcher = []; 
    if  (value){ 
        for (let item of value) {
          if (item.name.toLowerCase().indexOf(arg) > -1) {
            resultSearcher.push(item);
          }
          
          //console.log("pipe busqueda"+ resultSearcher);
        }       
          
        return resultSearcher;
      }
      }
    }
    