import { data } from "../models/data";

export default class Search {
  constructor() {
    this.classdata = data;
  }

  SearchAllEnrollment(){
  for (let i = 0; i < this.classdata.length; i++) {
      console.log(this.classdata[i].Enrollment);
  }
}

  SearchByMale(){
    let malecount=0;
    for (let i = 0; i < this.classdata.length; i++) {
      if (this.classdata[i].gender == "Male") {
        malecount = malecount + 1;
      } 
    }
    return malecount;
  }

  SearchByFeMale(){
    let Femalecount=0;
    for (let i = 0; i < this.classdata.length; i++) {
      if (this.classdata[i].gender == "Female") {
        Femalecount = Femalecount + 1;
      } 
    }
    return Femalecount;
  }

  SearchAllProjects()
{
  for (let i = 0; i < this.classdata.length; i++) {
      let termprojects = this.classdata[i].Project;
      for(let j=0;j<termprojects.length;j++)
      {
        console.log(termprojects[j]);
        return termprojects[i];
      }
  }
}

  SearchAllDataByName(name) {
    for (let i = 0; i < this.classdata.length; i++) {
      if (this.classdata[i].Name.toLocaleLowerCase().match(name.toLocaleLowerCase())) {
        return this.classdata[i];
      }
    }
  }

  SearchByStar(name){
    let userdata = this.SearchAllDataByName(name);
    let data = userdata.dob.date;
    let dob = data.split("-");
    let date = dob[0];
    let month = dob[1];
    let star =this.getZodiacSign(date,month);
      return star;
}

 getZodiacSign(day, month) {

  var zodiacSigns = {
    'capricorn':'Capricorn',
    'aquarius':'Aquarius',
    'pisces':'Pisces',
    'aries':'Aries',
    'taurus':'Тaurus',
    'gemini':'Gemini',
    'cancer':'Cancer',
    'leo':'Leo',
    'virgo':'Virgo',
    'libra':'Libra',
    'scorpio':'Scorpio',
    'sagittarius':'Sagittarius'
  }

  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    return zodiacSigns.capricorn;
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return zodiacSigns.aquarius;
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return zodiacSigns.pisces;
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns.aries;
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns.taurus;
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return zodiacSigns.gemini;
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return zodiacSigns.cancer;
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return zodiacSigns.leo;
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns.virgo;
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return zodiacSigns.libra;
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return zodiacSigns.scorpio;
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return zodiacSigns.sagittarius;
  }
}
}
