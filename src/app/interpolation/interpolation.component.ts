import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss'
})
export class InterpolationComponent {
  HeaderTitle = "Hello This is interpolation learning page"
  Title="Hello World This data bind from component.ts file and we use that Title variable in html file interpolation"
  GetData(){
    return "This line data is return from function so we can also interpolate funtion in html page"
  }
}
