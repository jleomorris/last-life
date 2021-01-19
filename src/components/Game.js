import React from "react";
// Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// React router
import { Link } from "react-router-dom";

const Game = ({ name, released, image, id }) => {
  // Load details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame>
      <div style={{ background: `url(${image})` }} onClick={loadDetailHandler}>
        <Link to={`/game/${id}`}>
          <div className="title">
            <h3>{name}</h3>
            <p>{released}</p>
          </div>
        </Link>
      </div>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 40vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: left;
  overflow: hidden;
  cursor: pointer;

  div {
    height: 100%;
    background-size: cover !important;
    background-position: top !important;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    .title {
      text-align: left;
      width: 100%;
      padding: 1.5rem;

      h3,
      p {
        width: 100%;
        color: white;
        padding: 0;
        text-shadow: 0px 5px 10px black;
        font-weight: 900;
      }
    }
  }

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    z-index: -1;
  }
`;

export default Game;
