import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getQuoteByName } from "../api";

import * as charactersActions from '../actions/charactersActions';
import * as quotesActions from '../actions/quotesActions';
import * as commentsActions from '../actions/commentsActions';

import CharacterDetail from "../components/CharacterDetail";
import PageLoading from "../components/PageLoading";
import CommentList from "../components/CommentList";
import CommentInput from "../components/CommentInput";
import Quote from "../components/Quote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const { getById: charactersGetById} = charactersActions;
const { getByCharacter: quotesGetByCharacter } = quotesActions;
const { getByCharacter: commentsGetByCharacter, add: commentsAdd } = commentsActions;


function CharacterDetails(props) {
  const [character, setCharacter] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("")
  const [quotes, setQuotes] = useState([]);

  const handleAddComment = () => {
    if(comment.trim() === "") {
      return
    }
    const date = new Date()
    const newComment = {
      date,
      content: comment
    }
    setComment("")
    props.commentsAdd(character.comments_key, newComment)
  }
  
  useEffect(() => {

    const {
      charactersGetById,
      quotesGetByCharacter,
      commentsGetByCharacter,
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

  if (props.charactersReducer.load) {
    return <PageLoading/>
  }

  return (
    <div>
      { character !== null ? <CharacterDetail character={character}/> : ""}
      <div className="row">
        <div className="col">
          <CommentInput onChangeComment={(comment)=> {
            setComment(comment)
          }} onAddComment={handleAddComment}/>
          <CommentList comments={comments} />
        </div>
        <div className="col">
          {
            props.quotesReducer.load? 
              <div className="d-flex justify-content-center spinner-border text-warning m-auto">
                <span className="sr-only">...Loading</span>
              </div> 
            : quotes.length?
              <Quote quotes={quotes} />
            :
              ""
          }
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
  commentsAdd
};


export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
 