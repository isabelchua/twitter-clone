import React from 'react';
import './Widgets.css';
import {
	TwitterTimelineEmbed,
	TwitterShareButton
	// TwitterTweetEmbed
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>
			<div className="widgets__widgetContainer">
				<h2>What's happening</h2>
				{/* <TwitterTweetEmbed tweetId={'1298351204179816449'} /> */}
				{/* <TwitterTweetEmbed tweetId={'1298705284811104256'} /> */}
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="sfchronicle"
					options={{ height: 700 }}
				/>
				{/* <TwitterTweetEmbed tweetId={'933354946111705097'} /> */}

				<TwitterShareButton
					url={' '}
					options={{ text: '#lifeisawesome :)', via: 'isabelchua6' }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
