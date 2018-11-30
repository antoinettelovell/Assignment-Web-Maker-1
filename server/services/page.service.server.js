module.exports = function(app) {
    //create page //post
    app.post("/api/page/", createPage);
    //get all pages for page
    app.get("/api/website/:wid/page/", findAllPagesForWebsite);
    //get page by id
    app.get("/api/page/:pid/", findPageById);
    //put //update current page
    app.put("/api/page/", updatePage); 
    //delete page
    app.delete("/api/page/:pid/", deletePage)

    pages = [
        { _id: "321", name: "Post 1", websiteId: "456",
       title: "Lorem" },
       
         { _id: "432", name: "Post 2", websiteId: "456", 
        title: "Lorem" },
       
         { _id: "543", name: "Post 3", websiteId: "456",
        title: "Lorem" }
    ];

    function createPage(req, res) {
        let page = req.body;
        page._id = Math.random().toString();
        pages.push(page);
        res.json(page);
    }

    function findAllPagesForWebsite(req,res) {
        let result =[]; //return all the pages in array
        const wid = req.params["wid"];
        for(let i = 0; i < pages.length; i++) {
          if(pages[i].websiteId === wid) {
            result.push(pages[i]);
            }
        }
       res.json(result);
    }

    function selectPageById(pid) {//one page//select pages by id for help
        for(let i = 0; i < pages.length; i++){
          if(pages[i]._id === pid) {//if the pages id is = to (first line)pid
            return pages[i];//return pages with an id
            }
        }
    } 

    function findPageById(req, res) {//request and response(call the function)
        const pid= req.params["pid"];//request our pid from our paramenter
        const page = selectPageById(pid); //get the page from the function selectPageById and gives a pid as a parameter
        res.json(page);//send back to the client
    }

    function updatePage(req, res) {
        const page = req.body; //new page info from request the body
        const oldPage = selectPageById(page._id);// get the old page by calling the function selectPagesById and then pass the pages id of it
        const index = pages.indexOf(oldPage);//after i find old page, look into the index of where our old pages are at in our pages array 0,1 etc
        this.pages[index] = page;//change the old page, remove the old page and use the new one to replace it 
        res.json(page);//return the new ones out as our response
    }
    
    function deletePage(req, res) {
        const pageId = req.params["pid"];//
        const page = selectPageById(pageId);
        const index = pages.indexOf(page);
        pages.splice(index, 1);//so we can remove it
        res.json(pages);//return the new result     
    }
};