import { Component } from '@angular/core'
import { LatizqComponent } from "../latizq/latizq.component";
import { MedioComponent } from "../medio/medio.component";
import { LatdrchComponent } from "../latdrch/latdrch.component";
@Component({
  selector: 'app-main',
  imports: [LatizqComponent, MedioComponent, LatdrchComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
