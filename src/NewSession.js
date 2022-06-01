import { useState } from "react";
import Sidebar from "./Sidebar";

const NewSession = () => {
  const [date, setDate] = useState("DD/MM/YYYY");
  let saveable = [];
  let split = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const builderArea = document.getElementById("builder-area");
    let sessionTitle;
    let themePresent;
    let datePresent;

    for (let i of builderArea.children) {
      for (let ii of i.children) {
        console.log(ii.outerHTML.value);
      }
    }

    for (let i of builderArea.children) {
      i = i.children;
      for (let ii of i) {
        if (!ii.innerText == "" || !ii.innerText == undefined) {
          if (ii.innerText != "+") {
            saveable.push(ii.innerText);
          }
        }
        if (!ii.value == "" || !ii.value == undefined) {
          saveable.push(ii.value);
          themePresent = true;
        }
        if (ii.classList.contains("theme")) {
          const date_regex =
            /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
          if (!date_regex.test(date)) {
            datePresent = false;
          } else {
            datePresent = true;
          }
          sessionTitle = ii.value;
        } else {
          continue;
        }
      }
    }

    if (themePresent && datePresent) {
      const data = {
        session: sessionTitle || null,
        body: split,
        date: date,
      };
      for (let i of saveable) {
        let word = i.split("\n");
        split.push(word[0]);
      }
      console.log(`HERE IS THE BODY: ${split}`);
      fetch("http://localhost:8500/elements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert(`Session saved as:\n- ${sessionTitle}/\n- ${date}`);
      saveable = [];
      split = [];
    } else {
      alert("You need a date and a theme!");
    }

    //console.log(split);
  };

  const handleClear = () => {
    const builderArea = document.getElementById("builder-area");
    for (let del of builderArea) {
      del.render = false;
    }
  };

  const handleDate = (e) => {
    {
      setDate(e.target.value);
    }
  };
  const handleDateFocus = () => {
    const dateBox = document.getElementById("date-box");
    if (dateBox.value == "DD/MM/YYYY") {
      dateBox.value = "";
    }
  };
  const handleDateBlur = () => {
    const dateBox = document.getElementById("date-box");
    if (dateBox.value == "" || dateBox.value == " ") {
      dateBox.value = "DD/MM/YYYY";
    }
  };

  return (
    <div>
      <Sidebar />
      <form className="builder">
        <h1 className="no-select">New Session</h1>
        <div className="search-container">
          <label>Session Date:</label>
          <input
            id="date-box"
            type="text"
            value={date}
            onChange={handleDate}
            onFocus={handleDateFocus}
            onBlur={handleDateBlur}
          />
          <button type="submit" className="main-button" onClick={handleSubmit}>
            Save Session
          </button>
          <button type="submit" className="main-button" onClick={handleClear}>
            Clear
          </button>
          <button type="submit" className="main-button">
            Print
          </button>
        </div>
        <div className="builder-area dropzone" id="builder-area"></div>
      </form>
    </div>
  );
};

export default NewSession;
