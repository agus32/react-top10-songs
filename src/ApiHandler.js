
const API_PORT = 3000;
const API_URL = "http://localhost.com";


export const GetWeeks = async () => {

    const URL = `${API_URL}:${API_PORT}/weeks`;
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}  

export const GetCurrentWeek = async () => {
    const URL = `${API_URL}:${API_PORT}/chart`;
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}


export const GetWeekData = async (cod_week) => {

    
    const URL = `${API_URL}:${API_PORT}/chart?cod_week=${cod_week}`;
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}