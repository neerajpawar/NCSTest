import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './header.css';

class Header extends Component{
	render(){
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<div className="container">
					  <a className="navbar-brand" href="#">DEMO Streaming</a>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					  </button>
					  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ml-auto">
						  <a className="nav-item nav-link active" href="#">Login</a>
						  <button className="btn btn-dark my-2 my-sm-0" type="submit">Start your free trial</button>
						</div>
					  </div>
					</div>
				</nav>
				<div className="bg-dark">
					<div className="container">
						<p className="m-0 py-3">Popular Movies</p>
					</div>
				</div>
			</div>
			)
	}
}
export default Header;
