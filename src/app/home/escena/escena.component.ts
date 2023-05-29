import { Component, Input} from '@angular/core';
import { Text } from '../interfaces/text.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
 @Input()
 public stories: Text[] = []

 
  public currentSentence = 0;

  previous(): void {
    if (this.currentSentence > 0 ) {
     this.currentSentence-- 
    }
       }
    
    
    next(): void{
      if(this.currentSentence < 3){
        this.currentSentence++;
      }
    }
   
    constructor(){
     
    }
  }

