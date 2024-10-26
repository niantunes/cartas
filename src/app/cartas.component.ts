import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" style="width: 200px; height: 300px;">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div [class.text-danger]="isRed" class="h4">{{ value }}</div>
        </div>
        <div class="d-flex justify-content-center align-items-center" style="height: 180px;">
          <div [class.text-danger]="isRed" style="font-size: 4rem;">{{ suitSymbol }}</div>
        </div>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() suit: string = '';
  @Input() value: string = '';

  get suitSymbol(): string {
    const symbols: { [key: string]: string } = {
      'hearts': '♥',
      'diamonds': '♦',
      'clubs': '♣',
      'spades': '♠'
    };
    return symbols[this.suit] || '';
  }

  get isRed(): boolean {
    return this.suit === 'hearts' || this.suit === 'diamonds';
  }
}