import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Filter extends Component{
	render(){
		return (
			<div>
				<div className="container">
					<div className="row mt-3">
						<form className="w-100 d-flex resp">
							<div className="col-md-4">
								<div className="input-group mb-3">
								  <input type="text" className="form-control" placeholder="Recipient's username"/>
								  <div className="input-group-append">
									<span className="input-group-text" ><i className="fa fa-search"></i></span>
								  </div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group mb-md-0">
									<select className="form-control">
										<option>-- Select --</option>
										<option>Sort by year descending order</option>
										<option>Sort by year iascending order</option>
										<option>Sort by title descending order</option>
										<option>Sort by title ascending order</option>
									</select>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group mb-md-0">
									<select className="form-control">
										<option>-- Select Type --</option>
										<option>Series</option>
										<option>Movies</option>
									</select>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			)
	}
}
export default Filter;
