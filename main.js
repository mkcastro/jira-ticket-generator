const model = "Chamaileon Access Token";
let text = `
------
store
------
Create Store ${model} Test
Create Store ${model} Route
Create Store ${model} Controller
Create Store ${model} Request
Authorize Store ${model} via Store ${model} Request
Validate Store ${model} via Store ${model} Request
Create ${model} Policy
Create ${model} Create Policy
Update ${model} Create Permission via Role in Team
Create Store ${model} Action
Create ${model} Model
Create ${model} Table Migration
------
create
------
Create ${model} E2E Test
Create ${model} Page
Create ${model} Form
Display ${model} Validation Errors
------
index
------
Create Index ${model} Test
Create Index ${model} Route
Create Index ${model} Controller
Create Index ${model} Request
Authorize Index ${model} via Index ${model} Request
Create Index ${model} Policy
Create ${model} View Any Policy
Update ${model} Read Permission via Role in Team
Create Index ${model} Action
Create ${model} Index Resource Pagination
Create ${model} Collection Resource
Create xxx ${model} Scope
Implement xxx ${model} Scope on ${model} Collection Resource

Create ${model} Index Page
Create ${model} Index Layout
Create ${model} Index Datatable
Create ${model} Index Pagination
Create ${model} Index Filter
Create ${model} Index Search

------
show
------
Create Show ${model} Test
Create Show ${model} Route
Create Show ${model} Controller
Create Show ${model} Request
Authorize Show ${model} via Show ${model} Request
Create Show ${model} Policy
Create ${model} View Any Policy
Update ${model} Read Permission via Role in Team
Create Show ${model} Action

- show

 - frontend
   - page (includes route, layout)
 - backend
   - policy (to view the model since data comes from backend API)

- edit

 - frontend
   - page (includes route, layout)
   - edit form (can be a modal or an entire page)
   - display validation errors
 - backend
   - policy (to view the edit page)

- update

 - backend
   - route
   - policy (to update the model)
   - backend validation (through form requests)

- destroy
 - frontend
   - page
   - delete form
 - backend
   - policy (to delete the model)
`;
// replace double spaces in text variable into single space
text = text.replace(/\s\s+/g, " ");

console.log(text);
