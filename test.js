const render = require("./dist/index.js");
const string = "Hello, world! :wave: Test link [link](https://example.com#:123) :thumbsup:";

const result = render(string);
console.log(JSON.stringify(result, null, 2));
