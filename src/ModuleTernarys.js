function ternary() {
  {
    elements.map((elements) => (
      <>
        {elements.title == "Activity" ? (
          <div
            className="element-preview no-select draggable"
            draggable="true"
            key={elements.id}
          >
            <span className="addElement no-select" onClick={handleAdd}>
              +
            </span>
            <h6>{elements.title}</h6>
            <div>{elements.body}</div>
          </div>
        ) : null}
        {elements.title == "Subtitle" ? (
          <div
            className="element-preview no-select draggable"
            draggable="true"
            key={elements.id}
          >
            <span className="addElement no-select" onClick={handleAdd}>
              +
            </span>
            <h6>{elements.title}</h6>
            <div>{elements.body}</div>
          </div>
        ) : null}
      </>
    ));
  }
}

export { ternary };
