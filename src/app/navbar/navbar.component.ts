import { Component } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { ScreenwidthServiceService } from "../../shared/services/screenwidth.service.service";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss", 
})
export class NavbarComponent {
  navIsOpen = false;
  screenWidth = this.screenService.screenWidth()
  navIsClose = true;
  slideIn = false;
  symbol = "burger-menu";

  constructor(public screenService: ScreenwidthServiceService) {}

  ngOnInit() {
  }

  openNav() {
    if (this.navIsOpen) {
      this.slideIn = false;
      this.navIsClose = true;
      this.symbol = "burger-menu";
      this.navIsOpen = false;
      /*   this.appComponent.deactivateScroll() */
    } else {
      this.slideIn = true;
      this.navIsOpen = true;
      this.navIsClose = false;
      /* this.appComponent.activateScroll() */
      this.symbol = "x";
    }
  }

  closeImpressum() {
    /*  this.appComponent.closeImpressum() */
  
  }
}
