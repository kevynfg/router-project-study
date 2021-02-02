import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function App({ match }) {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const page = searchParams.get('page');

  const [swNames, setSwNames] = useState([]);
  const [nextPageNumber, setnextPageNumber] = useState(1);
  const [nextPage, SetNextPage] = useState(null);
  const isMaxPage = useRef(false);

  useEffect(() => {
    //fetchSpecificName('a');
    fetchAllNames(nextPageNumber);
    console.log(match);
    console.log('Paginação', page);
  }, []);

  useEffect(() => {
    fetchPageButton();
    fetchAllNames();
  }, [nextPageNumber]);

  const fetchPageButton = async () => {
    const data = await fetch(`${nextPage}`);
    const newPage = await data.json();
    SetNextPage(newPage.next);
    setSwNames(newPage.results);
  };

  const fetchSpecificName = async (name) => {
    const data = await fetch(
      `https://swapi.dev/api/people/?search=${name}&format=json`
    );

    const names = await data.json();
    setSwNames(names.results);
  };

  const fetchAllNames = async () => {
    const data = await fetch(
      `https://swapi.dev/api/people/?page=${nextPageNumber}&format=json`
    );

    const names = await data.json();
    SetNextPage(names.next);
    setSwNames(names.results);
    if (names.next === null) {
      isMaxPage.current = true;
    }
    console.log(names);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    //console.log(nextPageNumber)
    setnextPageNumber(nextPageNumber + 1);
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
          <Link to={`/StarWars/${index + 1}`}>{item.name}</Link>
        </h1>
      ))}
      <button onClick={handleButtonClick} disabled={isMaxPage.current}>
        Next Page
      </button>
    </div>
    //testing
  );
}
