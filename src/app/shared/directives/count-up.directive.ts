import { Directive, ElementRef, Input, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit {
  @Input('appCountUp') targetValue = 0;
  @Input() duration = 2000;
  private startValue = 0;
  private startTime: number | null = null;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(this.animate.bind(this));
    } else {
      // Pour le SSR, afficher directement la valeur finale
      this.el.nativeElement.textContent = this.targetValue;
    }
  }

  private animate(timestamp: number) {
    if (!this.startTime) this.startTime = timestamp;
    const progress = timestamp - this.startTime;
    const percentage = Math.min(progress / this.duration, 1);
    
    const currentValue = Math.floor(this.startValue + (this.targetValue - this.startValue) * percentage);
    this.el.nativeElement.textContent = currentValue;

    if (percentage < 1) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }
} 