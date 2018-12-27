import React, { Component } from 'react'
import EditUser from './EditUser';


export default class Searchform extends Component {
    constructor( Props) {
        super( Props);
        this.state = {
            Giatritrunggian:"",
            UserObj:{}
        }
        
    }

    getUserEditInfo = (info)=>{
        // console.log('da ket noi')
        this.setState({
            UserObj:info
        })
        this.props.getUserEditInfoApp(info);
    }
    isShowEditForm = ()=>{
        if(this.props.editUserStaTus === true){
           return  <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)} editUserObject={this.props.editUserObject} changeEditUserStaTus={()=>this.props.changeEditUserStaTus()} />
        }
    }
    
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({Giatritrunggian:event.target.value})
        this.props.checkConnectProps(this.state.Giatritrunggian)
    }
    
  
    hienThiNut = ()=>{
        if(this.props.hienThiForm === true){
            return  <div className="btn btn-block btn-outline-secondary" onClick = {() => this.props.ketNoi()} >Đóng lại</div> 
        }
        else{
            return <div className="btn btn-block btn-outline-info " onClick = {() => this.props.ketNoi()}>Thêm mới</div>
        }
    }
  render() {
      console.log(this.state.UserObj)
    return (
        <div className="col-12">
            {this.isShowEditForm()}
            <div className="form-group">
            <div className="btn-group">
                <input type="text" onChange = {(event) => this.isChange(event)}  className="form-control" placeholder="nhap ten can tim" style={{width: 638}} />
                <div className="btn btn-info" onClick ={(dl) => this.props.checkConnectProps(this.state.Giatritrunggian)}>Tìm</div> 
            </div>
            <div className="btn-group1">
               {this.hienThiNut()}
                
            </div>
            </div>
            <hr/>
      </div>
      
    )
  }
}
