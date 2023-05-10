import React from "react";
import "./WeekSelector.css";

export const WeekSelector = () =>{

    return(
        <div className="selector">
            <div>
                <h2 className="week-word">Week</h2>
            </div>
            <div>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
    );
}