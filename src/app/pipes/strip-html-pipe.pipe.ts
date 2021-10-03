import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipePipe implements PipeTransform {

  transform(value: string): any {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = value;
    return tmp.textContent || tmp.innerText || '';
  }

}
