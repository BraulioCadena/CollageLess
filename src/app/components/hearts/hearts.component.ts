import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hearts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.scss']
})
export class HeartsComponent implements OnInit {
  hearts: { left: number, delay: number }[] = [];

  ngOnInit(): void {
    this.hearts = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 10
    }));
  }
}
