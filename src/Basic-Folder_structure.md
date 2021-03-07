Basic Folder Structure Explained
When you created the project, you would have noticed that it created a bunch of files. Here I will list out some of the important files and folders that you should be aware of .

package.json: This File has the list of node dependencies which are needed.
public/index.html: When the application starts this is the first page that is loaded. This will be the only html file in the entire application since React is generally Written using JSX which I will cover later. Also, this file has a line of code <div id=”root”></div>. This line is very significant since all the application components are loaded into this div.
src/index.js: This is the javascript file corresponding to index.html. This file has the following line of code which is very significant. ReactDOM.render(<App />, document.getElementById(‘root’));
The above line of code is telling that App Component ( will cover App Component soon) has to be loaded into an html element with id root. This is nothing but the div element present in index.html.
src/index.css: The CSS file corresponding to index.js.
src/App.js : This is the file for App Component. App Component is the main component in React which acts as a container for all other components.
src/App.css : This is the CSS file corresponding to App Component
build: This is the folder where the built files are stored. React Apps can be developed using either JSX, or normal JavaScript itself, but using JSX definitely makes things easier to code for the developer :). But browsers do not understand JSX. So JSX needs to be converted into javascript before deploying. These converted files are stored in the build folder after bundling and minification. In order to see the build folder Run the following command
npm run build 