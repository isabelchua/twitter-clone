import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import { useState } from 'react';
import db from './firebase';

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = e => {
		e.preventDefault();

		db.collection('posts').add({
			displayName: 'Isabel Chua',
			username: 'isabelchua9',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: 'https://i.imgur.com/rryHjrE.jpg'
		});
		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://i.imgur.com/rryHjrE.jpg" />
					<input
						onChange={e => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening"
						type="text"
					/>
				</div>
				<input
					onChange={e => setTweetImage(e.target.value)}
					value={tweetImage}
					className="tweetBox__imageInput"
					placeholder="Optional: Enter Image URL"
					type="text"
				/>
				<Button onClick={sendTweet} className="tweetBox__tweetButton">
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
