import React, { useState, useEffect, Fragment } from "react";
import { getCharacters, getRandomQuote } from "../api";
import { connect } from 'react-redux'

import * as charactersActions from '../actions/charactersActions'

import BannerHome from "../images/BannerHome.jpg";
import "./styles/Home.css";

import CharacterList from "../components/CharacterList";
import SearchInput from "../components/SearchInput";
import PageLoading from "../components/PageLoading"
import MiniLoader from "../components/MiniLoader"

function Home(props) {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setLoad(true);
    setError(null);
    async function fetchData() {
      try {
        const quote = await getRandomQuote();
        setQuote(quote);
        setLoad(false);
      } catch (error) {
        setLoad(false);
        setError(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData(){
      await props.GetAll(count)
      if(props.characters.length === 63) {
        setVisible(false)
      }
    }
    fetchData()
  }, [count]);
  if (props.error) {
    return <h1>{props.error.message}</h1>;
  }
  if(error) {
    return <h1>{error.message}</h1>;
  }
  if ((load || props.load) && props.characters.length  === 0) {
    return <PageLoading/>;
  }
  return (
    <Fragment>
      <div className="HeroHome">
        <img className="HeroHome__image" src={BannerHome} alt="" />
        <div className="HeroHome__container">
          <div className="HeroHome__content container m-auto">
            <div className="HeroHome__quote mb-4">
              <i className="HerHome__quote-message mb-4">
                “{quote != null ? quote[0].quote : ""}”
              </i>
              <div className="HerHome__quote-author">
                Author: {quote != null ? quote[0].author : ""}
              </div>
            </div>
            <a className="btn btn-dark mx-auto d-block" href="#main-home">
              Welcome
            </a>
          </div>
        </div>
      </div>
      <main id="main-home">
        <h3 className="search__title my-3">Buscar</h3>
        <SearchInput />
        <div className=" mt-4 mb-5">
          <CharacterList characters={props.characters} />
          {props.load && props.characters?<MiniLoader/>: ""}
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className={`${
              visible ? "d-block" : "d-none"
            } btn btn-dark mx-auto mt-5`}
          >
            Load more
          </button>
        </div>
      </main>
    </Fragment>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.charactersReducer
}

export default connect(mapStateToProps, charactersActions)(Home);
