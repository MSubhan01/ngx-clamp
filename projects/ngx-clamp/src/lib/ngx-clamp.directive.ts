import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { clamp, IClampOptions, IClampResponse } from 'clamp.ts';

@Directive({
  selector: '[ngx-clamp]'
})
export class NgxClampDirective implements OnInit {

  @Input() ngxClampOptions: IClampOptions = { clamp: 2 };
  @Output() ngxClampResponse = new EventEmitter<IClampResponse>();

  constructor(private contentElementRef: ElementRef) { }

  ngOnInit(): void {
    const ngxClampResponse = clamp(
      this.contentElementRef.nativeElement,
      this.ngxClampOptions
    );
    this.ngxClampResponse.emit(ngxClampResponse);
  }

}
