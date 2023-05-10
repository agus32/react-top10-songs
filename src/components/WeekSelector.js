import React from "react";
import "./WeekSelector.css";
import { GetWeekData } from "../ApiHandler";



const dateFormatter = (date) => {
    const year = date.substring(0,4);
    const month = date.substring(4,6);
    const day = date.substring(6,8);
    return `${day}/${month}/${year}`;
}


export const WeekSelector = ({weeksInfo,setWeek}) =>{


    const handleChange = async (event) => {
        console.log(event.target.value);
        const response = await GetWeekData(event.target.value);
        setWeek(response);
    }

    return(
        <div className="selector">
            <div>
                <h2 className="week-word">Week</h2>
            </div>
            <div>
                <select name="weekSelector" id="weekSelector" onChange={handleChange}>
                    {weeksInfo.map((week) => (
                        <option value={week.cod}>{dateFormatter(week.date_start)} - {dateFormatter(week.date_end)}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}