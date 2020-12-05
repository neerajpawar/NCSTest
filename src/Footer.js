import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Footer extends Component{
	render(){
		return (<footer>
					<div className="container">
						<div className="row">
						<div className="col-md-12 text-center">
							<ul className="flist">
								<li><a href="#">Home</a></li>
								<li><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Collection Statement</a></li>
								<li><a href="#">Help</a></li>
								<li><a href="#">Manage Account</a></li>
							</ul>
							</div>
							<div className="col-md-12">
								<p className="text-center mb-0 mt-2">&copy; 2020. All rights reserved.</p>
							</div>
						</div>
					</div>
				</footer>
			)
	}
}
export default Footer;