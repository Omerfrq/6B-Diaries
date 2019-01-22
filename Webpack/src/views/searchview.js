import {elements} from './base'; 
import ApexCharts from 'apexcharts';





export const ProfileCard = (data) =>{
    let Profiledata = "";
    let imgcover = data.imgcover;
    let dp = data.imgurl;
    let isVerified = data.isVerified;

if(isVerified == true){
    data.isVerified = "&#10004;";
}
else {
    data.isVerified="";
}

    if(imgcover==""){
        data.imgcover = "assets/images/background/profile-bg.jpg";
    }

    if(dp==""){
        if(data.gender == "Male")
        data.imgurl="assets/images/users/male.png";
        else{
            data.imgurl="assets/images/users/female.jpg";
        }
    }

    Profiledata = ` <img class="card-img-top" src="${data.imgcover}" alt="Card image cap">
    <div class="card-block little-profile text-center">
        <div class="pro-img">
        <img src="${data.imgurl}" alt="user" />
        </div>
        <h3 class="font-weight-light">@${data.Name} 
        <span class="verified">
        <sup>${data.isVerified}</sup>
        </span>
        </h3>
        <p class="text-info font-weight-bold">${data.University}</p>
        <div class="row text-center">
            <div class="col-lg-4 col-md-4">
                <h6 class="font-light">Degree</h6>
                <small class="text-primary font-weight-bold">${data.Degree}</small>
                </div>
            <div class="col-lg-4 col-md-4 ">
                <h6 class="font-light">Year</h6>
                <small class="text-primary font-weight-bold">${data.Year}</small>
                </div>
            <div class="col-lg-4 col-md-4">
                <h6 class="font-light">Enrollment</h6>
                <small class="text-primary font-weight-bold">${data.Enrollment}</small>
                </div>
        </div>
    </div>`;
    elements.CardView.innerHTML = Profiledata;
}


export const SemesterTable = (data) => {
    let project=data.Project;
    let  table="";

    for(let i=0;i<project.length;i++){
        table+=`<tr>
    <th scope="row" class="font-weight-normal text-info">${i+1}</th>   
    <td>${project[i]}</td>
  </tr>
 `;
    }
 elements.SemesterProjects.innerHTML = table;
}



export const HobbiesTable = (data) => {
    let hobbies = data.Hobbies;
    let Hobbiestable = "";
    for(let i=0;i<hobbies.length;i++){
        Hobbiestable+=`<tr>
    <th scope="row" class="font-weight-normal text-info">${i+1}</th>   
    <td>${hobbies[i]}</td>
  </tr>
 `;
    }
    elements.HobbiesTable.innerHTML = Hobbiestable;
}




export const UserProfile =(data)=> {

    let userprofile = "";
    userprofile = ` <div class="row">
    <div class="col-md-3 col-xs-6 p-3">
    <strong class="text-primary">Full Name</strong>
        <br>
        <p class="font-weight-light">${data.Name}</p>
    </div>
    <div class="col-md-3 col-xs-6 p-3">
    <strong class="text-primary">Mobile</strong>
        <br>
        <p class="font-weight-light">${data.Phoneno}</p>
    </div>
    <div class="col-md-4 col-xs-6 p-3"> <strong class="text-primary">Email</strong>
        <br>
        <p class="font-weight-light"><a href="mailto:${data.Email}">${data.Email}</a></p>
    </div>
</div>
<hr>
<h4 class="text-primary text-right">Skillset</h4>
<hr>
<div class="Skill-set">
${skills(data)}
</div>
</div>
`;
elements.ProfileInfo.innerHTML = userprofile;

}



const skills = (data) => {
let skills = data.Skills;
let skillset="";
for (let i = 0; i < skills.length; i++) {

 skillset+=`
 <h6 class="font-weight-light">${skills[i]}</h6>
 <div class="progress">
<div class="progress-bar" role="progressbar"></div>
</div>
 `;
}
return skillset;
}









function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




export const renderGenderStatsView = (male,female) =>{

        let stats ="";
        stats += `<ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
         Male
          <span class="badge badge-primary badge-pill">${male}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
         Female
          <span class="badge badge-primary badge-pill">${female}</span>
        </li>
      </ul>`;
      elements.Piechart.innerHTML = stats;
}



export const renderPieChart = (Male,Female) =>{

    var options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Male', 'Female'],
        series: [Male,Female],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    var chart = new ApexCharts(
        elements.Piechart,
        options
    );

    chart.render();

    }



export const renderLineChart = (data) => {
    var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
    var options = {
        chart: {
            height: 300,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
                }
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false,
        },
        series: [{
            name: 'Total',
            data: [21, 22,23]
        }],
        xaxis: {
            categories:["21 Years","22 Years","23 Years"],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '14px'
                }
            }
        }
    }

    var chart = new ApexCharts(
        elements.PieAgeView,
        options
    );

    chart.render();

}
