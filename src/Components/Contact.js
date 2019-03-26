import React, { Component } from "react";

import { firebaseLooper } from "../helpers";

import firebase from "firebase/app";

const initialTableTitle = [
  "S.N",
  "Email",
  "First Name",
  "Last Name",
  "Phone Number",
  "Subject",
  "Message",
  "Action"
];
export default class Application extends Component {
  state = {
    data: [],
    loading: true,
    initialTableTitle: initialTableTitle
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

  handleDelete = (id) => {
    firebase.database().ref('contacts').child(id).remove();
    window.location.reload()
  }

  render() {
    console.log(this.state);
    return (
      <div className="row list-view">
        <table className="table table-hover table-striped " id="data-table">
          <thead>
            <tr>
              {this.state.initialTableTitle.map((title, i) => (
                <th key={i} scope="col" onClick={() => this.onSort("id")}>
                  {title}
                  <i
                    id="id-arrow-up"
                    className="ion-android-arrow-up"
                    style={{ display: "none" }}
                  />
                  <i id="id-arrow-down" className="ion-android-arrow-down" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((contact, i) => {
              return (
                <tr key={contact.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{contact.email}</td>
                  <td>{contact.firstname}</td>
                  <td>{contact.lastname}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=> this.handleDelete(contact.id)}>Delete</button>                      
                  </td>
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
