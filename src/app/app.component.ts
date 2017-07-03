import { ScheduleService } from './services/schedule.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'sch-app',
  templateUrl: 'app.component.html', 
})
export class AppComponent {
  authError: boolean;
  search: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private scheduleService: ScheduleService) { }

  @HostListener('window:beforeunload') beforeUnloadHander() {
    // return confirm("noo");
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
      this.scheduleService.config=(JSON.parse(fileReader.result));
      this.scheduleService.trigger.next();
    };
  }

  downloadConfig(): void {
    var blob = new Blob([JSON.stringify(this.scheduleService.config, null, 1)], { "type": "text/plain;charset=utf-8" });
    if (window.navigator.msSaveOrOpenBlob)  // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
      window.navigator.msSaveBlob(blob, "config.json");
    else {
      var a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = "config.json";
      document.body.appendChild(a);
      a.click();  // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
      document.body.removeChild(a);
    }
  }
}

