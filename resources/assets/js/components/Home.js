import React, {Component} from 'react'
import axios from 'axios'
export class Home extends Component{
    render(){
        var users=[
            {
                name:"Urip",
                address:"Jimbaran"
            },
            {
                name:"Wahyu",
                address:"Buleleng"
            },
            {
                name:"Nana",
                address:"Singapadu"
            },
        ]
        return(
            <div>
                <button className="btn btn-primary">Add</button>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,i) =>
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
        )
    }
}