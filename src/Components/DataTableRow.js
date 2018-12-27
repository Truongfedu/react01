import React, { Component } from 'react'

export default class DataTableRow extends Component {
    PermissionShow = () =>{
        if(this.props.Permission === 1){
            return "Admin"
        }
        else if(this.props.Permission === 2){
            return "Mordator"
        }
        else{
            return "Normal User"
        }
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStaTus();
    }
    deleteButtonClick=(idUser)=>{
        this.props.deleteButtonClick(idUser);
        
    }
  render() {
      //this.props.editFunClick
    return (
        <tr>
              <td>{this.props.stt}</td>
              <td>{this.props.UserName}</td>
              <td>{this.props.tel}</td>
              <td>{this.PermissionShow()}</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-warning sua" onClick = {() =>this.editClick()}><i className="fa fa-edit">Sửa</i></div>
                  <div className="btn btn-danger" onClick = {(idUser)=>this.deleteButtonClick(this.props.id)}>
                  <i className="fa fa-delete">Xóa</i></div>
                </div>
              </td>
            </tr>
    )
  }
}
