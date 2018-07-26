import React, {Component} from "react";
import api from "../api/api";




class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        
    }
    
    componentDidMount() {
        this.loadUsers();
    }
    
    loadUsers = () => {
        api.getAllUsers()
        .then(
            res => {
                this.setState({ users: res.data })
                console.log(res.data)
            }
        )
        
        .catch(err => console.log(err));
        
    };

    render() {
        return (
            <div>
                {
                    this.state.users.map((user) =>
                        <pre>{JSON.stringify(user)}</pre>
                    )
                };
            </div>
        );
    }
}

export default AllUsers;