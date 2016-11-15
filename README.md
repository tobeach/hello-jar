Creates a jar file from the package in directory 'mypackage'.
==========================================================================


<br>// From the mypackage directory: Create the (package) executable class file using:<br>
	javac hello.java


<br>// From the root (hello-jar) directory: Create the jar file using:<br>
	jar cfm myjar.jar Manifest.txt mypackage/*.class


<br>// From the root (hello-jar) directory: Run the package using:<br>
	java -jar myjar.jar

<br>// The output is:<br>
	'Hello there.'
