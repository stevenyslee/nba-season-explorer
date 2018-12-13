import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NBAChart from './components/NBAChart.jsx';
// import Chart from './components/Chart.jsx';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/nba/')
    .then((response) => {
      console.log(response);
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (this.state.data ? 
      (<div>
        <NBAChart data={this.state.data} />
      </div>) : 
      (<div>
        <h3>Loading Data...</h3>
      </div>)
    );
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));
