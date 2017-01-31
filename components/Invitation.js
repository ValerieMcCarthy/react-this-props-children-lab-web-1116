const React = require('react');


class Invitation extends React.Component {
	render() {
		return (
			<div>
				<h1>You have been invited!
				</h1>
        		<div className="invitation-children">{this.props.children}
        		</div>
        
        	</div>
			)
	}

}



















module.exports = Invitation