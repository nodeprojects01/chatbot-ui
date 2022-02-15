import React from 'react';
import { themes, windowSize } from '../config/themes';
import { createGlobalStyle } from 'styled-components';

function ChatTheme(theme, size) {
	var style = theme && themes[theme]? themes[theme] : themes.blue;	
	var winsize = size && windowSize[size]? windowSize[size] : windowSize.medium;	

	const GlobalStyles = createGlobalStyle`
		html {
			${style}
			${winsize}
		}
		` ;
	return (
		<GlobalStyles />
	);
}

export default ChatTheme;