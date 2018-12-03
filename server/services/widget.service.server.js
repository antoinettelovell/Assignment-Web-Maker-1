module.exports = function(app) {
    //create widget
    app.post("/api/widget/", createWidget); 
    //find all widgets for widget   
    app.get("/api/page/:pid/widget/", findAllWidgetsForPage);
    //find widget by id
    app.get("/api/widget/:wgid/", findWidgetById);
    //update widget
    app.put("/api/widget/", updateWidget);	
    //delete widget
    app.delete("/api/widget/:wgid/", deleteWidget);

    widgets = [

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
    }     
];

        function createWidget(req, res) {
        let widget = req.body;
        widget._id = Math.random().toString();
        widgets.push(widget);
        res.json(widget);
}
        function findAllWidgetsForPage(req, res) {
            let result =[]; //return all the widgets in array
            const pid = req.params["pid"];
            for(let i = 0; i <widgets.length; i++) {
              if(widgets[i].pageId === pid) {
                result.push(widgets[i]);
            }
        }
           res.json(result);
    }
    function selectWidgetById(wgid) {//one widget//select widgets by id for help
        for(let i = 0; i < widgets.length; i++){
          if(widgets[i]._id === wgid) {//if the widgets id is = to (first line)pid
            return widgets[i];//return widgets with an id
            }
        }
    } 
    
    function findWidgetById(req, res) {//request and response(call the function)
        const wgid= req.params["wgid"];//request our pid from our paramenter
        const widget = selectWidgetById(wgid); //get the widget from the function selectwidgetById and gives a pid as a parameter
        res.json(widget);//send back to the client
    }
    function updateWidget(req, res) {
        const widget= req.body; //new widget info from request the body
        const oldWidget = selectWidgetById(widget._id);// get the old widget by calling the function selectwidgetsById and then pass the widgets id of it
        const index = widgets.indexOf(oldWidget);//after i find old widget, look into the index of where our old widgets are at in our widgets array 0,1 etc
        this.widgets[index] = widget;//change the old widget, remove the old widget and use the new one to replace it 
        res.json(widget);//return the new one out 
    }   
    
    function deleteWidget(req, res) {
        const widgetId = req.params["wgid"];//
        const widget = selectWidgetById(widgetId);
        const index = widgets.indexOf(widget);
        widgets.splice(index, 1);//so we can remove it
        res.json(widgets);//return the new result     
    }
};

   