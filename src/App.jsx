import { useState, useEffect } from "react";

import "./App.css";
import Card from "./components/Card";

const cardBack = "src/img/card-back.png";
function App() {
  const [images, setImages] = useState([
    {
      src: "src/img/brook-1.png",
      open: false,
      trying: false,
      id: "1",
      name: "brook",
    },
    {
      src: "src/img/brook-2.jpg",
      open: false,
      trying: false,
      id: "3",
      name: "brook",
    },
    {
      src: "src/img/chopper-1.jpg",
      open: false,
      trying: false,
      id: "2",
      name: "chopper",
    },
    {
      src: "src/img/chopper-2.jpg",
      open: false,
      trying: false,
      id: "4",
      name: "chopper",
    },
    {
      src: "src/img/luffy-1.jpg",
      open: false,
      trying: false,
      id: "5",
      name: "luffy",
    },
    {
      src: "src/img/luffy-2.jpg",
      open: false,
      trying: false,
      id: "6",
      name: "luffy",
    },
    {
      src: "src/img/sanji-1.jpg",
      open: false,
      trying: false,
      id: "7",
      name: "sanji",
    },
    {
      src: "src/img/sanji-2.jpg",
      open: false,
      trying: false,
      id: "8",
      name: "sanji",
    },
    {
      src: "src/img/usopp-1.jpg",
      open: false,
      trying: false,
      id: "9",
      name: "usopp",
    },
    {
      src: "src/img/usopp-2.jpg",
      open: false,
      trying: false,
      id: " 10",
      name: "usopp",
    },
    {
      src: "src/img/zoro-1.jpg",
      open: false,
      trying: false,
      id: " 11",
      name: "zoro",
    },
    {
      src: "src/img/zoro-2.jpg",
      open: false,
      trying: false,
      id: " 12",
      name: "zoro",
    },
  ]);

  const [countTurns, setCountTurns] = useState(0);

  useEffect(() => {
    if (isTwoCardsOpen()) {
      setTimeout(() => handleTryingTwoCards(), 1000)
      setCountTurns( turns => turns + 1 )
    }
  }, [images]);

  const isTwoCardsOpen = () => {
    return images.filter((img) => img.trying).length == 2;
  };

  const flipCard = (id) => {
    setImages(
      images.map((img) => {
        if (img.id == id) return { ...img, trying: true };
        return img;
      })
    );
  };

  const cardsIsEqual = () => {
    // revisar
    const trying = images.filter((img) => img.trying);
    return trying[0].name == trying[1].name;
  };

  const setOpenAllCards = ( value ) => {
    setImages(images.map((img) => {
        return { ...img, open: value }
    }))
  }

  const shuffleCards = () => {
    const newImages = [...images];
    //console.log(newImages)
    for(let i = 0; i < images.length; i++) {
      const randomPosition = Math.floor(Math.random() * (images.length - 1));
      
      const aux = newImages[randomPosition];
      newImages[randomPosition] = newImages[i];
      newImages[i] = aux;
    }
    setImages(newImages);
  }

  const handleNewGameButton = () => {
    // não esquecer de embrarlhar
    shuffleCards()
    setOpenAllCards(false);
    setCountTurns(0)

  }

  const handleTryingTwoCards = () => {
    if (cardsIsEqual()) {
      setImages(
        images.map((img) => {
          if (img.trying) return { ...img, open: true, trying: false };
          return img;
        })
      );
    } else {
      setImages(
        images.map((img) => {
          return { ...img, trying: false };
        })
      );
    }
    
  };

  return (
    <>
      <h1 className="title">Title</h1>
      <button 
        className="new-game-button" 
        onClick={handleNewGameButton}>
          New Game
      </button>

      <div className="cards">
        {images.map((img) => (
          <Card
            src={img.open || img.trying ? img.src : cardBack}
            key={img.id}
            id={img.id}
            onClick={flipCard}
          />
        ))}
      </div>

      <p className="turns">Turns: {countTurns}</p>
    </>
  );
}

export default App;
