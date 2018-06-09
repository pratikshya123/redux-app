import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {select} from '../action/Studentaction'
class Student extends Component {
	render() {
		return(
			<div>
			<table>
			<thead>
			<tr>
				<th>id</th>
				<th>name</th>
			</tr>
			</thead>
			<tbody>
			{
				this.props.lists.map(List =>{
						return (
							<tr key={List.id}>
							<td>{List.id}</td>
							<td onClick={()=>this.props.handleclick(List)}>{List.name}</td>
							</tr>
							)
					
				})
			}
			</tbody>

			</table>
			selected student is:{this.props.selected.name}
			</div>

			);
	}
}
function mapStateToProps(state)
{
	return({
		lists:state.students,
		selected:state.selected
	})
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handleclick:select
	},dispatch)
}

export default connect( mapStateToProps,mapDispatchToProps)(Student);
