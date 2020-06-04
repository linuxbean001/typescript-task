import React from 'react';
import { Button, Modal, InputGroup, FormControl, Table } from 'react-bootstrap';
import './User.css';

interface ModelStatus {
    show: Boolean;
    name: String;
    email: String;
    phone: String;
    address: String;
    userList: any;
}
class User extends React.Component<any, ModelStatus> {

    constructor(props: any) {
        super(props)
        this.state = { show: false, name: '', email: '', phone: '', address: '', userList: [] };
    }

    componentDidMount() {

    }
    modelOpen = () => {
        this.setState({ show: true });
    }

    modelClose = () => {
        this.setState({ show: false });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        const value = target.value
        const name = target.name

        if (name == 'name') {
            this.setState({
                name: value,
            })
        }
        if (name == 'email') {
            this.setState({
                email: value,
            })
        }
        if (name == 'phone') {
            this.setState({
                phone: value,
            })
        }
        if (name == 'address') {
            this.setState({
                address: value,
            })
        }
    }

    save = () => {
        let userList = this.state.userList
        const userVo = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address
        }
        userList.push(userVo)
        this.setState({
            userList: userList
        })
        this.modelClose()
    }

    deleteUser = (index: any) => {

        let userList = this.state.userList;
        userList.splice(index, 1)
        this.setState({
            userList: userList
        })
    }
    render() {
        return (
            <div className="containers">
                <div className="add-user-button" >
                    <Button variant="primary" onClick={this.modelOpen}>Add User</Button>

                    <Modal show={this.state.show} onHide={this.modelClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-describedby="basic-addon1"
                                    type="input"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    type="input"
                                    name="email"
                                    onChange={this.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Phone"
                                    aria-label="Phone"
                                    aria-describedby="basic-addon1"
                                    type="input"
                                    name="phone"
                                    onChange={this.handleChange}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Address"
                                    aria-label="Address"
                                    aria-describedby="basic-addon1"
                                    type="input"
                                    name="address"
                                    onChange={this.handleChange}
                                />
                            </InputGroup>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.modelClose}>
                                Close
          </Button>
                            <Button variant="primary" onClick={this.save}  >
                                Save
          </Button>
                        </Modal.Footer>
                    </Modal>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userList.map((value: any, index: any) => (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.address}</td>
                                    <td><Button variant="secondary" onClick={() => this.deleteUser(index)}>
                                        Delete
          </Button></td>
                                </tr>

                            ))}
                        </tbody>
                    </Table>
                </div>

            </div>
        );
    }
}
export default User;
