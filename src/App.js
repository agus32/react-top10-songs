import React from 'react';
import { TopOne } from './components/TopOne';
import { TopTable } from './components/TopTable';
import { WeekSelector } from './components/WeekSelector';
import { GetCurrentWeek,GetWeeks } from './ApiHandler';


function App() {
  const[week,setWeek] = React.useState([]);
  const[weeksInfo,setWeeksInfo] = React.useState([]);

  const fetchData = async () => {
    const data = await GetCurrentWeek();
    const weeks = await GetWeeks();
    setWeeksInfo(weeks);
    setWeek(data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div className="App">
      <TopOne topone={week[0]}/>
      <WeekSelector weeksInfo={weeksInfo} setWeek={setWeek}/>
      <TopTable top={week}/>
    </div>
  );
}

export default App;
