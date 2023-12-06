import React from 'react';
import Gif from './Gif';

function GifList({ gifIds, setSelectedId }) {
  // const gifIdList = ["13HgwGsXF0aiGY", "gG6OcTSRWaSis", "zOvBKUUEERdNm"];
  return (
    <div className="gif-list">
      {gifIds.map((gifId) => <Gif id={gifId} key={gifId} setSelectedId={setSelectedId} />)}
    </div>
  );
}

export default GifList;
