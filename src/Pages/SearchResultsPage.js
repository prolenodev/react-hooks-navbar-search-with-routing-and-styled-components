import React, { useState, useEffect } from "react";
import { ApiData } from "../API/index";

export default function SearchResultsPage({ data }) {
  const [isLoading, setIsloading] = useState(true);
  const [searchText, setSearchtext] = useState("");
  const [searchResults, setSearchresults] = useState([]);

  const handleSearch = () => {

    let searchText = data;

    let results = ApiData.filter((item) => item.title.includes(searchText));

    setIsloading(false);
    setSearchtext(data);
    setSearchresults(results);

    // console.log("data");
    // console.log(data);
    // console.log("searchText");
    // console.log(searchText);
    // console.log("results");
    // console.log(results);
    // console.log("searchResults");
    // console.log(searchResults);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Your Search Results</h1>
          <ul>
            {/* <li>data: {data}</li> */}
            <li>searchText: {searchText}</li>
            <li>searchResults: {searchResults.length}</li>
            <ul>
              {searchResults.map((item, id) => <li key={id}>{item.title}</li>)}
            </ul>
          </ul>
          {searchResults.length > 0 ? (
            <pre>
              <small>{JSON.stringify(searchResults, null, 2)}</small>
            </pre>
          ) : (
            <p>NO RESULTS FOUND</p>
          )}{" "}
        </>
      )}
    </div>
  );
}
