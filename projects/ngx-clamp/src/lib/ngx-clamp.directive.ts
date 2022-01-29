import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { clamp } from 'clamp.ts';

interface IClampOptions {
  clamp?: number | string | 'auto';
  useNativeClamp?: boolean;
  splitOnChars?: Array<string>;
  animate?: boolean;
  truncationChar?: string;
  truncationHTML?: string;
}

@Directive({
  selector: '[ngx-clamp]'
})
export class NgxClampDirective implements OnInit {

  @Input() ngxClampOptions: IClampOptions = {};
  @Output() ngxClampResponse = new EventEmitter<{
    original: string;
    clamped: string;
  }>();

  constructor(private contentElementRef: ElementRef) { }

  ngOnInit(): void {
    const ngxClampResponse = clamp(
      this.contentElementRef.nativeElement,
      this.ngxClampOptions
    );
    this.ngxClampResponse.emit(ngxClampResponse);
  }

}
