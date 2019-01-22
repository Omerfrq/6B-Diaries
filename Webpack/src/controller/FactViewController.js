import { elements }from '../views/base';
import Search from '../models/search';
import {FactsView} from '../views/Factview';

export  function FactViewcontroller() {
    const search = new Search();
    let data =search.SearchAllDataByName(elements.Input.value);
    let star = search.SearchByStar(elements.Input.value);
    FactsView(data,star);
    elements.Searchform.reset();
  
}

