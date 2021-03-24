var baseUrl = "http://localhost:9090";
var customerService = baseUrl+"/"+"customer";
var customerServiceId = customerService+"/"+2000;
console.log(baseUrl);
console.log(customerService);
console.log(customerServiceId);

// template strings
var id = 20050
var ename = "Rahul";
var employeeServiceId = `${baseUrl}/employee/${id}`;
console.log(employeeServiceId);

document.write("<table border = '1'><tr><th>Id</th><th>Name</th></tr>");
document.write("<tr><td>"+id+"</td><td>"+ename+"</td></tr></table>");

var content = `<table border = '1'>
   <tr><th>Id</th><th>Name</th></tr>
   <tr><td>${id}</td><td>${ename}</td></tr>
</table>`;
document.write(content);




