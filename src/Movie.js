import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Movielist from './Movielist';
class Movie extends Component{
	render(){
		return (
			<div className="container">
				<div className="row">
					<Movielist />
				</div>
			</div>
			)
	}
}
export default Movie;
