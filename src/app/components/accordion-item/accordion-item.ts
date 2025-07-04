import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  imports: [CommonModule],
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.css'
})
export class AccordionItem {
  @Input() title: string = '';
  isOpen = false;
}
