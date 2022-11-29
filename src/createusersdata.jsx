import { faker } from '@faker-js/faker';

function createusersdata(){
    let users = []
    for (let id=1; id <= 1000; id++) {
      let fullName = faker.name.fullName();
      let address = faker.address.streetAddress()+" "+
                    faker.address.cityName();
      let country= faker.address.country();
      let zipcode= faker.address.zipCodeByState();
      let email = faker.internet.email();
      let age = faker.datatype.number({min: 20, max: 65});
      let carmodel = faker.vehicle.model();
      let carmaker = faker.vehicle.manufacturer();
      let carage = faker.datatype.number({min: 1, max: 20});
  
      users.push({
          id: id,
          full_name: fullName,
          address: address,
          country: country,
          zipcode: zipcode,
          email: email,
          age:age,
          carmodel: carmodel,
          carmaker: carmaker,
          carage: carage
      });  
    }
    //console.log(users);
    return(users);
  }
  export default createusersdata;