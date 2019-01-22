import { elements }from '../views/base';
import Search from '../models/search';
import {SkillsView} from '../views/Skillview';


export  function Skillviewcontroller() {
    const search = new Search();
    let data =search.SearchAllDataByName(elements.Input.value);
    SkillsView(data);
    elements.SearchformSkill.reset();
}

