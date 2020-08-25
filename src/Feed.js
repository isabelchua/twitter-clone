import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts').onSnapshot(snapshot =>
			setPosts(snapshot.docs.map(doc => doc.data()))
		);
	}, []);

	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div>
			<TweetBox />
			{/* <Post
				displayName="Isabel Chua"
				username="isabelchua9"
				verified={true}
				text="heey, it's working!"
				avatar="https://i.imgur.com/rryHjrE.jpg"
				image="https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif"
			/> */}

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
		</div>
	);
}

export default Feed;
