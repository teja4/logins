import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
	constructor(){
		super();
		this.state={
			data:[]
		};
		this.alldel=this.alldel.bind(this)
	}
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/users')
		  .then((response)=> {
		    
		    this.setState({data:response.data})

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	delete(el){
		const item = this.state.data;
		if(item.indexOf(el)>-1){
			item.splice(item.indexOf(el),1);
			this.setState({data:item})
		}
	}
	alldel(){
		let emptydata=[]
		this.setState({data:emptydata})
	}
    render() {
    	const data = this.state.data.map((el)=>{
    		return (
    				<tr key={el.id}>
    					<td>
    					 {el.id}
    					</td>
    					<td>
    					 {el.name}
    					</td>
    					<td>
    					 {el.username}
    					</td>
    					<td>
    					 {el.phone}
    					</td>
    					<td>
    					 {el.email}
    					</td>
    					<td>
    					 {el.website}
    					</td>
    					<td>
    						<a onClick = {this.edit}>	
    							edit
    						</a>
    						<a onClick = {this.delete.bind(this,el)}>
    							delete
    						</a>
    					</td>
    				</tr>
    			);
    	})
        return (
           <div className="container">
           <a onClick={this.alldel}>
          		 deleted all
           </a>
           	<table> 
           		<thead>
           			<tr>	
           				<th>
           					Id
           				</th>
           				<th>
           					Name
           				</th>
           				<th>
           					USer Name
           				</th>
           				<th>
           					Phone Number
           				</th>
           				<th>
           					Email
           				</th>
           				<th>
           					Website
           				</th>
           				<th>
           					Actions
           				</th>
           			</tr>
           		</thead>
           		<tbody>
           			{data}
           		</tbody>
           	</table>
           </div>
        );
    }
}

export default Home;