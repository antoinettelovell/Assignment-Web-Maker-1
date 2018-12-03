import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service.client';
import { Widget } from 'src/app/models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget = { _id: "", widgetType: "YOUTUBE", pageId: "", width: "", url: "" 
    };
    constructor(private activatedRoute: ActivatedRoute,
       private router: Router,
       private widgetService: WidgetService) { }
  
    ngOnInit() {
      this.activatedRoute.params.subscribe(
      (params) => {
        this.uid = params["uid"];
        this.wid = params["wid"];
        this.pid = params["pid"];
        this.wgid = params["wgid"];
        this.widgetService.findWidgetById(this.wgid).subscribe(
          (widget: Widget) => {
            this.widget = widget
        });            
      });  
    }
    update(){
      this.widgetService.updateWidget(this.widget).subscribe(
        (widget: Widget) => {
          this.router.navigate ([
            "user", this.uid, "website", this.wid, "page", this.pid,
            "widget"
        ]);   
    }); 
  }
  
    delete(){
      this.widgetService.deleteWidget(this.wgid).subscribe(
        (widget: Widget) => {
          this.router.navigate ([
            "user", this.uid, "website", this.wid, "page", this.pid,
            "widget"
        ]);
      });          
    }
  }
  