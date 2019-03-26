import React, { Component } from "react";

import { firebaseLooper } from "../helpers";

import firebase from "firebase/app";
import InfoModal from "./shared/InfoModal";

const initialTableTitle = [
    "S.N", "Name", "Email", "Occupation", "Gender", "Mobile", "Actions"
]
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
        .ref("apply")
        .once("value", data => {
          this.setState({ data: firebaseLooper(data), loading: false });
        });
    }, 0);
  }

  onSort = id => {
    console.log(id);
  };

  handleDelete = (id) => {
    firebase.database().ref('apply').child(id).remove();
    window.location.reload()
  }

  render() {
    console.log(this.state);
    return (
      <div className="row list-view">
        <table className="table table-hover table-striped " id="data-table">
          <thead>
            <tr className="tbl-title">
             
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
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.occupation}</td>
                  <td>{contact.gender}</td>
                  <td>{contact.contactmobile}</td>
                  <td style={{ padding: "1rem" }}>
                    <button
                      className="btn btn-info info-btn"
                      data-toggle="modal"
                      data-target={"#exampleModal"+ contact.id}
                    >
                      View More
                    </button>

                    <button className="btn btn-danger" onClick={()=> this.handleDelete(contact.id)}>Delete</button>
                  </td>
                  <InfoModal infoData={contact} id={contact.id}/>
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
