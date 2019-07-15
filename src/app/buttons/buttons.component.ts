import { Component, AfterViewInit, HostListener } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"]
})
export class ButtonsComponent implements AfterViewInit {
  ngAfterViewInit() {}

  @HostListener("document:keydown.escape", ["$event"]) onKeydownHandler(
    evt: KeyboardEvent,
    tooltip1,
    tooltip2
  ) {
    if (tooltip1 && tooltip2) {
      tooltip1.hide();
      tooltip2.hide();
    }
  }

  onButton1(tip1, tip2) {
    if (tip1._isTooltipVisible() == false) {
      tip1.show();
    }
    tip2.hide();
  }

  onButton2(tip1, tip2) {
    tip2.show();
    tip1.hide();
  }
}
