import { Component } from '@angular/core';
import { IClampOptions, IClampResponse } from 'ngx-clamp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: IClampOptions = { clamp: 3 };
  response: IClampResponse = { clamped: '', original: '' };
}
