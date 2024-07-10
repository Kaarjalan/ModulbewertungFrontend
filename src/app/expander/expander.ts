import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[autoExpand]',
  standalone: true,
})
export class AutoExpandDirective {
  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}