import React, {Component, Fragment} from 'react';
import axios from 'axios'
import { getBlogList, deleteBlog, addBlog, getBlog, updateBlog } from '../store/actions/Blog'
import { Provider, connect } from 'react-redux'


class BlogUpdateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {title: props.blog.title,
						description: props.blog.description,
						date: props.blog.date,
						quantity: props.blog.quantity,
						active: props.blog.active,
						upload:null,
						image:null,

						descLength:0,

					};
		this.handleChange = this.handleChange.bind(this);
		this.onUploadChange = this.onUploadChange.bind(this);
		this.onImageChange = this.onImageChange.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);

	}

	onDescriptionChange(e) {
		this.setState({descLength:e.target.value.length,
						description: e.target.value}
					);
		//this.setState({upload: e.target.files[0]})
	  }

	
	onUploadChange(e) {
		console.log("File: " + e.target.files[0]);
		this.setState({upload: e.target.files[0]})
	  }

	onImageChange(e) {
		console.log("Image: " + e.target.files[0]);
		this.setState({image: e.target.files[0]})
	}



	componentDidMount() {
		const id = this.props.id;
			
		/*this.setState({title: this.props.blog.title,
			description: this.props.blog.description,
			date: this.props.blog.date,
			blog: this.props.blog,
			quantity: this.props.blog.quantity,
			active: this.props.blog.active,
			upload:this.props.blog.upload

		});
		*/
	}

	componentDidUpdate(prevProps){

	}

	handleChange(event) {
		
		const { target}  = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name }  = target;
	
		this.setState({ [name]: value });
	
	  }



	handleFormSubmit = (e) => {
		e.preventDefault()

		//passed from the blogdetail
		const id = this.props.id

		const title = e.target.elements.title.value;
		const description = e.target.elements.description.value;
		const date = e.target.elements.date.value;
		const quantity = e.target.elements.quantity.value;
		const active = e.target.elements.active.checked;
		const upload = this.state.upload;
		const image = this.state.image;

		const data = new FormData();
		data.append('title', title);
		data.append('description', description);
		data.append('date', date);
		data.append('quantity', quantity);
		data.append('active', active);
		
		console.log('upload' + upload);
		if (upload)
			data.append('upload',  upload);
		
			console.log('image ' + image);
		if (image)
			data.append('image', image);

		data.append('user',this.props.blog.user);

		this.props.updateBlog(id, data)

	}



	render() {


		return (
				<div className="container">

					<br />
						<form onSubmit={event => this.handleFormSubmit(event)} encType="multipart/form-data">

							<input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
							<br />

							<input type="text" name="description" value={this.state.description} onChange={this.onDescriptionChange} maxLength="151"/>
							{
							(this.state.descLength > 150) &&
							<span name="descMsg" className="alert alert-primary" role="alert" >
  								Too many characters.
							</span>
							}
							<br />

							<input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
							<br />

							<input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
							<br />

							<input type="checkbox" name="active" value={this.state.active} onChange={this.handleChange}/>
							<br />

							<span>File: </span><input type="file" name="upload" onChange={this.onUploadChange}/>
							<span>{this.props.blog.upload}</span>
							<br />

							<input type="file" name="image"  onChange={this.onImageChange}/>
							<span>{this.props.blog.image}</span>
							<br />

							<button type="submit" disabled={(this.state.descLength > 150) ? "True" : null}>Update</button>

						</form>
					<br />

				</div>
		)
	}
}



// for properties
const mapStateToProps = state => {
	return {
		// isAuthenticated: state.auth.token !== null,
		// token: state.auth.token,
		blog2: state.blogs.blog,

	}
}



const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignup: () => dispatch(authCheckState()),

    getBlog: (id) => dispatch(getBlog(id)),
    updateBlog: (id, data) => dispatch(updateBlog(id, data)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BlogUpdateForm)






				// alternative method of doing submit
				// <form onSubmit={event => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
				// <form onSubmit={this.handleFormSubmit.bind(this, event, this.props.requestType, this.props.articleID)}>



			// return axios.put(`http://localhost:8000/api/${articleID}/`,{
			// 	title: title,
			// 	content: content
			// })
			// .then(res => console.log(res))
			// .catch(error => console.log(error))