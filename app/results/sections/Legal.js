import React from 'react';

const logoResidencyProgram = '/static/icons/Logo_ResidencyProgram.svg';

import * as COLORS from '../../shared/style/colors';
import * as METRICS from '../../shared/style/metrics';

class Legal extends React.PureComponent {

  static propTypes = {
    cities: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  render() {
    return (
      <div className="LegalSection">
        <div className="Wrapper">
          <div className="ContainerLeft Container">
            <h3 className="SubTitle">
              What the Street!? is the<br />outcome of the
            </h3>
            <h2 className="Title">
              <img alt="Logo of Residency Program" src={logoResidencyProgram} />
            </h2>
            <p className="Label">
              with
            </p>
            <div className="NameBox">
              <p className="Name">
                Stephan Bogner
              </p>
              <p className="Position">
                Resident Artist
              </p>
              <p className="Name">
                Micheal Szell
              </p>
              <p className="Position">
                Resident Researcher
              </p>
            </div>
            <p className="Label">
              about
            </p>
            <div className="NameBox">
              <p className="Name">
                The Residency Program<br />Technical Making of What the Street!?<br />Source Code
              </p>
            </div>
          </div>
          <div className="ContainerRight Container">
            <p className="Label">
              Concept and Coding
            </p>
            <p className="Name">
              Micheal Szell<br />Stephan Bogner
            </p>
            <p className="Label">
              Direction
            </p>
            <p className="Name">
              Benedikt Groß
            </p>
            <p className="Label">
              Website Implementation
            </p>
            <p className="Name">
              Tobias Lauer
            </p>
            <p className="Label">
              Visual Design
            </p>
            <p className="Name">
              Anagrama
            </p>
            <p className="Label">
              Extended Team
            </p>
            <p className="Name">
              Tilman Häuser<br />Raphael Reimann<br />Daniel Schmid<br />Joey Lee
            </p>
            <p className="Label">
              City Data Wrangling Assistant
            </p>
            <p className="Name">
              Johannes Wachs
            </p>
            <p className="Label">
              Data Sources
            </p>
            <p className="Name">
              OpenStreetMap
            </p>
            <p className="Text">
              <a href="#">OpenStreetMap</a> is a free alternative to services like Google Maps. Please contribute, if you notice poor data quality.
            </p>
            <p className="Text">
              <a href="#">Modal Share</a> for
              {this.props.cities.map((city, i) => i === this.props.cities.length - 1 ? (<a href={`/${city.slug}`} key={i}>{city.name}.</a>) : (<a href={`/${city.slug}`} key={i}>{city.name}, </a>))}
            </p>
            <p className="Text">
              Emoji provided free by <a href="#">EmojiOne.</a>
            </p>
          </div>
        </div>
        <style jsx>{`
          .LegalSection {
            display: flex;
            justify-content: center;
            background-color: ${COLORS.LegalsSectionBackgroundColor};
            color: ${COLORS.ColorForegroundText};
            overflow: hidden;
          }

          .Wrapper {
            width: ${METRICS.MetricsContentWidth};
            padding: 0 ${METRICS.MetricsSectionPadding};
            padding-top: ${METRICS.MetricsSectionPadding};
            display: flex;
            align-items: flex-start;
          }

          .ContainerLeft.Container {
            margin-top: 150px;
            flex-basis: 50%;
            margin-left: 80px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
          }

          .ContainerLeft .NameBox {
            width: 80%;
            margin-bottom: 55px;
          }

          .ContainerLeft .Title {
            font-size: 47px;
            font-weight: 400;
            margin: 0 0 ${METRICS.MetricsSectionPadding} 0;
            width: 100%;
          }

          .ContainerLeft .SubTitle {
            font-size: 23px;
            line-height: 27px;
            font-weight: 400;
            margin: 0;
            color: ${COLORS.ColorForegroundGrey};
            width: 100%;
            padding-left: 20%;
            margin-bottom: 15px;
          }

          .ContainerLeft .Label {
            font-size: 23px;
            line-height: 23px;
            margin: 0;
            color: ${COLORS.ColorForegroundGrey};
            width: 20%;
            font-family: 'LarsseitLight';
            text-align: right;
            padding-right: 20px;
          }

          .ContainerLeft .Position {
            font-size: 13px;
            line-height: 18px;
            margin: 0 0 10px 0;
            color: ${COLORS.ColorForegroundText};
          }

          .ContainerRight.Container {
            flex-basis: 50%;
            margin-left: 80px;
            padding: ${METRICS.MetricsSectionPadding};
            padding-bottom: 0;
            background-color: ${COLORS.ColorWhite};
          }

          .ContainerRight .Label {
            font-size: 13px;
            line-height: 18px;
            font-weight: 200;
            margin: 20px 0 0 0;
            color: ${COLORS.ColorForegroundGrey};
          }

          .ContainerRight .Label:first-child {
            margin: 0;
          }

          .ContainerRight .Text {
            font-size: 13px;
            line-height: 18px;
            font-weight: 200;
            margin: 0 0 20px 0;
            color: ${COLORS.ColorForegroundGrey};
          }

          .ContainerRight .Text a:active,
          .ContainerRight .Text a:focus,
          .ContainerRight .Text a:hover,
          .ContainerRight .Text a:link,
          .ContainerRight .Text a:visited {
            color: ${COLORS.ColorBlack};
            font-weight: 500;
            text-decoration: none;
          }

          .Name {
            font-size: 23px;
            line-height: 27px;
            margin: 0 0 0 0;
          }

        `}</style>
      </div>
    );
  }
}

export default Legal;