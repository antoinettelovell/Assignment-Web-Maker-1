import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';

// injecting service into module
@Injectable()
export class WidgetService {
    widgets: Widget[] = [

    { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "HAIR BRAIDING"
},
      
    { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "BRAIDING STYLES"

},
    { _id: "345", widgetType: "IMAGE", pageId: "321", width: "70%", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NZrgaE_LytuA0XH3JUpL6s4b0gGX400-4Dcb4AMVvT-67mta"
},      

   { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "BRAIDING TUTORIAL"
},
      
    { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "70%", url: 
    "https://youtu.be/FFQvKBWxvgA" 
},      
  ];
    createWidget(widget: Widget) {
        widget._id = Math.random().toString();
        this.widgets.push(widget);
        return widget;
    }

    findWidgetsByPageId(pageId: string) {
    let result = [];
    for(let i = 0; i < this.widgets.length; i++){
        if(pageId === this.widgets[i].pageId) {
            result.push(this.widgets[i]);
        }
    }return result;

}
    findWidgetById(widgetId: string) {
    for(let i = 0; i< this.widgets.length; i++){
        if(widgetId === this.widgets[i]._id){
            return this.widgets[i];
        }
    }        
}

    updateWidget(widget: Widget) {
        const oldWidget = this.findWidgetById(widget._id);
        const index = this.widgets.indexOf(oldWidget);
        this.widgets[index] = widget;
}

    deleteWidget(widgetId: string){   
        const oldWidget = this.findWidgetById(widgetId);
        const index = this.widgets.indexOf(oldWidget);
        this.widgets.splice(index, 1);
    }
}
 
