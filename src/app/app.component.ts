import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SvgStarIconComponent } from "./svg/svg-star-icon/svg-star-icon.component";
import { SvgOnlinePaymentIconComponent } from "./svg/svg-online-payment-icon/svg-online-payment-icon.component";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule, SvgStarIconComponent, SvgOnlinePaymentIconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms ease-in", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  isSubmitted = false;
  userRating = model<null | number>(null);
}
