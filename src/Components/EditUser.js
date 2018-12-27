import React, { Component } from 'react'

export default class editUser extends Component {
    constructor(Props) {
        super( Props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name,
            tel: this.props.editUserObject.tel,
            Permission: this.props.editUserObject.Permission
        }
    }
    saveButton=()=>{
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;

        this.props.changeEditUserStaTus();
        
        this.props.getUserEditInfo(info);
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    
       
    
  render() {
     
    return (
        <div className = 'row'>
                    <div className="col">
                    <form method="post">
                    <div className="card text-white bg-warning mb-3 mt-2">
                    <div className="card-header  text-center">Sửa thông tin user</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input onChange = {(event)=>this.isChange(event)} defaultValue={this.props.editUserObject.name} type="text" name="name"  className="form-control"  placeholder="Tên user" />
                    </div>
                    <div className="form-group">
                        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.editUserObject.tel} type="text" name="tel"  className="form-control"  placeholder="Điện thoại" />
                    </div>
                    <div className="form-group">
                        <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.editUserObject.Permission} className="custom-select" name="Permission" required>
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Mordator</option>
                        <option value={3}>Normal User</option>
                        </select>
                    </div>
                    <input type="button" className="btn btn-block btn-danger" value="Luu" onClick={()=>this.saveButton()} />
                    </div>
                    </div> 
                    </form>
                </div> 
            </div>
    )
  }
}
