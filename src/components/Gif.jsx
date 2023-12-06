import React from 'react';

function Gif({ id, setSelectedId }) {
  // const id = "13HgwGsXF0aiGY";
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  function handleClick() {
    console.log("click");
    setSelectedId(id);
  }
  return (
    <div>
      <img className="gif" src={url} alt=""  onClick={handleClick} />
    </div>
  );
}

export default Gif;
