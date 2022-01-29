import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainBoard from "./Components/MainBoard";
import unsplash from "./api/unsplash";

function App() {
  const [pins, setNewPins] = useState([]);


  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [
        ...results,
        ...pins
      ]
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    })
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["ocean", "Tokyo", "dogs", "cats","pencils","weather", "bags"]
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          console.log(results);
          pinData = pinData.concat(results)
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      <MainBoard pins={pins}/>
    </div>
  );
}

export default App;
