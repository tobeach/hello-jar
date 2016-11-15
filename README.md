Creates a jar file from the package in directory 'mypackage'.
==========================================================================


// From the mypackage directory: Create the (package) executable class file using:
	javac hello.java


// From the root (hello-jar) directory: Create the jar file using:
	jar cfm myjar.jar Manifest.txt mypackage/*.class


// From the root (hello-jar) directory: Run the package using:
	java -jar myjar.jar


// The output is:
	'Hello there.'
