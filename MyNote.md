
### Front End Setup
    ### Install following packages
    npx create-react-app feature-toggle

    ### Adding Bootstrap To The React Project
    npm install bootstrap

    ### Setting Up React Router
    npm install react-router-dom

### Front End Style
    ### Bootstrap Toggle
    bower install bootstrap-toggle

    ### Start Front End
    npm start

### Back End Setup
    ### create a package.json file
     npm init -y

    ### add dependencies
    npm install express body-parser cors mongoose
        express: Express is a fast and lightweight web framework for Node.js. Express is an essential part of the MERN stack.
        
        body-parser: Node.js body parsing middleware.
        
        cors: CORS is a node.js package for providing an Express middleware that can be used to enable CORS with various options. Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
        
        mongoose: A Node.js framework which lets us access MongoDB in an object-oriented way.

    ### Nodemon is a utility that will monitor for any changes in your source and automatically restart your server
    npm install -g nodemon

    ### Start the server by using nodemon:
    sudo npm install -g nodemon
    nodemon server

    ### Install brew on MacOS
    https://brew.sh

    ### Installing MondoDB
    brew uninstall mongodb // if you install mongodb before

    brew tap mongodb/brew
    brew install mongodb-community

### Wire front-end and back-end
In order to be able to send HTTP request to our back-end we’re making use of the Axios library
npm install axios


git init
git commit -m "first commit"
git remote add origin https://github.com/vdkhiem/feature-toggle.git
git push -u origin master
