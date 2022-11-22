   ## Introduction:

   this is the first project Image Processig Api .
   
   
   I  use to build this project:-    
   
      1. TypeScript to compile to JavaScript
      2. Jasmine is used for unit testing
      3. Eslint and prettier to get better code


   ## How to install node_modules packages:

     npm  install 


    ## URL Example:
    
     http://localhost:3000/api/images?imagename=icelandwaterfall&height=200&width=200
     
   ## How to resize :
    
    1. make sure that the requested image is inside images folder.
    2. in url add for imagename(the image you want to resize),width(the new image width),height(the new 
    image height) 
    3. if image is not found, you will get a message to tell you  that image name isn't available.
    4. if image height is not added or less than 1 ,you will get a message to tell you please put a correct 
    height value .
    5. if image width is not added or less than 1 ,you will get a message to tell you please put a correct 
    width value.
    6. if image is successfully resized ,you will get a message inside console to tell you the `imagename`
    is saved 
    for this example ``icelandwaterfall-200-200.jpg`` is saved.
    7. if the requested image has been already resized, you will get a message inside console to tell you 
    `imagename` is cached for this example `icelandwaterfall-200-200.jpg` is cashed.

   
   

   ## Scripts:
   
    1. build: npm run build
    2. start: npm run start
    3. test:  npm run test
    4. prettier:  npm run prettier
    5. lint: npm run lint
	
	 
	 
   ## Images Available:
	 
	1. encenadaport
	2. fjord
	3. icelandwaterfall
	4. patmtunnel
	5. santamonica
	 
