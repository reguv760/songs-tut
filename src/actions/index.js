//Action creator file
//export preceeding function means
//it is a NAMED export, not a default export
//it can be referenced by function name from other file
export const selectSong = song =>
{
	//return an action:::
	return {
		type: 'SONG_SELECTED',
		payload: song

	}
}