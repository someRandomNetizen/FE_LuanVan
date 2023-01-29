import axios from "axios";
import React, {useState, useEffect} from "react";

import './Driver.css';
import { get } from "../../crud/auth.crud";
import { useMemo} from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import FilterResults from 'react-filter-search';
import { Component, SearchResults } from "react";


  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        value: ''
      };
    }
    componentWillMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({ data: json }));
    }
    handleChange = event => {
      const { value } = event.target;
      this.setState({ value });
    };
    render() {
      const { data, value } = this.state;
      return (
        <div>
          <input type="text" value={value} onChange={this.handleChange} />
          <SearchResults
            value={value}
            data={data}
            renderResults={results => (
              <div>
                {results.map(el => (
                  <div>
                    <span>{el.name}</span>
                    <span>{el.email}</span>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
      );
    }
  }