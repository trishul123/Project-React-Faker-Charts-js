import { faker } from '@faker-js/faker';

function createusersdata(){
    let users = []
    for (let id=1; id <= 100000; id++) {
      let fullName = faker.name.fullName();
      let address = faker.address.streetAddress()+" "+
                    faker.address.cityName();
      let country= faker.address.country();
      let zipcode= faker.address.zipCodeByState();
      let age = faker.datatype.number({min: 20, max: 65});
      let phonenumber = faker.phone.number();
      let ocuupation = faker.name.jobTitle();
      let carmodel = faker.vehicle.model();
      let carmaker = faker.vehicle.manufacturer();
      let carage = faker.datatype.number({min: 1, max: 20});
  
      users.push({
          id: id,
          username: fullName,
          address: address,
          country: country,
          zipcode: zipcode,
          age:age,
          phonenumber:phonenumber,
          ocuupation:ocuupation,
          carmodel: carmodel,
          carmaker: carmaker,
          carage: carage
      });  
    }
    console.log("created 1lakh users object",users);
    return(users);
  }
  export default createusersdata;