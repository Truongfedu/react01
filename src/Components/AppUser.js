import React, { Component } from 'react'

export default
 class AppUser extends Component {
  constructor(Props) {
    super( Props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      Permission:""
    }
  }
  isChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
  
    this.setState({
      [name]:value
    })
    // var item = {};
    // item.id=this.state.id;
    // item.tel=this.state.id;
    // item.name=this.state.name;
    // item.Permission=this.state.Permission;
    
    // console.log(item);

  }


    kiemtraTrangThai = () =>{
        if(this.props.hienThiForm === true){
            return( <div className="col">
            <form method="post">
              <div className="card border-primary mb-3 mt-2">
            <div className="card-header  text-center">Thêm mới user vào hệ thống</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input type="text" name="name" onChange = {(event)=>this.isChange(event)} className="form-control"  placeholder="Tên user" />
              </div>
              <div className="form-group">
                <input type="text" name="tel" onChange = {(event)=>this.isChange(event)}  className="form-control"  placeholder="Điện thoại" />
              </div>
              <div className="form-group">
                <select className="custom-select"  onChange = {(event)=>this.isChange(event)} name="Permission" required>
                  <option value>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Mordator</option>
                  <option value={3}>Normal User</option>
                </select>
              </div>
              <input type="reset" className="btn btn-block btn-primary" onClick={()=>this.props.add(this.state.name,this.state.tel,this.state.Permission)} value="Thêm mới" />
            </div>
            </div> 
            </form>
            </div> )
        }
    }
  render() {
    // console.log(this.state);
    return (
       
        <div>
       {this.kiemtraTrangThai()}
           
        </div>
      
      
    )
  }
}
// @flow strict

