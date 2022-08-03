const model = "Investing Entity";
const verb = "Store";
const isApi = false;
let text = `
------
store
------
Create ${verb} ${model} Test
Create ${verb} ${model} ${isApi ? "API" : ""} Route
Create ${verb} ${model} Controller
Create ${verb} ${model} Request
Authorize ${verb} ${model} via ${verb} ${model} Request
Validate ${verb} ${model} via ${verb} ${model} Request
Create ${model} Policy
Create ${model} Create Policy
Update ${model} Roles Structure
Create ${verb} ${model} Action
Create ${model} Model
Create ${model} Table Migration
------
create
------
Create ${verb} ${model} Page
`;
// replace double spaces in text variable into single space
text = text.replace(/\s\s+/g, " ");

console.log(text);
