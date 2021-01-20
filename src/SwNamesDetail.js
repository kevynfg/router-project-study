import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SwNamesDetail({ match }) {
  useEffect(() => {
    fetchPerson();
  }, []);

  useEffect(() => {
    console.log(match);
  }, [match]);

  const [swPerson, setSwPerson] = useState([]);
  const [swData, setSwData] = useState([]);
  const [teste, setTeste] = useState(1);
  const swNames = useLocation();

  const fetchPerson = async () => {
    const fetchItem = await fetch(
      `https://swapi.dev/api/people/${match.params.id}/?format=json`
    );
    const data = await fetchItem.json();

    setSwPerson(data.name);
    console.log(swPerson);
  };

  return <div>oi</div>;
}
