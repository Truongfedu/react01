import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Searchform from './Searchform';
import DataTable from './DataTable';
import AppUser from './AppUser';
import DataUser from './DataDulieu.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
 constructor(Props) {
   super( Props);
   this.state = {
     hienThiForm: true,
     data:[],
     searchText:"",
     editUserStaTus:false,
     editUserObject:{},
   }
 }
  componentWillMount() {
    //Kiem tra
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var templete = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data:templete
      })
    }
  }
    
  

 getUserEditInfoApp = (info) => {
  //  console.log('du lieu da sua');
    this.state.data.forEach((value,key) => {
        if(value.id === info.id){
          value.name = info.name;
          value.tel = info.tel;
          value.Permission = info.Permission;
      
   
     }
   })
   localStorage.setItem('userData',JSON.stringify(this.state.data));

 }

 changeEditUserStaTus = () =>{
    this.setState({
      editUserStaTus: !this.state.editUserStaTus
    });
 }

getNewuserData = (name,tel,Permission )=>{
    var item = {};
    item.id=uuidv1();
    item.name=name;
    item.tel=tel;
    item.Permission=Permission
    var items = this.state.data;
    items.push(item);
 this.setState({
   data:items
 })
 localStorage.setItem('userData',JSON.stringify(items));
  
}

 getTextSearch = (dl)=> {
   this.setState({
     searchText:dl
   });
  
  
 }
 doiTrangThai = () =>{
   this.setState({hienThiForm: !this.state.hienThiForm})

   
  } 
  editUser = (user) =>{
    // console.log('ok roi');
    // console.log(user);
    this.setState({
      editUserObject: user
    });

  }

 
  // thongBao = () =>{
  //   alert('ket noi thanh cong');
  // }
  deleteUser=(idUser)=>{
    var templeData = this.state.data;
    templeData = templeData.filter(item => item.id !== idUser )
    this.setState({
      data:templeData
    })
    localStorage.setItem('userData',JSON.stringify(templeData))
  }
  render() {

   
    var ketqua = [];
    this.state.data.forEach((item)=> {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    });

    // console.log(ketqua);
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
              <div className="row">
                <Searchform getUserEditInfoApp ={(info)=>this.getUserEditInfoApp(info)} editUserObject={this.state.editUserObject} changeEditUserStaTus={()=>this.changeEditUserStaTus()} editUserStaTus = {this.state.editUserStaTus} checkConnectProps={(dl) => this.getTextSearch(dl)} ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>
                <DataTable deleteUser = {(idUser)=>this.deleteUser(idUser)} changeEditUserStaTus = {() => {this.changeEditUserStaTus()}}  editFun = {(user) => this.editUser(user)} dataUserProps={ketqua}/>
                <AppUser add = {(name,tel,Permission)=>this.getNewuserData(name,tel,Permission)} hienThiForm={this.state.hienThiForm}/>

              </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;

