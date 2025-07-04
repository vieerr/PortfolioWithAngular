import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionItem } from './components/accordion-item/accordion-item';
import { MeTab } from './components/Tabs/me-tab/me-tab';
import { ProjectsTab } from "./components/Tabs/projects-tab/projects-tab";
import { SkillsTab } from './components/Tabs/skills-tab/skills-tab';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MeTab, ProjectsTab, SkillsTab],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentTab = signal('projects');
}
