import { Grid } from "@mui/material";
import React from "react";
import { Awards } from "../assets";
import { footerLink, iconsService } from "../utils/dummy";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="widget">
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <h2 className="widget__title">Our Awards</h2>
              <p>
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
              </p>
              <img
                src={Awards}
                alt="Awards"
                className="widget__image"
              />
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <h2 className="widget__title">Contact Info</h2>
              <p>
                <i className="ti ti-mobile"></i> 1-567-124-44227
              </p>
              <p>
                <i className="ti ti-location-pin"></i> 184 Main Street East Perl
                Habour 8007
              </p>
              <p>
                <i className="ti ti-alarm-clock"></i> Mon - Sat 8.00 - 18.00
                Sunday CLOSED
              </p>
              <div className="icons__service">
                {iconsService.map((item, index) => {
                  return (
                    <div
                      className="icons__service-box"
                      key={index}
                      style={{ backgroundColor: item.backgroundColor }}
                    >
                      <i className={`ti ${item.icon}`}></i>
                    </div>
                  );
                })}
              </div>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <h2 className="widget__title">Recent Trips</h2>
              <Grid container spacing={1} style={{ marginTop: "25px" }}>
                {Array.from(Array(6)).map((_, index) => (
                  <Grid item xs={4} key={index}>
                    <img
                      src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                      alt={index}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="copyright">
        <div className="inner__bottom">
          <span>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</span>
          <div className="inner__bottom-links">
            {footerLink.map((item, index) => {
              return <span key={index}>{item.textDisplay}</span>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
