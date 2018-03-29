import React, {Component} from 'react';
import SearchBar from './search_bar.js';

class Navigation extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="nav">
                <div className="nav-main">
                    <SearchBar onSearchTermChange={this.props.onSearchTermChange} />
                </div>
                <div className="nav-sub">
                    <ul>
                        <li className="tab"><a onClick={this.handleGenreChange}>All</a></li>
                        <li className="tab"><a name="28" onClick={this.handleGenreChange}  >Action</a></li>
                        <li className="tab"><a name="12" onClick={this.handleGenreChange}  >Adventure</a></li>
                        <li className="tab"><a name="16" onClick={this.handleGenreChange}  >Animation</a></li>
                        <li className="tab"><a name="35" onClick={this.handleGenreChange}  >Comedy</a></li>
                        <li className="tab"><a name="80" onClick={this.handleGenreChange}  >Crime</a></li>
                        <li className="tab"><a name="99" onClick={this.handleGenreChange}  >Documentary</a></li>
                        <li className="tab"><a name="18" onClick={this.handleGenreChange}  >Drama</a></li>
                        <li className="tab"><a name="10751" onClick={this.handleGenreChange}  >Family</a></li>
                        <li className="tab"><a name="14" onClick={this.handleGenreChange}  >Fantasy</a></li>
                        <li className="tab"><a name="36" onClick={this.handleGenreChange}  >History</a></li>
                        <li className="tab"><a name="27" onClick={this.handleGenreChange}  >Horror</a></li> 
                    </ul>
                </div>
            </div>
        )
    }

    handleGenreChange = (event)=> {
        console.log(this.props);
        this.props.genreChange(event.target.name);
    }
    
}

export default Navigation;




