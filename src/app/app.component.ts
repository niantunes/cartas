import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-4">
      <h1 class="mb-4">Escolha uma Carta</h1>
      
      <div class="mb-4">
        <h2 class="h5 mb-2">Escolha um naipe</h2>
        <div class="btn-group" role="group">
          <button
            *ngFor="let suit of suits"
            (click)="selectSuit(suit)"
            [class.active]="selectedSuit === suit"
            class="btn btn-outline-primary"
          >
            {{ suitSymbol[suit] }}
          </button>
        </div>
      </div>

      <div class="mb-4">
        <h2 class="h5 mb-2">Escolha um número</h2>
        <div class="btn-group flex-wrap" role="group">
          <button
            *ngFor="let value of values"
            (click)="selectValue(value)"
            [class.active]="selectedValue === value"
            class="btn btn-outline-primary"
          >
            {{ value }}
          </button>
        </div>
      </div>

      <div *ngIf="selectedSuit && selectedValue" class="mt-4">
        <app-card
          [suit]="selectedSuit"
          [value]="selectedValue"
        ></app-card>
      </div>
    </div>
  `
})

export class AppComponent {
  suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  suitSymbol: { [key: string]: string } = {
    'hearts': '♥',
    'diamonds': '♦',
    'clubs': '♣',
    'spades': '♠'
  };

  selectedSuit: string | null = null;
  selectedValue: string | null = null;

  selectSuit(suit: string) {
    this.selectedSuit = suit;
  }

  selectValue(value: string) {
    this.selectedValue = value;
  }
}