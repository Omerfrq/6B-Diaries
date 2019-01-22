import {elements} from './base';

export const SkillsView = (data) => {
    let output = "";
    output=`
<span>1 Learn</span> “${data.Name}'s Skills!”
<span>2</span>
<span>3</span>  {
<span>4</span>   "Skills": {     
<span>5</span>        ${data.Skills.slice(0,5).map(skill=>`${capitalizeFirstLetter(skill)}`)}
<span>6</span>      } 
<span>7</span> }
    `;
    elements.SkillView.innerHTML = output;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }