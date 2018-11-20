import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';
import { Widget } from 'src/app/models/widget.model.client';

@Component({
  selector: 'app-widgit-list',
  templateUrl: './widgit-list.component.html',
  styleUrls: ['./widgit-list.component.css']
})
export class WidgitListComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  widgets: Widget[];
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.uid = params["uid"];
        this.wid = params["wid"];
        this.pid = params["pid"];
        this.widgets = this.widgetService.findWidgetsByPageId(this.pid)

      });;
    }

    parseYoutubeSrc(src) {
      // transfer video url into embeded video url
      let embedUrl: string= "https://www.youtube.com/embed/";
      const splitUrl: string[]= src.split("/");
      embedUrl += splitUrl[splitUrl.length - 1];

      // telling browser this src is safe
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
}
