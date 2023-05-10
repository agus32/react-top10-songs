import React from "react";
import "./WeekSelector.css";
import { GetWeekData } from "../ApiHandler";

const weeks = [{
    cod: 1,
    date_start: "20210101",
    date_end: "20210107",
},
{
    cod: 2,
    date_start: "20210108",
    date_end: "20210114",
},
{
    cod: 3,
    date_start: "20210115",
    date_end: "20210121",
},
{
    cod: 4,
    date_start: "20210122",
    date_end: "20210128",
},
];

const dateFormatter = (date) => {
    const year = date.substring(0,4);
    const month = date.substring(4,6);
    const day = date.substring(6,8);
    return `${day}/${month}/${year}`;
}


export const WeekSelector = () =>{


    const handleChange = async (event) => {
        console.log(event.target.value);
        const response = await GetWeekData(event.target.value);
    }

    return(
        <div className="selector">
            <div>
                <h2 className="week-word">Week</h2>
            </div>
            <div>
                <select name="weekSelector" id="weekSelector" onChange={handleChange}>
                    {weeks.map((week) => (
                        <option value={week.cod}>{dateFormatter(week.date_start)} - {dateFormatter(week.date_end)}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}