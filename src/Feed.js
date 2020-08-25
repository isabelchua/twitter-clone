import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';

function Feed() {
	return (
		<div className="feed">
			<div className="feed__header">
				<h2>This is home</h2>
			</div>
			<TweetBox />
		</div>
	);
}

export default Feed;
