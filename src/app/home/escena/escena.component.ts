import { Component, Input } from '@angular/core';
import { Text } from '../interfaces/text.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  // public phrase :string = "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial" 


  @Input()
  public Story: Text[] = [{
    sentenceOne: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    sentenceTwo: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    sentenceThree:  "L'heroi va decidir travessar la porta que el portava a casa",
    sentenceFour: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",

  }]
}
