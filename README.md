# complex-reatct-app
1. Create project 
- mkdir complex-react-app

2. Create file package.json
- cd complex-react-app
- npm init -y

3. Intsall library React
- npm install --save react react-dom

4. Install webpack
- npm install --save-dev webpack webpack-cli@3 webpack-dev-server html-webpack-plugin
- plugins HtmlWebpackPlugin connect file bundle.js to file index.html.

5. Install babel: 
- npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
- @babel/preset-env : complie mJavscript Es6+ to Javscript ES5
- @babel/preset-react : compile jsx to javsscript
- babel-loader : compile Javscript