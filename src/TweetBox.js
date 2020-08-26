import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import { useState } from 'react';
import db from './firebase';
//import nextId from 'react-id-generator';
import { v4 as uuid } from 'uuid';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';

//const [htmlId] = nextId('id-');

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
			//timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			postId: uuid(),
			displayName: 'Anonymous User',
			username: 'test_user',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: 'https://i.imgur.com/l6soTSl.png'
		});

		// 		// Get the `FieldValue` object

		// // Create a document reference
		// const docRef = db.collection('objects').doc('some-id');

		// // Update the timestamp field with the value from the server
		// const res = await docRef.update({
		//   timestamp: FieldValue.serverTimestamp()
		// });

		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					{window.screen.availWidth > 560 ? (
						<Avatar src="https://i.imgur.com/l6soTSl.png" />
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
