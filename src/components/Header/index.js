import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './../../containers/HomePage';
import VideoPage from './../../containers/VideoPage';

export default class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
            activeMenue: 'video',
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {

        const activeStyle={
            fontWeight: 'bold',
            color: 'red'
        }

        return (
            <Router>
                <div>
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Welcome, bro!</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem>
                              <NavLink 
                                exact to="/"

                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'red'
                                   }}

                                // style={this.state.activeMenue === 'home' ? activeStyle : {}} 
                                // onClick={this.setState({activeMenue: 'home'})}

                              >
                                Home
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink 
                                    to="/video"

                                    activeStyle={{
                                        fontWeight: 'bold',
                                        color: 'red'
                                       }}

                                    // style={this.state.activeMenue === 'video' ? activeStyle : {}} 
                                    // onClick={this.setState({activeMenue: 'video'})}
                                >
                                    Video
                                </NavLink>
                          </NavItem>
                          {/* <NavItem>
                              <NavLink to="#">Pricing</NavLink>
                          </NavItem> */}
                          {/* <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Dropdown</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">Another Action</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem> */}
                        </NavbarNav>
                        {/* <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav> */}
                    </Collapse>
                </Navbar>

                <Route exact path="/" component={HomePage}/>
                <Route path="/video" component={VideoPage}/>

                </div>

                

            </Router>
        );
    }
}