import { Router, ActivatedRoute } from '@angular/router';
import { Component, HostListener } from '@angular/core';
import {DomSanitizer,SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'ld-app',
  templateUrl: '../templates/app.component.html',
})
export class AppComponent {
  authError: boolean;
  search: string;

 configDownload:SafeUrl;

  constructor(private route: ActivatedRoute,
    private router: Router, private sanitizer:DomSanitizer) { }

  @HostListener('window:beforeunload') beforeUnloadHander() {
    // return confirm("noo");
  }

  doSearch(): void {
    this.router.navigate(["/landing"], { queryParams: { 'search': this.search } });
  }
  fileChanged($event): void {
    //get file
    //need to cast html tag
    //reference： http://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
    var file = (<HTMLInputElement>document.getElementById("file")).files[0];

    //new fileReader
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    //try to read file, this part does not work at all, need a solution
    fileReader.onloadend = (e) => {      
      console.log(fileReader.result);
      this.configDownload = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob([fileReader.result],{"type":"text/plain;charset=utf-8"})));
    };
  }
}
