// Language : javascript
// Path : src\index.js
'use strict';

import app from "./app";

//Server start up and running on port
const main = () => {
    app.listen(app.get("port"));
    console.log(`Server running on port ${app.get("port")}`);
};

main();