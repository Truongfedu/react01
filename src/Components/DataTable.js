import React, { Component } from 'react'
import DataTableRow from './DataTableRow';

export default class DataTable extends Component {
  mapping = () => this.props.dataUserProps.map((value,key) => (
    <DataTableRow deleteButtonClick = {(idUser)=>this.deleteButtonClick(idUser)} changeEditUserStaTus ={()=>this.props.changeEditUserStaTus()} editFunClick = {(user) => this.props.editFun(value)} id={value.id} UserName ={value.name}  key={key} stt={key+1} tel={value.tel} Permission={value.Permission}/>
  ))

  deleteButtonClick = (idUser)=>{
    this.props.deleteUser(idUser);
  
  }
  render() {
    // console.log(this.props.dataUserProps)
    return (
        <div className="col">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Diện Thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            
          
          {this.mapping()}
          </tbody>
        </table>
      </div>
      
    )
  }
}
