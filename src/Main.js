import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter, useHistory } from "react-router-dom";
import { AboutPage, HomePage, SearchResultsPage, RouteNotFound } from "./Pages";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const Navbars = styled.div`
  display: flex;
  align-items: center;
  background-color: #0cbaba;
  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
  border-radius: 30px 30px 0px 0px;
  flex-wrap: wrap;
`;

const Navs = styled.div`
  display: flex;
  align-items: center;
`;

const NavsLink = styled.div`
  padding-left: 50px;
  margin-top: 5px;
  color: white;
  &:hover {
    color: fuchsia;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  margin: 20px;
  width: 350px;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
  backdrop-filter: blur(50px);
  opacity: 0.8;
  background: linear-gradient(to right, #7474bf 0%, #348ac7 51%, #7474bf 100%);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 3px rgba(255, 255, 255, 0.4) solid;
  border-radius: 30px;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
`;

const Forms = styled.div`
  display: flex;
  flex-direction: row;
`;

const FormControls = styled.input`
  background: transparent;
  border: transparent none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightblue;
  &:focus {
    outline: none;
    color: white;
  }
  &:hover {
    outline: none;
    color: white;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
    opacity: 0.9;
  }
`;

const Buttons = styled.button`
  border-radius: 30px;
  color: black;
  opacity: 0.9;

  &:focus {
    outline: none;
    color: white;
  }
`;

function Main() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const handleRoute = (route) => () => {
    history.push(route);
  };

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchText) {
      let text = searchText;
      history.push("/results", { searchText: text });
    }
  };

  const handleSearchKeyUp = (event) => {
    event.preventDefault();
    if (event.key === "Enter" && event.keyCode === 13) {
      handleSearchSubmit();
    }
  };

  const handleFormSubmit = (e) => e.preventDefault();

  useEffect(() => {
    handleSearchSubmit();
    // eslint-disable-next-line
  }, [searchText, history]);

  return (
    <>
      <Navbars bg="dark" variant="dark">
        <Navs className="mr-auto">
          <NavsLink onClick={handleRoute("/")}>Home</NavsLink>
          <NavsLink onClick={handleRoute("/about")}>About</NavsLink>
        </Navs>
        <Wrapper>
          <Forms inline onSubmit={handleFormSubmit}>
            <FormControls
              onChange={handleSearchInput}
              value={searchText}
              onKeyUp={handleSearchKeyUp}
              type="text"
              placeholder="Type your search here"
              className="mr-sm-2"
            />
            {/* <Button onClick={handleSearchSubmit} variant="outline-info">
              Search
            </Button> */}
            <Buttons onClick={handleSearchSubmit}>Search</Buttons>
          </Forms>
        </Wrapper>
      </Navbars>

      <Switch data={searchText}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/results" component={SearchResultsPage}>
          <SearchResultsPage data={searchText} />
        </Route>
        <Route component={RouteNotFound} />
      </Switch>
    </>
  );
}

export default withRouter(Main);