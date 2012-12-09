var	staruml = new ActiveXObject("StarUML.StarUMLApplication");
var filesystem = new ActiveXObject("Scripting.FileSystemObject");
var shell = new ActiveXObject("Shell.Application") ;

var notepad = 'C:\\Program Files\\Notepad++\\Notepad++.exe' ;
// var starUMLHome = "C:\\Program\\ Files\\StarUML" ;
// var scriptPath = starUMLHome+"\\"+"modules\\StarUMLExec\\src" ;
var scriptPath = "src" ;
var scriptName = "Script.js" ;
var scriptFullName = ""+scriptPath+"\\"+scriptName+""
staruml.log("Editing "+scriptFullName) ;
shell.ShellExecute(notepad, "-n30 "+'"'+scriptFullName+'"' ) ;
function GetScriptEngineInfo(){
   var s;
   s = ""; // Build string with necessary info.
   s += ScriptEngine() + " Version ";
   s += ScriptEngineMajorVersion() + ".";
   s += ScriptEngineMinorVersion() + ".";
   s += ScriptEngineBuildVersion();
   return(s);
}

staruml.log(GetScriptEngineInfo()) ;