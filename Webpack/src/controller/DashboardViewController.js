import { elements }from '../views/base';
import Search from '../models/search';
import {searchview} from '../views/Factview';
import { ProfileCard, SemesterTable, HobbiesTable,UserProfile } from '../views/searchview';

export  function DashboardViewController() {
    const search = new Search();
    let data =search.SearchAllDataByName(elements.Input.value);
    ProfileCard(data);
    SemesterTable(data);
    HobbiesTable(data);
    UserProfile(data);
    elements.DashboardSearch.reset();
  
}

