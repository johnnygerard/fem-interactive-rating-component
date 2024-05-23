import { ChangeDetectionStrategy, Component, model } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SvgStarIconComponent } from "./svg/svg-star-icon/svg-star-icon.component";
import { SvgOnlinePaymentIconComponent } from "./svg/svg-online-payment-icon/svg-online-payment-icon.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule, SvgStarIconComponent, SvgOnlinePaymentIconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isSubmitted = false;
  userRating = model<null | number>(null);
}
