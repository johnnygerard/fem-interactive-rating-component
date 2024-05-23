import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-svg-star-icon",
  standalone: true,
  imports: [],
  template: `
    <svg viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#262E38" />
      <path
        d="M20.8891 13.6916L22.5473 17.0511C22.641 17.2409 22.822 17.3724 23.0315 17.4028L26.7388 17.9416C26.9811 17.9768 27.1824 18.1465 27.258 18.3794C27.3336 18.6122 27.2704 18.8678 27.095 19.0386L24.4119 21.6535C24.2602 21.8014 24.1914 22.0142 24.2268 22.2225L24.8601 25.9151C24.9014 26.1563 24.8022 26.4001 24.6042 26.5439C24.4062 26.6877 24.1437 26.7067 23.9271 26.5928L20.6107 24.8491C20.4233 24.7507 20.1995 24.7507 20.0121 24.8491L16.6957 26.5928C16.4791 26.7067 16.2166 26.6877 16.0186 26.5439C15.8206 26.4001 15.7214 26.1563 15.7627 25.9151L16.396 22.2225C16.4318 22.0139 16.3626 21.8011 16.2109 21.6535L13.5278 19.0386C13.3524 18.8678 13.2892 18.6122 13.3648 18.3794C13.4404 18.1465 13.6417 17.9768 13.884 17.9416L17.5913 17.4028C17.8008 17.3724 17.9818 17.2409 18.0755 17.0511L19.7337 13.6916C19.9716 13.2139 20.6531 13.2139 20.8891 13.6916Z"
        fill="#FC7614"
      />
    </svg>
  `,
  styleUrl: "./svg-star-icon.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgStarIconComponent {}