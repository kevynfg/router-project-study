import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function App({ match }) {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const page = searchParams.get('page');

  useEffect(() => {
    //fetchSpecificName('a');
    fetchAllNames(nextPageData);
    //console.log(match);
    console.log(page);
  }, []);

  const [swNames, setSwNames] = useState([]);
  const [nextPageData, setNextPageData] = useState(1);

  const fetchSpecificName = async (name) => {
    const data = await fetch(
      `https://swapi.dev/api/people/?search=${name}&format=json`
    );

    const names = await data.json();
    setSwNames(names.results);
    console.log(names.results);
  };

  const fetchAllNames = async (pageNumber = 1) => {
    const data = await fetch(
      `https://swapi.dev/api/people/?page=${pageNumber}&format=json`
    );

    const names = await data.json();
    setSwNames(names.results);
    console.log(names);
  };

  //Disponibilizar um botão para next page
  //Jogar o link do next page e usa-lo num button com fetch
  //ex: onclick => fetch(`next`)
  const fetchNextPage = async (number = 1) => {
    const fetchPage = await fetch(
      `https://swapi.dev/api/people/?page=${number}&format=json`
    );
    const newData = await fetchPage.json();
    setSwNames('');
    setSwNames(newData.results);

    //console.log(newData);
  };

  return (
    <div>
      {swNames.map((item, index) => (
        <h1 key={index}>
          <Link
            to={{
              pathname: `/StarWars/${index + 1}`,
              state: swNames[index],
            }}
          >
            {item.name}
          </Link>
        </h1>
      ))}
    </div>
  );
}
