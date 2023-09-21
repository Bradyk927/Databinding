import { 
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
   Input,
   OnChanges,
   DoCheck,
    OnInit,
    SimpleChanges,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild
   } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges,
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit,
AfterViewChecked,
OnDestroy {
 @Input('srvElement') element: {type: string, name: string, content: string};
 @Input() name: string;
 @ViewChild('heading', { static: true }) header: ElementRef;
 @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("constructor called")
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit Called")
    console.log('Text Content: ' + this.header.nativeElement.textContent)
    console.log('Text Content of paragraph: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called")
  }
  
  ngAfterContentInit(){
    console.log("ngAfterContentInit called")
    console.log('Text Content of paragraph: ' + this.header.nativeElement.textContent);

  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit called")
    console.log('Text Content: ' + this.header.nativeElement.textContent)

  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called")
  }
  ngOnDestroy(): void {
    
  }

}
