// @ts-nocheck
import React from "react";
import { Footer, Header } from "../layouts";
import {
  CardArticles,
  CardTrips,
  Heading,
  OptionMenu,
  Service,
  TourPopular,
} from "../components";
import { video } from "../assets";
import { popularData, serviceData } from "../utils/dummy";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import styled from "@emotion/styled";

const options = ["Option 1", "Option 2"];

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#FF4A52",
  paddingTop: "8px",
  paddingBottom: "8px",
  width: "100%",
}));

const Home = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [showInput, setShowInput] = React.useState(false);

  return (
    <>
      {/* Header components */}
      <Header />

      {/* Hero */}
      <div className="hero">
        <div className="overlay"></div>
        <video src={video} type="video/mp4" muted autoPlay loop />
        <div className="hero__content">
          <Heading
            title={"Where do you want to go?"}
            tagline={"Trips, experiences, and places. All in one service."}
            textColorTitle={"text-white"}
            textColorTagline={"text-white"}
          />
          <form action="">
            <Grid
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 4, sm: 12, md: 12 }}
            >
              <Grid item xs={12} sm={3} md={3}>
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={options}
                  renderInput={(params) => <TextField {...params} />}
                  popupIcon={<i className="ti ti-search" />}
                />
              </Grid>
              <Grid item xs={12} sm={3} md={3}>
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={options}
                  renderInput={(params) => <TextField {...params} />}
                  popupIcon={<i className="ti ti-calendar" />}
                />
              </Grid>
              <Grid item xs={12} sm={3} md={3}>
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={options}
                  renderInput={(params) => <TextField {...params} />}
                  popupIcon={<i className="ti ti-exchange-vertical" />}
                />
              </Grid>
              <Grid item xs={12} sm={3} md={3}>
                <ColorButton variant="contained">Search</ColorButton>
              </Grid>
              {showInput && (
                <>
                  <Grid item xs={12} sm={3} md={3}>
                    <Autocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options}
                      renderInput={(params) => <TextField {...params} />}
                      popupIcon={<i className="ti ti-angle-down" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} md={3}>
                    <Autocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options}
                      renderInput={(params) => <TextField {...params} />}
                      popupIcon={<i className="ti ti-angle-down" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} md={3}>
                    <Autocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options}
                      renderInput={(params) => <TextField {...params} />}
                      popupIcon={<i className="ti ti-money" />}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </form>
          <div style={{ textAlign: "left", marginTop: "12px" }}>
            <span
              className="show__input"
              onClick={() => setShowInput(!showInput)}
            >
              {showInput ? (
                <i className="ti ti-angle-up"></i>
              ) : (
                <i className="ti ti-angle-down"></i>
              )}
              Advanced search
            </span>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="container">
        <Heading
          title={"Popular Destinations"}
          tagline={"World's best tourist destinations"}
          className={"mt-70 pb-50"}
        />

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {popularData.map((item, index) => {
            return (
              <Grid item xs={12} sm={3} md={3}>
                <TourPopular
                  key={index}
                  image={item.image}
                  textDisplay={item.textDisplay}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>

      {/* Best Value Trips */}
      <div className="container">
        <Heading
          title={"Best Value Trips"}
          tagline={"Best offers trips from us"}
          className={"mt-70 pb-50"}
        />
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <CardTrips
                image={
                  "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                }
                price={"4.00"}
                title={"French Autumn"}
                desc={"City Tours, Urban"}
                rate={4.5}
                view={4}
                day={10}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Why Choose Us */}
      <div className="container">
        <Heading
          title={"Why Choose Us"}
          tagline={"Here are reasons you should plan trip with us"}
          className={"mt-70 pb-50"}
        />
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {serviceData.map((item, index) => {
            return (
              <Grid item md={4} sm={4} xs={12}>
                <Service
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>

      {/* banner  */}
      <div className="backgroud__banner"></div>

      {/* Articles & Tips */}
      <div className="container">
        <Heading
          title={"Articles & Tips"}
          tagline={"Explore some of the best tips from around the world"}
          className={"mt-70 pb-50"}
        />

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <CardArticles />
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Footer components */}
      <Footer />

      {/* Menu Option */}
      <OptionMenu />
    </>
  );
};

export default Home;
