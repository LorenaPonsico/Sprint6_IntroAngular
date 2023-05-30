import { Component, Input } from '@angular/core';
import { Text } from './interfaces/text.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input()
  public stories: Text[] = [
    {
      text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      image: "../../../assets/images/1.jpg"
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      image: "../../../assets/images/2.jpg"
    },
    {
      text: "L'heroi va decidir travessar la porta que el portava a casa",
      image: "../../../assets/images/3.jpg"
    },
    {
      text: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      image: "../../../assets/images/4.jpg"
    }
  ]

  public showSection: boolean = false;

  onShowSection() {
    this.showSection = true;
  }

}



