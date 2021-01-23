import React, { useState, useEffect } from "react";
import GameDetail from "../components/GameDetail";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import {
  setExtraSmallCards,
  setSmallCards,
  setMediumCards,
  setLargeCards,
} from "../actions/cardSizeAction";
// Components
import Game from "../components/Game";
// Styling and animation
import styled from "styled-components";
import { container, fadeIn, slideLeft } from "../animations";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// React router
import { useLocation } from "react-router-dom";
//Images
import bannerImage from "../img/pexels-photo-4842496.jpeg";
import logo from "../img/logo.svg";
// Redux and routes
import { fetchSearch } from "../actions/gamesAction";

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  // State extracted data
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  // Card size variables
  const {
    isExtraSmallSelected,
    isSmallSelected,
    isMediumSelected,
    isLargeSelected,
  } = useSelector((state) => state.cardSizes);

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  const filterhandler = (number) => {
    dispatch(loadGames(number));
  };

  const cardSizeHandler = (size) => {
    if (size === "extra-small") dispatch(setExtraSmallCards());
    if (size === "small") dispatch(setSmallCards());
    if (size === "medium") dispatch(setMediumCards());
    if (size === "large") dispatch(setLargeCards());
  };

  useEffect(() => {
    // Set 30 games per section and card size large by default
    dispatch(loadGames(30));

    // Set card size based on window size
    if (window.innerWidth < 500) {
      dispatch(setExtraSmallCards());
    } else if (window.innerWidth < 950) {
      dispatch(setSmallCards());
    } else if (window.innerWidth < 1200) {
      dispatch(setMediumCards());
    } else {
      dispatch(setLargeCards());
    }
  }, [dispatch]);

  return (
    <StyledHome>
      <Banner variants={container} initial="hidden" animate="show">
        <img className="banner-image" src={bannerImage} alt="banner-image" />
        <div className="title-logo-search-container">
          <motion.div
            className="app-logo-title-container"
            variants={fadeIn}
            // initial="hidden"
            // animate="show"
          >
            <img
              className="app-logo"
              src={logo}
              alt="logo"
              onClick={clearSearched}
            />
            <h1>LastLife</h1>
          </motion.div>
          <motion.form
            onSubmit={submitSearch}
            className="search-container"
            variants={slideLeft}
            // initial="hidden"
            // animate="show"
          >
            <input value={textInput} type="text" onChange={inputHandler} />
            <button type="submit">Search</button>
          </motion.form>
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
              onClick={() => cardSizeHandler("extra-small")}
              className={`${
                isExtraSmallSelected ? "card-highlighted" : ""
              } extra-small-card-button`}
            >
              XS
            </button>
            <button
              onClick={() => cardSizeHandler("small")}
              className={`${
                isSmallSelected ? "card-highlighted" : ""
              } small-card-button`}
            >
              S
            </button>
            <button
              onClick={() => cardSizeHandler("medium")}
              className={`${
                isMediumSelected ? "card-highlighted" : ""
              } medium-card-button`}
            >
              M
            </button>
            <button
              onClick={() => cardSizeHandler("large")}
              className={`${
                isLargeSelected ? "card-highlighted" : ""
              } large-card-button`}
            >
              L
            </button>
          </div>
        </div>
      </Banner>
      <GameList
        variants={fadeIn}
        // initial="hidden" animate="show"
      >
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
          </AnimatePresence>
          {searched != "" && (
            <>
              <h2>Searched game results</h2>
              <Games
                className={`${isSmallSelected ? "small-cards" : ""}${
                  isMediumSelected ? "medium-cards" : ""
                }${isLargeSelected ? "large-cards" : ""}`}
              >
                {searched.map((game) => (
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
            </>
          )}
          <h2>Popular games</h2>
          <Games
            className={`${isExtraSmallSelected ? "extra-small-cards" : ""}${
              isSmallSelected ? "small-cards" : ""
            }${isMediumSelected ? "medium-cards" : ""}${
              isLargeSelected ? "large-cards" : ""
            }`}
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
    </StyledHome>
  );
};

// Styled components
const StyledHome = styled(motion.div)`
  overflow-x: hidden;
`;

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  @media (max-width: 500px) {
    padding: 0rem 2rem;
  }

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

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
  }
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

  @media (max-width: 800px) {
    min-height: 50vh;
    padding: 3rem;
  }

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
        cursor: pointer;
      }

      @media (max-width: 800px) {
        h1 {
          font-size: 3rem;
        }
      }
    }

    .search-container {
      width: 100%;

      @media (max-width: 500px) {
        margin-left: 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

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

        @media (max-width: 500px) {
          margin-left: 0rem;
          width: 100%;
          border-radius: 2rem;
        }

        @media (min-width: 1200px) {
          width: 55%;
        }
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
        outline: none;

        @media (max-width: 500px) {
          margin-top: 1rem;
          border-radius: 2rem;
        }
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
    outline: none;

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

    @media (max-width: 800px) {
      justify-content: space-between;
    }

    .card-toggle-container {
      .extra-small-card-button {
        @media (min-width: 500px) {
          display: none;
        }
      }

      .small-card-button {
        @media (max-width: 800px) {
          background: #bfbfeb;
        }
        @media (max-width: 500px) {
          display: none;
        }
      }

      /* .medium-card-button {
        @media (max-width: 950px) {
          background: #bfbfeb;
        }
      } */

      .large-card-button {
        @media (max-width: 950px) {
          display: none;
        }
      }

      .medium-card-button,
      .large-card-button {
        @media (max-width: 800px) {
          display: none;
        }
      }
    }

    .view-container,
    .card-toggle-container {
      width: 50%;
      display: inline-block;

      @media (max-width: 800px) {
        width: unset;
      }
    }
  }
`;

export default Home;
