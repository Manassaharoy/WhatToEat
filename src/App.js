import Pages from "./pages/Pages";
import Category from "./components/Catagory";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components"
import { Link } from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to="/">WhatTo</Logo>
        <GiKnifeFork></GiKnifeFork>
        <Logo to="/">Eat</Logo>
      </Nav>
      <Search/>
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo=styled(Link)`
color: #fff;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;`;
const Nav=styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    
    font-size: 2rem;}`;

export default App;
