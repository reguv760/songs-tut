import { combineReducers } from 'redux';

//define reducer function(s)
const songsReducer = () =>
{
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Macarena', duration: '3:00' },
		{ title: 'All Star', duration: '3:42' },		
		{ title: 'I Want it That way (Extended Edition)', duration: '6:13' },
	];
};

//always init/default arguement
const selectedSongReducer = (selectedSong = null, action) =>
{
	if (action.type === 'SONG_SELECTED')
	{
		return action.payload;
	}

	return selectedSong;
}

//assign key to this function
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
})