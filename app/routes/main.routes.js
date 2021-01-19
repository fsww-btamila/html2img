module.exports = app => {
  const postRouter = require("../controllers/MainPost.controller.js");
  // const getRouter = require("../controllers/MainGet.controller.js");
  
  let routeBasePath = "/attachment/v1";
  
  // Create a Post Request
  app.post(routeBasePath+"/HtmlToImage", postRouter.HtmlToImage); 
  
 
  // app.post(routeBasePath+"/HtmlToPdf", postRouter.HtmlToPdf);
  
};