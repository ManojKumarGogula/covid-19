import React, { useState, useEffect } from "react";
// import "./App.css";

const App = () => {
  const [continents, setContinents] = useState([]);
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("Asia");
  const [viewValue, setViewValue] = useState();
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://covid-193.p.rapidapi.com/statistics",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
            "X-RapidAPI-Key":
              "ded26d440amshb59d624a4c642dap1735eejsn2f91a77d170b", // Replace with your RapidAPI access key
          },
        }
      );
      const data = await response.json();
      filterCountries(data.response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const fetchCountryData = async () => {
    try {
      const url = "https://covid-193.p.rapidapi.com/history?country=india";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ded26d440amshb59d624a4c642dap1735eejsn2f91a77d170b",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const timeout = setTimeout(() => {
      fetchCountryData();
    }, 2000);

    setTimeoutId(timeout);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  };

  const filterCountries = (data) => {
    let casesData = {};
    data.map((item, index) => {
      if (casesData[item.continent])
        casesData[item.continent] = [...casesData[item.continent], item];
      else casesData[item.continent] = [item];
    });
    setContinents(casesData);
  };

  const renderCountry = (continent) => {
    if (!continent || !continents[continent]) return;
    return continents[continent].map((li) => (
      <div
        className={`my-[4vh] cursor-pointer w-[5/6] ${
          viewValue?.country == li.country && "text-20"
        }`}
        onClick={() => setViewValue(li)}
      >
        {li.country}
      </div>
    ));
  };
  const renderBar = () => {
    return (
      <div className="opacity-50 bg-bluebg w-[6vw] h-[2vh] rounded-8  animate-pulse"></div>
    );
  };
  const renderCard = () => {
    return (
      <div className="w-[80%] m-auto">
        <div className="flex mb-[4vh]">{viewValue?.country || renderBar()}</div>
        <div className="grid grid-cols-2">
          <div>Population: </div>
          {viewValue?.population || renderBar()}
        </div>
        <div className="grid grid-cols-2">
          <div>Total: </div>
          {viewValue?.cases?.total || renderBar()}
        </div>
        <div className="grid grid-cols-2">
          <div>Active: </div>
          {viewValue?.cases?.active || renderBar()}
        </div>
        <div className="grid grid-cols-2">
          <div>Critical: </div>
          {viewValue?.cases?.critical || renderBar()}
        </div>
        <div className="grid grid-cols-2">
          <div>Recovered: </div>
          {viewValue?.cases?.recovered || renderBar()}
        </div>
        <div className="grid grid-cols-2">
          <div>New: </div>
          {viewValue?.cases?.new || renderBar()}
        </div>
        <div className="grid grid-cols-2">
          <div>critical: </div>
          {viewValue?.cases?.critical || renderBar()}
        </div>
        <div className="grid grid-cols-2">
          <div>Death: </div>
          {viewValue?.deaths?.total || renderBar()}
        </div>
        <div className="grid grid-cols-2">
          <div>Tests: </div>
          {viewValue?.tests?.total || renderBar()}
        </div>
      </div>
    );
  };
  const renderLayout = () => {
    if (search) return renderCard();

    return (
      <div className="grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-40">
        <div className="w-[15vw]">
          <div className="font-600">Continent</div>
          <div className="overflow-y-auto h-[40vh] ">
            {Object.keys(continents).map((item) => {
              return (
                <div
                  className={`my-[4vh] w-[5/6] ${
                    continent == item && "text-20"
                  }`}
                  onClick={() => setContinent(item)}
                >
                  <div className="hover:text-hoverText">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="font-600">Countries</div>
          <div className="h-[40vh] w-[20vw] overflow-y-auto">
            {renderCountry(continent)}
          </div>
        </div>
        <div>
          <div className=" flex justify-center w-[20vw] h-[40vh] shadow-10 hover:scale-110">
            {renderCard()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 w-full flex items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">COVID-19 Reports</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by country"
          className="border w-[20vw] bg-input bg-gradient-to-bl p-4 text-bluebg font-600"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="shadow-10 rounded-8  w-full h-full md:w-[80vw] md:h-[60vh] xl:w-[80vw] xl:h-[60vh] flex justify-center items-center mx-auto mt-[4vh]">
        {renderLayout()}
      </div>
    </div>
  );
};

export default App;
