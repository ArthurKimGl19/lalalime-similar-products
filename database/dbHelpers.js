const pool  = require('./index.js');

let getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}
let subStringValuesFunction = (array) => {
  let substring = '';
  let stringified = '';
  let values = Object.values(array);
  for (var k = 0; k < values.length; k++){
  //loop through each values and check if type is an object, if object it will stringify
    if (typeof(values[k]) === 'object' && k !== values.length - 1){
      stringified = JSON.stringify(values[k])
      substring += '{' + stringified.substring(1, stringified.length- 1).replace(/\[/g, '{').replace(/]/g, '}') + '}|';
    } else if (k === values.length - 1){
      stringified = JSON.stringify(values[k])
      // stringified.replace(/\[/g, '{').replace(/]/g, '}')
      substring += stringified.replace(/\[/g, '{').replace(/]/g, '}');
    } else {
      substring += values[k] + ',';
    }         
  }
  substring = '{' + substring.replace(/\|/g, ',') + '}'
  return substring;
}
let singleArrayFormatter = (array) => {
  let newArray = JSON.stringify(array);
  return '{' + newArray.slice(1, newArray.length-1) + '}';
}

// raw postgresql
const dbHelpers = {
  getProducts: (id) => {
    let random = getRandomArbitrary(1, 1434)
    if (id >= 1 && id <= 1434){
      let floor = Math.floor(id * 6999);
      return pool.query(`select * from lalalimes where id between ${floor} and ${floor+6999} limit 10`);
    }
  },
  getOneProduct: (id) => {
    return pool.query(`select * from lalalimes where id=${id}`)
  },
  // format to insert arrays into postgres (12000000, 'top', 'jacket', '{"Energy"}', '{"$100"}', '{{{"Hello"}}}')
  postOneProduct: (id, property, type, title, price, img) => {    
    return pool.query(`insert into lalalimes(id, property, type, title, price, img) values values (${id}, ${property}, ${type}, ${singleArrayFormatter(title)}, ${singleArrayFormatter(price)}, ${subStringValuesFunction(img)})`)
  },
  updateOneProduct: (id, property, type, title, price, img) => {
    return pool.query(`update lalalimes set property=${property}, type=${type}, title=${singleArrayFormatter(title)}, price=${singleArrayFormatter(price)}, img=${subStringValuesFunction(img)} where id=${id}`)
  },
  deleteOneProduct: (id) => {
    return pool.query(`delete from lalalimes where id=${id}`)
}
}

module.exports = dbHelpers;
