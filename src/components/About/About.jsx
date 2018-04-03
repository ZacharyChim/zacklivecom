import React, { Component } from "react";
import Helmet from "react-helmet";
import "./About.css";
import Drawer from "../../layouts/Drawer/Drawer";
import Navigation from "../Navigation/Navigation";
import config from "../../../data/SiteConfig";
import SiteWrapper from "../../layouts/SiteWrapper/SiteWrapper";
import MainHeader from "../../layouts/MainHeader/MainHeader";
import MainNav from "../../layouts/MainNav/MainNav";
import MenuButton from "../MenuButton/MenuButton";
import MainContent from "../../layouts/MainContent/MainContent";

import PostFormatting from "../../layouts/PostFormatting/PostFormatting";
import PostHeader from "../../layouts/PostHeader/PostHeader";
import PostFooter from "../../layouts/PostFooter/PostFooter";
import AuthorImage from "../AuthorImage/AuthorImage";
import BlogLogo from "../BlogLogo/BlogLogo";
import Footer from "../Footer/Footer";
import GhostSubscribe from "../GhostSubscribe/GhostSubscribe";

import cover from "./cover.jpg";


class About extends Component {
	state = {
		menuOpen: false
	};

	handleOnClick = evt => {
		evt.stopPropagation();
		if (this.state.menuOpen) {
			this.closeMenu();
		} else {
			this.openMenu();
		}
	};

	handleOnClose = evt => {
		evt.stopPropagation();
		this.closeMenu();
	};

	openMenu = () => {
		this.setState({ menuOpen: true });
	};

	closeMenu = () => {
		this.setState({ menuOpen: false });
	};
  render() {
		const authorData = {
			"name": "Zack",
	  	"image": "/images/authors/zack.jpg",
	  	"url": "https://zacklive.com",
		};
		const about = "<p>Hi, 我是Zack。<strong>我希望能让每个人都能学会编程。</strong></p><p>我的微信：</p><p><img width=200 src='/images/wechat.png' /></p>";
    return (
			<div className="about">
				<Drawer className="post-template" isOpen={this.state.menuOpen}>
					<Helmet>
						<title>{`{"关于"} | ${config.siteTitle}`}</title>
					</Helmet>

					{/* The blog navigation links */}
					<Navigation config={config} onClose={this.handleOnClose} />

					<SiteWrapper>
						<MainHeader className="post-head" cover={cover}>
							<MainNav overlay={cover}>
								<BlogLogo logo={config.siteLogo} title={config.siteTitle} />
								<MenuButton
									navigation={config.siteNavigation}
									onClick={this.handleOnClick}
								/>
							</MainNav>
						</MainHeader>
						<MainContent>
							<PostFormatting className="post">
								<PostHeader>
									<h1 className="post-title">{"关于"}</h1>
								</PostHeader>

								<section
									className="post-content"
									dangerouslySetInnerHTML={{ __html: about }}
								/>

								<PostFooter>
									<AuthorImage author={authorData} />
									<GhostSubscribe />
								</PostFooter>
							</PostFormatting>
						</MainContent>

						{/* The tiny footer at the very bottom */}
						<Footer
							copyright={config.copyright}
						/>
					</SiteWrapper>
				</Drawer>
			</div>
    );
  }
}

export default About;
