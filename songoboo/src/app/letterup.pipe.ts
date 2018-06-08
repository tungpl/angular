import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    
            name: 'letterup'
    })
export class LetterupPile implements PipeTransform {

    transform(value: string, args?: any) {

        if(!value)
            return null;
        value = value.toLowerCase();
        let words: string[] = value.split(" ");
        let prepositions = ['of','the'];

       for (let i = 0 ; i< words.length; i ++){

            if(i > 0 && prepositions.includes(words[i])) {
                words[i] = words[i].toLowerCase();
            }
           else {
                words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1,words[i].length);
           }                            
        }
           
       return words.join(" ");
    }
}