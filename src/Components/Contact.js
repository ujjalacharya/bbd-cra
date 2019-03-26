import React, { Component } from "react";

import { firebaseLooper } from "../helpers";

import firebase from "firebase/app";
export default class Application extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      firebase
        .database()
        .ref("contacts")
        .once("value", data => {
          this.setState({ data: firebaseLooper(data), loading: false });
        });
    }, 0);
  }

  onSort = id => {
    console.log(id);
  };

  render() {
    console.log(this.state);
    return (
      <div className="row list-view">
        <table className="table table-hover table-striped " id="data-table">
          <thead>
            <tr className="tbl-title">
              <th scope="col" onClick={() => this.onSort("id")}>
                S.N.
                <i
                  id="id-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="id-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("title")}>
                Email
                <i
                  id="title-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="title-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("address")}>
                First Name
                <i
                  id="address-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="address-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("price")}>
                Last Name
                <i
                  id="price-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="price-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("status")}>
                Phone
                <i
                  id="status-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="status-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("category")}>
                Subject
                <i
                  id="category-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i
                  id="category-arrow-down"
                  className="ion-android-arrow-down"
                />
              </th>
              <th scope="col" onClick={() => this.onSort("type")}>
                Message
                <i
                  id="type-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="type-arrow-down" className="ion-android-arrow-down" />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((property, i) => {
              return (
                <tr key={property.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{property.email}</td>
                  <td>{property.firstname}</td>
                  <td>{property.lastname}</td>
                  <td>{property.phone}</td>
                  <td>{property.subject}</td>
                  <td>{property.message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.loading && (
          <div className="loading-image">
            <img
              src="/img/loading.gif"
              alt=""
            />
          </div>
        )}
      </div>
    );
  }
}