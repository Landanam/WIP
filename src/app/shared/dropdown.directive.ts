import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    // dropdownExpanded = false;
    // @HostBinding('style.class') class: string;

    // onClick(): void {
    //     this.dropdownExpanded = !this.dropdownExpanded;

    //     this.dropdownExpanded ?  this.class = 'open' : this.class = '';
    // }

    // Better Solution
    // @HostBinding('class.open') isOpen = false;
    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;        
    // }

    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    } 
    constructor(private elRef: ElementRef) {}
}