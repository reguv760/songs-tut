import React, { Component } from 'react';

//this is specific to redux to CONNECT to
//parent <Provider />
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component
{
	renderList()
	{
		//map song list from store:::
		return this.props.songs.map(song =>
		{
			return (
				<div className="item" key={song.title} >
					<div className="right floated content">
						<button 
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>

					<div className="content">
						{ song.title }
					</div>
				</div>
			)
		});
	}

	render()
	{		
		//this.props === { songs: state.songs}
		//console.log(this.props);
		return (
			<div className="ui divided list">
				{ this.renderList() } 
			</div>
		)
	}
}


//retrieve data from redux store then
//assign props from values
const mapStateToProps = state =>
{
	console.log(state);
	return { songs: state.songs };
}

//this is ===
//function() { return function() { return 'blah '; }}
export default connect(mapStateToProps, { selectSong })(SongList);