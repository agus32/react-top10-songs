import React from 'react';
import { TopOne } from './components/TopOne';
import { TopTable } from './components/TopTable';
import { TopTableTest } from './components/TopTableTest';

const test = "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/3f/28/ad/3f28ad3c-3dc9-7c5b-32f0-5b33eb647bf7/mzi.bnuysrxb.jpg/400x400cc.jpg";
const week = [{artist:"Merv Wetheril",song_name:"Ultraman",song_url:"https://yolasite.com",song_photo:"https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/4c/5f/08/4c5f08d0-d745-85a3-49e4-607112632378/cover.jpg/316x316cc.webp",weeks_at_top_1:33,weeks_on_chart:131,last_week:6},
{"artist":"Egon O'Dennehy",song_name:"Winter Break",song_url:"http://cmu.edu",song_photo:test,weeks_at_top_1:31,weeks_on_chart:5,last_week:9},
{"artist":"Aristotle Edmundson",song_name:"Mandabi (The Money Order)",song_url:"http://sitemeter.com",song_photo:test,weeks_at_top_1:33,weeks_on_chart:178,last_week:1},
{"artist":"Shandy Dionisetto",song_name:"Aeon Flux",song_url:"https://ezinearticles.com",song_photo:test,weeks_at_top_1:25,weeks_on_chart:71,last_week:3},
{"artist":"Bartram Pellatt",song_name:"Pool, The (Swimming Pool) ",song_url:"http://cam.ac.uk",song_photo:test,weeks_at_top_1:12,weeks_on_chart:69,last_week:8},
{"artist":"Vivianne Jaggar",song_name:"Dante's Inferno",song_url:"http://slideshare.net",song_photo:test,weeks_at_top_1:28,weeks_on_chart:26,last_week:2},
{"artist":"Selby Gawler",song_name:"Escape Me Never",song_url:"https://tinypic.com",song_photo:test,weeks_at_top_1:20,weeks_on_chart:28,last_week:4},
{"artist":"Happy Assel",song_name:"Stories of Lost Souls",song_url:"http://mysql.com",song_photo:test,weeks_at_top_1:3,weeks_on_chart:40,last_week:0},
{"artist":"Craggie Eagger",song_name:"Burnt Money (Plata Quemada)",song_url:"http://ask.com",song_photo:test,weeks_at_top_1:6,weeks_on_chart:153,last_week:9},
{"artist":"Joan Nuzzetti",song_name:"I Love, You Love",song_url:"https://un.org",song_photo:test,weeks_at_top_1:1,weeks_on_chart:58,last_week:2}];



function App() {
  
  return (
    <div className="App">
      <TopOne topone={week[0]}/>
      <TopTableTest top={week}/>
    </div>
  );
}

export default App;
