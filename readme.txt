// This example creates a jar file from the package in directory 'mypackage'.

// The jar file is created using:
jar cfm myjar.jar Manifest.txt mypackage/*.class

// The package is run using:
java -jar myjar.jar

// The output is:
'Hello there.'
