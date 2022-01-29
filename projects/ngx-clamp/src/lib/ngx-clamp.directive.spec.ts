import { ElementRef } from '@angular/core';
import { NgxClampDirective } from './ngx-clamp.directive';

describe('NgxClampDirective', () => {
  it('should create an instance', () => {
    const ele = document.createElement('p');
    const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, odio. Dolore odit illo ab quam. Numquam adipisci sapiente eius. Explicabo, quam cumque enim a nesciunt corporis ipsam quis reiciendis iusto?';
    ele.innerText = lorem + ' ' + lorem + ' ' + lorem;
    const ref = new ElementRef(ele);
    const directive = new NgxClampDirective(ref);
    expect(directive).toBeTruthy();
  });
});
