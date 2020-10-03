import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const addVolunteerTask = () => {
  //   fetch("http://localhost:5000/addVolunteerTask", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(volunteerEvent),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  const [volunteerTasks, setVolunteerTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/volunteerTasks")
      .then((res) => res.json())
      .then((data) => setVolunteerTasks(data));
  }, []);
  return (
    <div className="App">
      {volunteerTasks.map((task) => (
        <div>
          <p>{task.title}</p>
          <img src={task.pic} alt={task.title} />
        </div>
      ))}
    </div>
  );
}

export default App;
