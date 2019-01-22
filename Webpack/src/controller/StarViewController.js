import { elements }from '../views/base';
import Search from '../models/search';
import {StarView} from '../views/Starview';

// function gethoroscope(mystar)
// {
//    let proxy="https://cors-anywhere.herokuapp.com/";
//    let horo="http://horoscope-api.herokuapp.com/horoscope/today/";
//    let  horourl = proxy+horo+mystar;
//     fetch(horourl)
//     .then(res=>res.json())
//     .then((data)=> {return data})
//     .catch((error)=>error);
// };

export  function Starviewcontroller() {
    const search = new Search();
    let star = search.SearchByStar(elements.Input.value);
    let data =search.SearchAllDataByName(elements.Input.value);
    StarView(data,star);
    elements.Searchform.reset();
  
}

