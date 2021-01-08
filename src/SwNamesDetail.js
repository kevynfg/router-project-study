import React, { useEffect, useState } from 'react';

export default function SwNamesDetail({ match }) {
  useEffect(() => {
    fetchName();
    console.log(match);
  }, [match]);

  const [swName, setSwName] = useState([]);

  const fetchName = async (name) => {
    const fetchItem = await fetch(
      `https://swapi.dev/api/people/${match.params.id}/`
    );

    const data = await fetchItem.json();
    console.log(data);
  };

  return (
    <div>
      <h1>items</h1>
    </div>
  );
}
