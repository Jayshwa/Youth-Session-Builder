import React, { useEffect } from "react";

const Elements = ({ elements, title }) => {
  const handleAdd = (e) => {
    console.log("TEST");
  };

  useEffect(() => {
    //console.log('useEffect()')

    let clone;
    let dragtarget;

    let draggable = document.querySelectorAll(".draggable");
    draggable = [...draggable];

    let container = document.querySelector(".builder-area");

    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return {
              offset: offset,
              element: child,
            };
          } else {
            return closest;
          }
        },
        {
          offset: Number.NEGATIVE_INFINITY,
        }
      ).element;
    }

    //-----CONTAINER EVENT LISTNERS-----//
    /*function random(number) {
            return Math.floor(Math.random() * number);
        }*/

    /*function bgChange() {
            const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            return rndCol;
        }*/
    container.addEventListener("dragenter", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("builder-area")) {
        container.style.border = "2px solid var(--charcoal)";
      }
    });
    /*container.addEventListener('dragstart', (event) => {
            event.target.style.backgroundColor = bgChange()
            console.log(event.target.classList)

        });*/
    container.addEventListener("dragend", (event) => {
      container.style.border = "2px solid var(--whitesmoke)";
    });

    //-----ELEMENT EVENT LISTNERS-----//
    for (let i of draggable) {
      let afterElement;
      i.addEventListener("dragstart", (e) => {
        clone = i.cloneNode(true);
        clone.classList.add("clone");
        for (let ii of clone.children) {
          if (ii.classList.contains("invisible")) {
            ii.classList.remove("invisible");
            ii.addEventListener("input", (e) => {
              let limit = 480;
              ii.style.height = "";
              ii.style.height = Math.min(ii.scrollHeight, limit) + "px";
              ii.style.maxHeight = "210px";
            });
          }
          if (ii.classList.contains("+")) {
            ii.style.display = "none";
          }
        }

        i.classList.toggle("dragging");
        clone.addEventListener("dragstart", (e) => {
          dragtarget = e.target;
          e.target.classList.add("currDrag");
        });
        clone.addEventListener("dragstart", (e) => {
          dragtarget = null;
          e.target.classList.remove("currDrag");
          e.target.style.border = "1px solid var(--charcoal)";
        });
        clone.addEventListener("drag", (e) => {
          afterElement = getDragAfterElement(container, e.clientY);
          container.insertBefore(e.target, afterElement);
        });
        clone.addEventListener("dragend", (e) => {
          afterElement = getDragAfterElement(container, e.clientY);
          container.insertBefore(e.target, afterElement);
          e.target.style.border = "0px";
        });
      });
      i.addEventListener("dragend", (e) => {
        const dropzone = document.querySelector(".builder-area");
        if (
          e.clientX > container.getBoundingClientRect().x &&
          e.clientX <
            container.getBoundingClientRect().x +
              container.getBoundingClientRect().width &&
          e.clientY > container.getBoundingClientRect().y &&
          e.clientY <
            container.getBoundingClientRect().y +
              container.getBoundingClientRect().height
        ) {
          container.appendChild(clone);
          document.querySelector(".builder-area").style.border =
            "2px solid var(--whitesmoke)";
        } else {
          container.style.border = "2px solid var(--whitesmoke)";
        }
        i.classList.toggle("dragging");
      });
    }
  }, []);

  return (
    <div id="session-list">
      {elements
        .sort(({ id: previousID }, { id: currentID }) => previousID - currentID)
        .map((elements) => (
          <>
            {elements.title == "Theme" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <input className="invisible theme" maxLength={52}></input>
              </div>
            ) : null}
            {elements.title == "Subtitle" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <input className="invisible subtitle" maxLength={52}></input>
              </div>
            ) : null}
            {elements.title == "Prayer" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible prayer"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Additional" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible additional"
                  maxLength={159}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Learning" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible learning"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Objective" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <input className="invisible objective" maxLength={52}></input>
              </div>
            ) : null}
            {elements.title == "Worship" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible worship"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Activity" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible activity"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Instructions" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible instructions"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Reflection" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible reflection"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Practical" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible practical"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Media" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <input className="invisible objective" maxLength={52}></input>
              </div>
            ) : null}
            {elements.title == "Supplies" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <input className="invisible supplies" maxLength={26}></input>
                <input className="invisible supplies" maxLength={26}></input>
                <input className="invisible supplies" maxLength={26}></input>
                <input className="invisible supplies" maxLength={26}></input>
                <input className="invisible supplies" maxLength={26}></input>
                <input className="invisible supplies" maxLength={26}></input>
              </div>
            ) : null}
            {elements.title == "Verse" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <input className="invisible verse" maxLength={26}></input>
                <input className="invisible verse" maxLength={26}></input>
                <input className="invisible verse" maxLength={26}></input>
              </div>
            ) : null}
            {elements.title == "Challenge" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible challenge"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Explanation" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible explanation"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Game" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea className="invisible game" maxLength={318}></textarea>
              </div>
            ) : null}
            {elements.title == "Discussion" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <input className="invisible discussion" maxLength={52}></input>
                <input className="invisible discussion" maxLength={52}></input>
                <input className="invisible discussion" maxLength={52}></input>
              </div>
            ) : null}
            {elements.title == "Question" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <input className="invisible question" maxLength={52}></input>
                <input className="invisible question" maxLength={52}></input>
                <input className="invisible question" maxLength={52}></input>
              </div>
            ) : null}
            {elements.title == "Ice Breaker" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible ice-breaker"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
            {elements.title == "Summary" ? (
              <div
                className="element-preview no-select draggable"
                draggable="true"
                key={elements.id}
              >
                <span className="addElement no-select +" onClick={handleAdd}>
                  +
                </span>
                <div>{elements.body}</div>
                <textarea
                  className="invisible summary"
                  maxLength={318}
                ></textarea>
              </div>
            ) : null}
          </>
        ))}
    </div>
  );
};

export default Elements;
