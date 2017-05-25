import React from 'react';

export default class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      minCount: 0
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount(){
    this.props.getData();
  }

  updateSearch(e){
    let number;
    if(e.target.value === ""){
      number = 0;
    } else {
      number = parseInt(e.target.value);
    }

    this.setState({ minCount: number });
  }

  render(){
    let data = this.props.data;
    let content;
    let keys = Object.keys(data);

    if(keys.length > 0){
      let that = this;
      let filteredKeys = keys.filter(function(key){
        return data[key]["repeats"] > that.state.minCount;
      });
      content = filteredKeys.map((key, idx) =>
        <li key={idx} className="pair">
          <div className="word">{key}</div>
          <div className="repeats">{data[key]["repeats"]}</div>
        </li>
      );
    } else {
      content = (<div className="loader">Loading...</div>);
    }

    return(
      <div className="main">
        <ul className="list">
          <li className="pair head">
            <div className="word head">Word</div>
            <div className="repeats head">Occurences</div>
          </li>

          <li>
            <input
              type="text"
              className = "searchBar"
              value = {this.state.search}
              onChange= {this.updateSearch}
              placeholder = "Filter by minimum count..."
            ></input>
          </li>

          {content}
        </ul>
     </div>
    )
  }
}
