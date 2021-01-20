import React from "react";
// Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// React router
import { Link } from "react-router-dom";
// Util
import { convertToSmallImage } from "../util";

const Game = ({ name, released, image, id, metacriticScore }) => {
  const stringPathId = id.toString();
  // Load details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
    console.log(stringPathId, typeof stringPathId);
  };

  console.log(metacriticScore != "");
  console.log(metacriticScore === null);

  return (
    <StyledGame layoutID={stringPathId}>
      <motion.div
        className="details-container"
        style={{ background: `url(${convertToSmallImage(image, 640)})` }}
        onClick={loadDetailHandler}
        layoutId={`image ${stringPathId}`}
      >
        <Link to={`/game/${id}`}>
          <div className="title">
            <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
            <p>{released}</p>
          </div>
        </Link>
        {metacriticScore !== null ? (
          <div className="metacritic-score">
            <p>{metacriticScore}</p>
          </div>
        ) : (
          <div className="not-available metacritic-score">
            <p>N/A</p>
          </div>
        )}
      </motion.div>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 40vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 1rem;

  .details-container {
    height: 100%;
    background-size: cover !important;
    background-position: top !important;
    border-radius: 1rem;
    position: relative;
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
      z-index: 1;

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

  .metacritic-score {
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
    background: #333333;
    height: fit-content;
    border: 4px solid #ffcc34;
    padding: 0rem 1rem;
    border-radius: 50%;

    p {
      color: white;
      font-weight: 900;
      font-size: 2rem;
    }
  }

  .not-available {
    padding: 0.5rem 0.75rem;

    p {
      font-size: 1.5rem;
    }
  }
`;

export default Game;
