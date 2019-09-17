const Lalalime = require('./index.js');
const fs = require('fs');

// data
const price = ['$38.00 USD', '$48.00 USD', '$58.00 USD', '$68.00 USD', '$78.00 USD', '$88.00 USD', '$98.00 USD', '$108.00 USD', '$118.00 USD', '$128.00 USD', '$138.00 USD'];
const name = ['F.O.M.O', 'Fast and Free', 'Rule the Day', 'Align', 'Spring Break Away', 'On the Fly', 'Everyday', 'All the Right Places', 'Sun Setter', 'Ebb to the Street', 'Define', 'All Yours', 'Energy', 'Free to be Serene'];

// function randomizer for title
const createTitle = (name) => {
  name.sort(() => Math.random() - 0.5);
  return name.slice(0, 4);
};

// function randomizer for price
const createPrice = () => {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(price[Math.floor(Math.random() * Math.floor(price.length))]);
  }
  return arr;
};

// functions for creating the product
const createDresses = (name, id) => {
  let product = {};
  product.id = id;
  product.property = 'top';
  product.type = 'Dresses';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Cinch+It+Dress/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Cinch+It+Dress/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Cinch+It+Dress/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/Black/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Refresh+Maxi+Dress+II/Heathered+Black/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/dresses/Here+To+There+Dress/night-black/2.jpg"
      ]
    ],
  ];
  return product;
};

// tank
const createTanks = (name, id) => {
  let product = {};
  product.id = id;
  product.property = 'top';
  product.type = 'Tanks';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Run+Off-Route+Tank/Black/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Ebb+To+Street+Tank+II/Black/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/tanktops/Sculpt+Tank+II/Black/2.jpg"
      ]
    ],
  ];
  return product;
};

// sweater
const createSweaters = (name, id) => {
  let product = {};
  product.id = id;
  product.property = 'top';
  product.type = 'Sweaters';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Angel+Wing/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Angel+Wing/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Sit+In+Lotus+Wrap+II/Angel+Wing/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/Heathered+Night+Diver/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/Heathered+Night+Diver/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba/Heathered+Night+Diver/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/sweaters/Scuba+Hoodie/Arctic+Plum/2.jpg"
      ]
    ],
  ];
  return product;
};

// skirt
const createSkirts = (name, id) => {
  let product = {};
  product.id = id;
  product.property = 'bottom';
  product.type = 'Skirts';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Cherry+Cola/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Cherry+Cola/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Cherry+Cola/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/2.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/White/3.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Merlot/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Merlot/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/On+the+Fly+Skirt/Merlot/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/2.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/skirts/Pace+Rival+Skirt+(Tall)/Black/3.jpg"
      ]
    ],
  ];
  return product;
};

// shorts
const createShorts = (name, id) => {
  let product = {};
  product.id = id;
  product.property = 'bottom';
  product.type = 'Shorts';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/In+Movement+Short+2.5/Black/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Amber+Aura/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Amber+Aura/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Hotty+Hot+Short+II+2.5/Amber+Aura/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Aquatic+Green/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Aquatic+Green/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/Speed+Up+Short+Long+4+updated+fit/Aquatic+Green/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Frosted+Mulberry/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Frosted+Mulberry/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/shorts/TrackerShortV4/Frosted+Mulberry/2.jpg"
      ]
    ],
  ];
  return product;
};

// pants
const createPants = (name, id) => {
  let product = {};
  product.id = id;
  product.property = 'bottom';
  product.type = 'Pants';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Aquatic+Green/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Aquatic+Green/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Align+Pant+II+25/Aquatic+Green/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Free-pants/Black/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Everglades/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Everglades/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/In+Movement+Tight+25+Everlux/Everglades/2.jpg"
      ]
    ],
    [
      [
        "color1",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Black/1.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Black/3.jpg",
        "https://lalalime-similar.s3-us-west-1.amazonaws.com/pants/Wunder+Under+High-Rise+Tight+25+Full-On+Luxtreme/Black/2.jpg"
      ]
    ]
  ];
  return product;
};

//create counter variable that adds id from 1 to 10 million into each data object
let counter = 0;
//create 7000 shorts, 7000 pants, and 7000 skirts at a time
const bottomProducts = () => {
  let botProductsArr = [];
  for (let i = 0; i < 1; i++) {
    botProductsArr.push(createShorts(name, counter));
    counter++;
    botProductsArr.push(createPants(name, counter));
    counter++;
    botProductsArr.push(createSkirts(name, counter));
    counter++;
  }
  return botProductsArr;
}
//create 7000 dresses, 7000 tanks, 7000 sweaters
const topProducts = () => {
  let topProductsArr = [];
  for (let i = 0; i < 1; i++) {
    topProductsArr.push(createDresses(name, counter));
    counter++;
    topProductsArr.push(createTanks(name, counter));
    counter++;
    topProductsArr.push(createSweaters(name, counter));
    counter++;
  }
  return topProductsArr;
}

const combineProducts = () => {
  let bottData = bottomProducts();
  let topData = topProducts()
  return [...bottData, ...topData];
}

// //creates json file
// let writeStream = fs.createWriteStream('test2.json')
// //238
// //last i === 237 && j === array.length -1
// for (var i = 0; i < 2; i++){
//   var data;
//   let array = combineProducts();
//   for (var j = 0; j < array.length; j++){
//     if (array[j]){
//       if (i === 1 && j === array.length - 1){
//         data = JSON.stringify(array[j]) +']';
//       } else if (i === 0 && j === 0){
//         data = '[' + JSON.stringify(array[j]) + ',\n';
//       } else {
//         data = JSON.stringify(array[j]) + ',\n';
//       }
//     }
//     writeStream.write(data, 'utf8')
//     data='';
//   }
// }
// writeStream.on('finish', () => {
//   console.log('wrote all data to file');
// });
// writeStream.end();

//create csv file
let writeStream = fs.createWriteStream('test2.csv');
let counterPostGres = 0;

let subStringValuesFunction = (array) => {
  let substring = '';
  let values = Object.values(array);
  for (var k = 0; k < values.length; k++){
  //loop through each values and check if type is an object, if object it will stringify
    if (typeof(values[k]) === 'object'){
      substring += JSON.stringify(values[k]) + ',';
    } else if (k === values.length - 1 ){
      substring += values[k];
    } else {
      substring += values[k] + ',';
    }         
  }
  return substring;
}

for (var i = 0; i < 2; i++) {
  var data;
  let array = combineProducts();
  let keys;
  //grab all keys from the very first object
  //make into string and make into data
  for (var j = 0; j < array.length; j++) {
    if (array[j]) {
      if (counterPostGres === 0){
        keys = Object.keys(array[0])
        data = keys.join(',') + '\n' + subStringValuesFunction(array[0]) + '\n';
        counterPostGres++;
      } else if (i === 1 && j === array.length - 1) {
        data = subStringValuesFunction(array[j])
      } else {
        data = subStringValuesFunction(array[j]) + '\n';
      }
    }
    writeStream.write(data, 'utf8')
    data = '';
  }
}
writeStream.on('finish', () => {
  console.log('wrote all data to file');
});
writeStream.end();

// var json = json3.items
// var fields = Object.keys(json[0])
// var replacer = function(key, value) { return value === null ? '' : value } 
// var csv = json.map(function(row){
//   return fields.map(function(fieldName){
//     return JSON.stringify(row[fieldName], replacer)
//   }).join(',')
// })
// csv.unshift(fields.join(',')) // add header column

// console.log(csv.join('\r\n'))

