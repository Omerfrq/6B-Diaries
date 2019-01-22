import Search from '../models/search';
import {elements}from '../views/base';
import {renderPieChart,renderGenderStatsView,renderLineChart} from '../views/searchview';
import {FactViewcontroller} from '../controller/FactViewController';
import {Starviewcontroller} from '../controller/StarViewController';
import {Skillviewcontroller} from '../controller/SkillViewController';
import {DashboardViewController} from '../controller/DashboardViewController';

let search = new Search();



if(elements.DashboardSearch !=null){
    elements.DashboardSearch.addEventListener("submit",(e)=>{
        e.preventDefault();
        DashboardViewController();
    })
}




if(elements.Searchform != null){
elements.Searchform.addEventListener("submit",(e)=> {
    e.preventDefault();
    FactViewcontroller();
});
}

if(elements.SearchformSkill != null){
elements.SearchformSkill.addEventListener("submit",function(e){
    e.preventDefault();
    Skillviewcontroller();
});
}

if(elements.SearchformStar != null){
elements.SearchformStar.addEventListener("submit",function(e){
    e.preventDefault();
    Starviewcontroller();
});
}

function GenderStats(){
    let femalecount = search.SearchByFeMale();
    let malecount = search.SearchByMale();
    renderGenderStatsView(malecount,femalecount);
}



//gender stats pie chart

window.addEventListener('load', function() {
    GenderStats();
})

elements.PieView.addEventListener("click",function(){
    elements.Piechart.innerHTML = "";
    GenderStats();
});
elements.ListView.addEventListener("click",function(){
    elements.Piechart.innerHTML = "";
    Piechart();
});

function Piechart()
{
    let femalecount = search.SearchByFeMale();
    let malecount = search.SearchByMale();
    renderPieChart(malecount,femalecount);
} 




