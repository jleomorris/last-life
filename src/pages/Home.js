import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import {
  setSmallCards,
  setMediumCards,
  setLargeCards,
} from "../actions/cardSizeAction";
// Components
import Game from "../components/Game";
// Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// React router
import { useLocation } from "react-router-dom";

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(location);

  // FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames(10));
    dispatch(setLargeCards());
  }, [dispatch]);

  const filterhandler = (number) => {
    dispatch(loadGames(number));
  };

  const CardSizeHandler = (size) => {
    if (size === "small") dispatch(setSmallCards());
    if (size === "medium") dispatch(setMediumCards());
    if (size === "large") dispatch(setLargeCards());
  };

  //Get data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  // Card size variables
  const { isSmallSelected, isMediumSelected, isLargeSelected } = useSelector(
    (state) => state.cardSizes
  );

  console.log(isSmallSelected, isMediumSelected, isLargeSelected);

  return (
    <GameList>
      {pathId && <GameDetail />}
      <h2>Upcoming games</h2>
      <div className="view-container">
        <h3>View</h3>
        <button onClick={() => filterhandler(3)}>3</button>
        <button onClick={() => filterhandler(5)}>5</button>
        <button onClick={() => filterhandler(10)}>10</button>
        <button onClick={() => filterhandler(20)}>20</button>
        <button onClick={() => filterhandler(30)}>30</button>
      </div>
      <div className="card-toggle-container">
        <h3>Card size</h3>
        <button
          onClick={() => CardSizeHandler("small")}
          className={`${isSmallSelected ? "card-highlighted" : ""}`}
        >
          S
        </button>
        <button
          onClick={() => CardSizeHandler("medium")}
          className={`${isMediumSelected ? "card-highlighted" : ""}`}
        >
          M
        </button>
        <button
          onClick={() => CardSizeHandler("large")}
          className={`${isLargeSelected ? "card-highlighted" : ""}`}
        >
          L
        </button>
      </div>
      <Games
        className={`${isSmallSelected ? "small-cards" : ""}${
          isMediumSelected ? "medium-cards" : ""
        }${isLargeSelected ? "large-cards" : ""}`}
      >
        {/* <Games className="small-cards"> */}
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Popular games</h2>
      <Games
        className={`${isSmallSelected ? "small-cards" : ""}${
          isMediumSelected ? "medium-cards" : ""
        }${isLargeSelected ? "large-cards" : ""}`}
      >
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New games</h2>
      <Games
        className={`${isSmallSelected ? "small-cards" : ""}${
          isMediumSelected ? "medium-cards" : ""
        }${isLargeSelected ? "large-cards" : ""}`}
      >
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }

  button {
    background: transparent;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    margin: 0rem 1rem 2rem 0rem;
    cursor: pointer;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      transition: all 0.5s ease;
      /* color: white; */
    }
  }

  .view-container,
  .card-toggle-container {
    width: 50%;
    display: inline-block;
    /* border: 1px solid red; */
  }
`;

const Games = styled(motion.div)`
  /* min-height: 80vh; */
  display: grid;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
