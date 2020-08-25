import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';
import { Avatar } from '@material-ui/core';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		//get data from database
		db.collection('posts').onSnapshot(snapshot =>
			setPosts(snapshot.docs.map(doc => doc.data()))
		);
	}, []);
	console.log(window.screen.availWidth);
	return (
		<div className="feed">
			<div className="feed__header">
				{window.screen.availWidth <= 560 ? (
					<Avatar src="https://i.imgur.com/l6soTSl.png" />
				) : null}
				<h2>Home</h2>
			</div>
			<TweetBox />
			<FlipMove>
				{posts.map(post => (
					<Post
						key={post.postId}
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
