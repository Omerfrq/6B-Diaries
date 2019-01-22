import {elements} from './base';
//TODO change Background 



export const StarView = (data,star) =>{
    let starview="";
    starview = `
    <span>1 Learn</span> “${data.Name}'s Zodiac Sign!”
    <span>2</span>
    <span>3</span>  {
    <span>4</span>   "User": {
    <span>5</span>      "Name": "${data.Name}",
    <span>6</span>      "Age": "${data.dob.age}",
    <span>7</span>      "Star":"${star}"
    <span>8</span>    } 
    <span>9</span> }
    `;
    elements.StarView.innerHTML = starview;

    let directory = "./assets/img";
    let img = ["/pisces.png","/virgo.png","/aries.png","/sagittarius.png","/taurus.png","/scorpio.png","/aquarius.jpg",
    "/leo.png","/gemini.png","/cancer.png","/capricorn.png","/libra.png"];


    if(`${star}` == "Pisces"){
    elements.HeroStar.style.backgroundImage = `url(${directory+img[0]})`;
    }
    else if(`${star}` == "Virgo"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[1]})`;
    }
    else if(`${star}` == "Aries"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[2]})`;
    }
     else if(`${star}` == "Sagittarius"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[3]})`;
    }
    else if(`${star}` == "Тaurus"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[4]})`;
    }
    else if(`${star}` == "Scorpio"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[5]})`;
    }
    else if(`${star}` == "Aquarius"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[6]})`;
    }
    else if(`${star}` == "Leo"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[7]})`;
    }
    else if(`${star}` == "Gemini"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[8]})`;
    }
    else if(`${star}` == "Cancer"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[9]})`;
    }
    else if(`${star}` == "Capricorn"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[10]})`;
    }
    else if(`${star}` == "Libra"){
        elements.HeroStar.style.backgroundImage = `url(${directory+img[11]})`;
    }
}