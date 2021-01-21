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
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// React router
import { useLocation } from "react-router-dom";
//Images
import bannerImage from "../img/pexels-photo-4842496.jpeg";
import logo from "../img/logo.svg";

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(location);

  // FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    // Set 30 games per section and card size large by default
    dispatch(loadGames(30));
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
        <img className="banner-image" src={bannerImage} alt="banner-image" />
        <div className="title-logo-search-container">
          <div className="app-logo-title-container">
            <img className="app-logo" src={logo} alt="logo" />
            <h1>RawgFind</h1>
          </div>
          <div className="search-container">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
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
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
          </AnimatePresence>
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
                metacriticScore={game.metacritic}
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
                metacriticScore={game.metacritic}
              />
            ))}
          </Games>
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
                metacriticScore={game.metacritic}
              />
            ))}
          </Games>
        </AnimateSharedLayout>
      </GameList>
    </>
  );
};

// Styled components
const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 2rem 0rem;
  }
`;

const Games = styled(motion.div)`
  /* min-height: 80vh; */
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin: 2rem 0rem;
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

  .title-logo-search-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    .app-logo-title-container {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 3rem;
        width: 3rem;
        margin-right: 1rem;
      }
    }

    .search-container {
      width: 100%;
      input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem 2rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        outline: none;
        margin-left: 4rem;
        border-radius: 2rem 0rem 0rem 2rem;
      }

      button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        border-radius: 0rem 2rem 2rem 0rem;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border-left: 1px solid black;
        outline: none;
        text-transform: none;
      }
    }
  }

  .app-logo {
    height: 2rem;
    width: 2rem;
  }

  .banner-image {
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
