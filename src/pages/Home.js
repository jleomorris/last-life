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
//Images
import bannerImage from "../img/pexels-photo-4842496.jpeg";

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(location);

  // FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    // Set 10 games per section and card size large by default
    dispatch(loadGames(10));
    dispatch(setLargeCards());
  }, [dispatch]);

  const filterhandler = (number) => {
    dispatch(loadGames(number));
  };

  const cardSizeHandler = (size) => {
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

  return (
    <>
      <Banner>
        <img src={bannerImage} alt="banner-image" />
        <h1>RawgFind</h1>
        <div className="filters">
          <div className="view-container">
            <h3>View</h3>
            <button
              className={`${upcoming.length === 3 ? "card-highlighted" : ""}`}
              onClick={() => filterhandler(3)}
            >
              3
            </button>
            <button
              className={`${upcoming.length === 5 ? "card-highlighted" : ""}`}
              onClick={() => filterhandler(5)}
            >
              5
            </button>
            <button
              className={`${upcoming.length === 10 ? "card-highlighted" : ""}`}
              onClick={() => filterhandler(10)}
            >
              10
            </button>
            <button
              className={`${upcoming.length === 20 ? "card-highlighted" : ""}`}
              onClick={() => filterhandler(20)}
            >
              20
            </button>
            <button
              className={`${upcoming.length === 30 ? "card-highlighted" : ""}`}
              onClick={() => filterhandler(30)}
            >
              30
            </button>
          </div>
          <div className="card-toggle-container">
            <h3>Card size</h3>
            <button
              onClick={() => cardSizeHandler("small")}
              className={`${isSmallSelected ? "card-highlighted" : ""}`}
            >
              S
            </button>
            <button
              onClick={() => cardSizeHandler("medium")}
              className={`${isMediumSelected ? "card-highlighted" : ""}`}
            >
              M
            </button>
            <button
              onClick={() => cardSizeHandler("large")}
              className={`${isLargeSelected ? "card-highlighted" : ""}`}
            >
              L
            </button>
          </div>
        </div>
      </Banner>
      <GameList>
        {pathId && <GameDetail />}
        <h2>Upcoming games</h2>
        <Games
          className={`${isSmallSelected ? "small-cards" : ""}${
            isMediumSelected ? "medium-cards" : ""
          }${isLargeSelected ? "large-cards" : ""}`}
        >
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
    </>
  );
};

// Styled components
const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  /* min-height: 80vh; */
  display: grid;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const Banner = styled(motion.div)`
  /* background: url(https://images.pexels.com/photos/4842496/pexels-photo-4842496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); */
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.7);
  }

  h3 {
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }

  button {
    background: transparent;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    margin: 0rem 1rem 1rem 0rem;
    cursor: pointer;
    border: 1px solid white;
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      transition: all 0.5s ease;
      /* color: white; */
    }
  }

  .filters {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    .view-container,
    .card-toggle-container {
      width: 50%;
      display: inline-block;
      /* border: 1px solid red; */
    }
  }
`;

export default Home;
