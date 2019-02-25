import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from '../const';

@Component({
  template: `
    Header
    <button (click)="run()">Run</button>
  `
})
export class HeaderComponent {
  constructor(private http: HttpClient) {}

  run() {
    this.http.get(paths.header).subscribe();
  }
}
