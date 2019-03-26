import React, { Component } from 'react'

export default class InfoModal extends Component {
  render() {
   const {infoData} = this.props;
    return (
     <div

     className="modal fade"
     id={"exampleModal"+ this.props.id}
     tabIndex="-1"
     role="dialog"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
   >
     <div className="modal-dialog" role="document">
       <div className="modal-content">
         <div className="modal-header">
           <h5 className="modal-title" id="exampleModalLabel">
             {infoData.name}
           </h5>
           <button
             type="button"
             className="close"
             data-dismiss="modal"
             aria-label="Close"
           >
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div className="modal-body">
          <h4> <span style={{color: 'gray'}}>Name:</span> {infoData.name}</h4>
          <h4> <span style={{color: 'gray'}}>citizenshipno:</span> {infoData.citizenshipno}</h4>
          <h4> <span style={{color: 'gray'}}>occupation:</span> {infoData.occupation}</h4>
          <h4> <span style={{color: 'gray'}}>issueddate:</span> {infoData.issueddate}</h4>
          <h4> <span style={{color: 'gray'}}>issuedbyndistrict:</span> {infoData.issuedbyndistrict}</h4>
          <h4> <span style={{color: 'gray'}}>gender:</span> {infoData.gender}</h4>
          <h4> <span style={{color: 'gray'}}>maritalstatus:</span> {infoData.maritalstatus}</h4>
          <h4> <span style={{color: 'gray'}}>P.dist:</span> {infoData.permanentdist}</h4>
          <h4> <span style={{color: 'gray'}}>P.vdcormunc:</span> {infoData.permanentvdcormunc}</h4>
          <h4> <span style={{color: 'gray'}}>P.ward:</span> {infoData.permanentward}</h4>
          <h4> <span style={{color: 'gray'}}>P.tole:</span> {infoData.permanenttole}</h4>
          <h4> <span style={{color: 'gray'}}>T.dist:</span> {infoData.tempdist}</h4>
          <h4> <span style={{color: 'gray'}}>T.vdcormunc:</span> {infoData.tempvdcormunc}</h4>
          <h4> <span style={{color: 'gray'}}>T.ward:</span> {infoData.tempward}</h4>
          <h4> <span style={{color: 'gray'}}>T.tole:</span> {infoData.temptole}</h4>
          <h4> <span style={{color: 'gray'}}>contactresidence:</span> {infoData.contactresidence}</h4>
          <h4> <span style={{color: 'gray'}}>contactoffice:</span> {infoData.contactoffice}</h4>
          <h4> <span style={{color: 'gray'}}>contactmobile:</span> {infoData.contactmobile}</h4>
          <h4> <span style={{color: 'gray'}}>email:</span> {infoData.email}</h4>
          <h4> <span style={{color: 'gray'}}>poboxno:</span> {infoData.poboxno}</h4>
       
         </div>
         <div className="modal-footer">
           <button
             type="button"
             className="btn btn-secondary"
             data-dismiss="modal"
           >
             Close
           </button>
         </div>
       </div>
     </div>
   </div>
    )
  }
}
