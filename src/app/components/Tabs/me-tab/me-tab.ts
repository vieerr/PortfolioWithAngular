import { Component } from '@angular/core';
import { AccordionItem } from '../../accordion-item/accordion-item';

@Component({
  selector: 'app-me-tab',
  imports: [AccordionItem],
  templateUrl: './me-tab.html',
  styleUrl: './me-tab.css',
})
export class MeTab {}
