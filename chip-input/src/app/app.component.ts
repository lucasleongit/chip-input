import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: string[] = [
    'JavaScript',
    'TypeScript',
    'PHP',
    'Ruby',
    'Python',
    'Java',
    'Swift',
    'C#',
    'C++',
    'C',
    'Objective C',
    'Go',
    'Rust',
    'Angular',
    'React',
    'Vue',
    'Node.js',
    'Django',
    'Qt',
  ];
  value: string[] = [];
}
