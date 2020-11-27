import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getQuoteByName } from "../api";

import * as charactersActions from '../actions/charactersActions';
import * as quotesActions from '../actions/quotesActions';
import * as commentsActions from '../actions/commentsActions';

import CharacterDetail from "../components/CharacterDetail";
import Comment from "../components/Comment";
import Quote from "../components/Quote";
import PageLaoding from "../components/PageLoading"

const { getById: charactersGetById} = charactersActions;
const { getByCharacter: quotesGetByCharacter } = quotesActions;
const { getByCharacter: commentsGetByCharacter } = commentsActions;


function CharacterDetails(props) {
  const [character, setCharacter] = useState(null);
  const [comments, setComments] = useState([]);
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {

    const {
      charactersGetById,
      quotesGetByCharacter,
      commentsGetByCharacter,
      validate,
      match: { params: { id } }
    } = props
    async function fetchData() {
      let index = props.charactersReducer.characters.findIndex(element => element.char_id == id)
      if(index === -1) {
        await charactersGetById(id)
        index = props.charactersReducer.characters.findIndex(element => element.char_id == id)
      }
      if(index !== -1) {
        if(!("quotes_key" in props.charactersReducer.characters[index])) {
          await quotesGetByCharacter(index)
        }
        if(!("comments_key" in props.charactersReducer.characters[index])) {
          await commentsGetByCharacter(index)
        }
        setCharacter(props.charactersReducer.characters[index])
        setQuotes(props.quotesReducer.quotes[props.charactersReducer.characters[index].quotes_key])
        setComments(props.commentsReducer.comments[props.charactersReducer.characters[index].comments_key])
      }
    }
    fetchData();

  }, [character,quotes,comments]);

  if(props.charactersReducer.error || props.quotesReducer.error) {
    return <h1>Error {props.charactersReducer.error.code || props.quotesReducer.error.code} </h1>
  }

  if (props.charactersReducer.load || props.quotesReducer.load) {
    return <PageLaoding/>
  }

  return (
    <div>
      <CharacterDetail character={character}/>
      <div className="row">
        <div className="col-6">
          <Comment />
        </div>
        <div className="col-6">
          {quotes != null ? <Quote quotes={quotes} /> : ""}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ charactersReducer, quotesReducer, commentsReducer }) => {
	return { charactersReducer, quotesReducer, commentsReducer };
};

const mapDispatchToProps = {
  charactersGetById,
  quotesGetByCharacter,
  commentsGetByCharacter,
};


export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
 