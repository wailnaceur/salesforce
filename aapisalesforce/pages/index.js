import Head from "next/head";
import Image from "next/image";
import React from "react";
import axios from "axios";
//import fetch from "node-fetch";
import styles from "../styles/Home.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      description: "",
      salary: "",
    };
    this.handlePost = this.handlePost.bind(this);
  }
  handleDescription(event) {
    /*this.setState((prevState) => {
      return { description: event.target.value, salary: this.state.salary };
    });*/
    this.setState((state, props) => ({
      description: event.target.value,
      salary: state.salary,
    }));
    console.log();
  }
  handleSalary(event) {
    this.setState((state, props) => ({
      description: state.description,
      salary: event.target.value,
    }));
  }

  async postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "same-origin", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: "follow", // manual, *follow, error
      //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log(response); // parses JSON response into native JavaScript objects
  }

  async handlePost() {
    this.postData("/api/post", {
      description__c: this.state.description,
      salary__c: this.state.salary,
    }).then((data) => {
      console.log(data); // JSON data parsed by data.json() call
    });
  }

  render() {
    return (
      <form method="post">
        <label >Description</label>
        <input
          type="text"
          name="description__c"
          onChange={(e) => {
            this.handleDescription(e);
          }}
        />

        <label >salary</label>
        <input
          type="text"
          name="salary__c"
          onChange={(e) => {
            this.handleSalary(e);
          }}
        />

        <input type="button" value="submit" onClick={this.handlePost} />
      </form>
    );
  }
}

export default Form;
