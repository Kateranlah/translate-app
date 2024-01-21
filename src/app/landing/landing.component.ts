import { Component } from '@angular/core';
import { ScreenwidthServiceService } from '../../shared/services/screenwidth.service.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {


  constructor(public screenService: ScreenwidthServiceService) {}
}
