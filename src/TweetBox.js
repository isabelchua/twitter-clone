import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import { useState } from 'react';
import db from './firebase';
import { v4 as uuid } from 'uuid';
import * as firebase from 'firebase';

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = e => {
		e.preventDefault();

		if (!tweetMessage && !tweetImage) {
			alert('Enter Tweet!');
			return;
		}

		db.collection('posts').add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			postId: uuid(),
			displayName: 'Anonymous User',
			username: 'test_user',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: 'https://i.imgur.com/l6soTSl.png'
		});
		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					{window.screen.availWidth > 560 ? (
						<Avatar src="https://i.imgur.com/mQ30dPj.png" />
					) : (
						''
					)}
					<input
						onChange={e => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening?"
						type="text"
						id={uuid()}
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
