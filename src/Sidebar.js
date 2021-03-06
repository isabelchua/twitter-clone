import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

function Sidebar() {
	return (
		<div className="sidebar">
			<TwitterIcon className="sidebar__twitterIcon" />
			<SidebarOption active Icon={HomeIcon} text="Home" />
			<SidebarOption Icon={SearchIcon} text="Explore" />
			<SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
			<SidebarOption Icon={MailOutlineIcon} text="Messages" />
			<SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
			<SidebarOption Icon={ListAltIcon} text="Lists" />
			<SidebarOption Icon={PermIdentityIcon} text="Profile" />
			<SidebarOption Icon={MoreHorizIcon} text="More" />
			<Button variant="outline" className="sidebar__tweet">
				Tweet
			</Button>

			<div className="sidebar_profile">
				<Avatar src="https://i.imgur.com/mQ30dPj.png" />
				<h3>
					Anonymous User
					<span className="post__headerSpecial">@test_user</span>
				</h3>
			</div>
		</div>
	);
}

export default Sidebar;
