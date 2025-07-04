import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionItem } from './components/accordion-item/accordion-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AccordionItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  currentTab = signal('projects');

}
