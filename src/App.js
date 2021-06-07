import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import "./App.css";
import CountrySelector from "./components/CountrySelector";
import HightLight from "./components/HightLight";
import Summary from "./components/Summary";
import { sortBy } from "lodash";
import firebase from "firebase";
function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyD_eRDMgzxaksLnkYyWbC-POt3qGP6uGhg",
    authDomain: "covid-19-5cf33.firebaseapp.com",
    projectId: "covid-19-5cf33",
    storageBucket: "covid-19-5cf33.appspot.com",
    messagingSenderId: "205342102285",
    appId: "1:205342102285:web:079c2f34ec35230f401644",
    measurementId: "G-1VDZP6PG4V",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);
  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      const countries = sortBy(data, "Country");
      setCountries(countries);
      setSelectedCountryId("vn");
    });
  }, []);
  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };
  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);
  return (
    <div className="App">
      <h1>Theo dõi Covid</h1>
      <CountrySelector
        value={selectedCountryId}
        handleOnChange={handleOnChange}
        countries={countries}
      />
      <HightLight report={report} />
      <Summary countryId={selectedCountryId} report={report} />
    </div>
  );
}

export default App;
