import React, { useState, useEffect } from 'react';

import db from './firebase';
import TweetBox from './TweetBox';
import Post from './Post';
import FlipMove from 'react-flip-move';
import './Feed.css';
import { Avatar } from '@material-ui/core';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		//get data from database
		db.collection('posts').onSnapshot(snapshot =>
			setPosts(snapshot.docs.map(doc => doc.data().orderBy))
		);
	}, []);
	//.orderBy('timestamp', 'desc')
	return (
		<div className="feed">
			<div className="feed__header">
				{window.screen.availWidth <= 560 ? (
					<Avatar src="https://i.imgur.com/l6soTSl.png" />
				) : (
					''
				)}
				<h2>Home</h2>
			</div>
			<TweetBox />
			<FlipMove>
				{posts.map(post => (
					<Post
						displayName={post.displayName}
						username={post.username}
						verified={post.verified}
						text={post.text}
						avatar={post.avatar}
						image={post.image}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
