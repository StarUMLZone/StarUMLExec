//================ DRAFT SCRIPT ======================
// Type your code at the end of this file. 
// To execute your code select "Execute draft script" from the "tool" menu 
var	staruml = new ActiveXObject("StarUML.StarUMLApplication");
var	metamodel = staruml.MetaModel;
var	project = staruml.GetProject(); // project object
var projectName = project.Title; // project name
var documentFileName = staruml.ProjectManager.ProjectDocument.FileName; //full name (with path)
var fileSystem = new ActiveXObject("Scripting.FileSystemObject");

//******************************************************
//     PUT YOUR CODE HERE
//******************************************************

staruml.log("Hello world") ;





