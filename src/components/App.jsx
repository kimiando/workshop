import React from 'react';
import SearchBar from "./SearchBar";
import Gif from "./Gif";
import GifList from "./GifList";

const giphy = require('giphy-api')({
  apiKey: 'vPhc1EwBBUO8CxRhU9DycHs0Uzqh6pvc',
  https: true
});

function App() {
  const [selectedId, setSelectedId] = React.useState("zOvBKUUEERdNm");
  const [gifIds, setGifIds] = React.useState(["13HgwGsXF0aiGY", "gG6OcTSRWaSis", "TilmLMmWrRYYHjLfub"]);
  function fetchGiphy(keyword) {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map(gif => gif.id);
      setGifIds(ids);
    });
  }
  // const selectedId = "zOvBKUUEERdNm";
  // setSelectedId("gG6OcTSRWaSis");
  // const gifIds = ["13HgwGsXF0aiGY", "gG6OcTSRWaSis", "TilmLMmWrRYYHjLfub"];
  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <Gif id={selectedId} />
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}

export default App;

// import React from 'react';

// const App = () => {
//   return (
//     <div>Hello from app</div>
//   );
// }

// export default App;
