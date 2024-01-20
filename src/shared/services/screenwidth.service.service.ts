import { Injectable, OnInit, signal } from "@angular/core";
import { fromEvent } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ScreenwidthServiceService{
  screenWidth = signal(0);

  getScreenWidth() {
    fromEvent(window, "resize").subscribe(() =>
      this.screenWidth.set(window.innerWidth)
    );
  }
}
