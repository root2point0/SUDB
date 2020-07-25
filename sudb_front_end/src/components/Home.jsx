import React, {Component} from 'react';
import StaffPicks from './StaffPicks.jsx'
import SearchBar from './SearchBar.jsx';
import { Redirect } from 'react-router-dom';


class Home extends Component {
    state = {};

    render() {
    if (this.props.currentPage !== "/") {
        return <Redirect to={this.props.currentPage} />
    }
    return (
        <>
            <StaffPicks handleSearch={(title) => this.props.handleSearch(title)} baseURL={this.props.baseURL}/>
            <SearchBar handleSearch={(title) => this.props.handleSearch(title)} toBlindDate={() => this.props.toBlindDate()}/>
        </>
    )}

}

export default Home;
