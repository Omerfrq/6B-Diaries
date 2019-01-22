import {elements} from './base';


export const FactsView = (data,star ) => {
    let output = "";
    output=`
<span>1 Learn</span> “3 facts about ${data.Name}?”
<span>2</span>
<span>3</span>  {
<span>4</span>   "${data.Name}": {
<span>5</span>      "FullName": "${data.Name}",  
<span>6</span>      "Degree": "${data.Degree}", 
<span>7</span>      "Hobbies": "${data.Hobbies[0]},${data.Hobbies[1]},${data.Hobbies[2]}"
<span>8</span>    }
<span>9</span>   "Dob": {
<span>10</span>      "Date": "${data.dob.date}",
<span>11</span>      "Age": "${data.dob.age}" 
<span>12</span>    }
<span>13</span>    "Skills": {
<span>14</span>      "Languages": "${data.Skills[0]},${data.Skills[1]}",
<span>15</span>      "SemesterProject": "${data.Project[0]}"  
<span>16</span>    }
<span>17</span>  }  
    `;
    elements.FactsView.innerHTML = output;
}