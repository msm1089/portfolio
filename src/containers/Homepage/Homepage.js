import React, { Component, Fragment } from 'react';

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <p>
              <a
                className="App-link"
                href="https://devconnector.markmcpherson.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                DevConnector
              </a>
              Social network site built with React and Redux and using JWT
              authentication
            </p>
            <p>
              <a
                className="App-link"
                href="https://hobnob-api.markmcpherson.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hobnob API
              </a>
              <p>
                User directory API built with Node, Express for routing,
                Elasticsearch for storage and Swagger for documentation.
              </p>
              <p>
                I built this following the Test Driven Development paradigm. I
                was surprised that for a relatively small API, it is over 1000
                tests!!! Most of those are unit tests but also I have added
                integration tests. Test tooling includes Cucumber, Mocha and
                Istanbul.
              </p>
            </p>
            More to be added ...
          </header>
        </div>
      </Fragment>
    );
  }
}

export default Homepage;
