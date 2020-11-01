import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Button, Label, Col, Row} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required=(val)=>val&&val.length;
const maxLength=(len)=>(val)=>(!val)||(val.length<=len);
const minLength=(len)=>(val)=>val&&(val.length>=len);

class CommentForm extends Component{
	constructor(props){
		super(props);

		this.state={
			isModalOpen: false
		};

		this.toggleModal=this.toggleModal.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	toggleModal(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values){
		this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
	}

	render(){
		return (
			<React.Fragment>
			<Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg mr-1"></span>Submit Comment</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
							<Row className="from-group">
								<Label md={3}>Rating</Label>
								<Col md={12}>
									<Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="author" md={3}>Your Name</Label>
								<Col md={12}>
                                    <Control.text 
                                        model=".author" 
                                        id="author" 
                                        name="author" 
                                        placeholder="Your Name" 
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength:minLength(3),
                                            maxLength:maxLength(15)
                                        }} 
                                    />
                                    <Errors 
                                        className="text-danger" 
                                        model=".author" 
                                        show="touched" 
                                        messages={{
                                            required:'Required',
                                            minLength:'Must be greater than 3 characters', 
                                            maxLength:'Must be 15 characters or less'
                                        }} 
                                    />
                                </Col>
							</Row>
							<Row className="form-group">
                                <Label htmlFor="comment" md={3}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea 
                                        model=".comment" 
                                        id="comment" 
                                        name="comment" 
                                        rows="12" 
                                        className="form-control" 
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}
export default CommentForm;