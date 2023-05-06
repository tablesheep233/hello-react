import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFacorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFacorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFacorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
