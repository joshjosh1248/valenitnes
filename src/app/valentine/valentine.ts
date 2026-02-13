import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentine.html',
  styleUrls: ['./valentine.css']
})
export class ValentineComponent {

  @ViewChild('buttonArea') buttonArea!: ElementRef;

  noButtonTop = 50;
  noButtonLeft = 200;
  accepted = false;

  constructor(private router: Router) {}

  sayYes() {
    this.router.navigate(['/accepted']);
  }

  moveNoButton() {
    const area = this.buttonArea.nativeElement;

    const maxX = area.offsetWidth - 100;
    const maxY = area.offsetHeight - 50;

    this.noButtonLeft = Math.random() * maxX;
    this.noButtonTop = Math.random() * maxY;
  }
}
