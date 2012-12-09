Set objShell = WScript.CreateObject("WScript.Shell")
Set objExecObject = objShell.Exec("myCmd Arg0 Arg1 Arg2")

Do Until objExecObject.StdOut.AtEndOfStream
 strLine = objExecObject.StdOut.ReadLine()
 Wscript.Echo "out: " & strLine
Loop

Do Until objExecObject.StdErr.AtEndOfStream
 strLine = objExecObject.StdErr.ReadLine()
 Wscript.Echo "err: " & strLine
Loop


Dim app, factory, selected
Set app= CreateObject("StarUML.StarUMLApplication")
Set factory = app.UMLFactory
If app.SelectionManager.GetSelectedModelCount = 1 Then
  MsgBox "You have selected one element"
  app.Log "Message in the 'Output' console of StarUML"
End If