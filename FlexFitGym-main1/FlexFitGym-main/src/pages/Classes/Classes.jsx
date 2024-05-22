import "./Classes.css";
import { useState } from "react";
import ClassesList from "../../assets/api/ClassesList";

const Classes = () => {
  // Array For days of week
  const daysOfWeek = [
    "Agadir",
    "Tangier",
    "Fes",
    "Rabat",
    "Mohamedia",
    "Casablanca",
    "Marrakesh",
  ];

  // To know current day
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];

  const [selectedDay, setSelectedDay] = useState(currentDay);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="classes-wrapper">
      {/* Banner */}
      <section className="banner classes-banner">
        <div className="container center">
          <div className="banner-heading">
            <h1>Partners</h1>
          </div>
        </div>
      </section>

      {/* Class Section */}
      <section className="class-timings center py-5 my-5">
        <div className="container center flex-col">
          {/* Title */}
          <div className="title">
            <h4
              className="text-lg uppercase font-bold"
              style={{ color: "orangered" }}
            >
              IN PROGRAM
            </h4>
          </div>
          {/* Heading */}
          <div className="heading text-4xl uppercase font-bold mb-4 p-1">
            Gyms available
          </div>

          {/* Week Bar */}
          <div className="weekbar rounded mb-5">
            <ul className="week-list center flex-wrap">
              {/* Day List */}
              {daysOfWeek.map((day) => (
                <li
                  key={day}
                  className={`list-item mx-1 ${
                    selectedDay === day ? "active" : ""
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </li>
              ))}
            </ul>
          </div>

          {/* Time Table */}
          {selectedDay && (
            <div className="time-table center flex-wrap">
              {/* Class List */}
              {ClassesList.find(
                (item) => item.day === selectedDay
              )?.classes.map((classInfo) => (
                <div className="class-col center flex-col" key={classInfo.name}>
                  {/* Class Timings */}
                  <div className="class-timings">
                    <p className="text-white uppercase font-bold">
                      {classInfo.time}
                    </p>
                  </div>
                  {/* Class Name with link to Google Maps */}
                  <div className="class-name">
                    <a
                      href={classInfo.locationURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold uppercase text-2xl p-3"
                      style={{ color: "orangered", textDecoration: "none" }}
                    >
                      {classInfo.name}
                    </a>
                  </div>
                  {/* Class Instructor */}
                  <div className="class-instructor">
                    <p className="text-white uppercase">
                      {classInfo.instructor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};


export default Classes;
