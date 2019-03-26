import React, { Component } from "react";

import { firebaseLooper } from "../helpers";

import firebase from "firebase/app";
export default class Contact extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      firebase
        .database()
        .ref("apply")
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
                Name
                <i
                  id="title-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="title-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("address")}>
                Email
                <i
                  id="address-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="address-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("price")}>
                Occupation
                <i
                  id="price-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="price-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("status")}>
                Gender
                <i
                  id="status-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="status-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("status")}>
                Mobile
                <i
                  id="status-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="status-arrow-down" className="ion-android-arrow-down" />
              </th>
              <th scope="col" onClick={() => this.onSort("status")}>
                Actions
                <i
                  id="status-arrow-up"
                  className="ion-android-arrow-up"
                  style={{ display: "none" }}
                />
                <i id="status-arrow-down" className="ion-android-arrow-down" />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((property, i) => {
              return (
                <tr key={property.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{property.name}</td>
                  <td>{property.email}</td>
                  <td>{property.occupation}</td>
                  <td>{property.gender}</td>
                  <td>{property.contactmobile}</td>
                  <td style={{ padding: "1rem" }}>
                    <button
                      className="btn btn-info info-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      View
                    </button>

                    <button className="btn btn-danger">Delete</button>
                  </td>

                  {/* <td>    
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td> */}

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.loading && (
          <div className="loading-image">
            <img src="/img/loading.gif" alt="" />
          </div>
        )}
      </div>
    );
  }
}
