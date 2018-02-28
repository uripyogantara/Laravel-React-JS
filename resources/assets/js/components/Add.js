import React, {Component} from 'react'
import axios from 'axios'
export class Add extends Component{
    constructor(props){
        super(props)
        
        this.state ={
            name:'',
            address:''
        }

        this.setName=this.setName.bind(this)
        this.setAddress=this.setAddress.bind(this)
        this.submit=this.submit.bind(this)
    }
    setName(e){
        this.setState({
            name:e.target.value
        })
    }

    setAddress(e){
        this.setState({
            address:e.target.value
        })
    }

    submit(e){
        e.preventDefault();
        
        const mahasiswa={
            name:this.state.name,
            address:this.state.address,
        }

        // console.log(mahasiswa)
        axios.post('/api/mahasiswa',mahasiswa).then(function(response){
            console.log('sukses')
        }).catch(function(error){
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.setName}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Address" onChange={this.setAddress}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        )
    }
}

