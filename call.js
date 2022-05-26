
const servicePrototype = {
    body: 'Write the details of the project over here.'
}
function Service() {
 return output.innerHTML=this.body;
   
}
Service.prototype = servicePrototype;
Service.prototype.constructor = Service;
let service1 = new Service();
service1();

