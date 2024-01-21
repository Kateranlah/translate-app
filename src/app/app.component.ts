import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { ScreenwidthServiceService } from "../shared/services/screenwidth.service.service";
import { LandingComponent } from "./landing/landing.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "translate-app";

  constructor(public screenService: ScreenwidthServiceService) {}

  ngOnInit(): void {
    this.startScreenService();
  }

  startScreenService() {
    this.screenService.screenWidth.set(window.innerWidth);
    this.screenService.getScreenWidth();
  }
}
