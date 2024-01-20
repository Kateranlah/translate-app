import { Component } from "@angular/core";
import { ScreenwidthServiceService } from "../../shared/services/screenwidth.service.service";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  public navIsOpen = false;
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
