import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Data from './Sample.json';

class Movielist extends Component{
	render(){
		return (
				<>
					{ Data.entries.map((post, i) => {
						return(
						<div className="col-md-2 mb-4" key={i}>
							<img className="w-100" src={ post.images.Poster_Art.url } />
							<h5>{ post.title }</h5>
							<p className="movietype">{ post.programType }</p>
						</div>
						)
					}) 
					}
				</>
			)
	}
}
export default Movielist;

