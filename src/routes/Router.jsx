/* eslint-disable no-undef */
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Header from "../components/common/header/Header";
import TabBar from "../components/common/tabBar/TabBar";
import ChatList from "../pages/chat/chatList/ChatList";
import ChatRoom from "../pages/chat/chatRoom/ChatRoom";
import Feed from "../pages/feed/Feed";
import Follow from "../pages/follow/Follow";
import Intro from "../pages/intro/Intro";
import Onboarding from "../pages/onboarding/Onboarding";
import PostDetail from "../pages/post/postDetail/PostDetail";
import PostUpload from "../pages/post/postUpload/PostUpload";
import ProductDetail from "../pages/product/productDetail/ProductDetail";
import ProductUpload from "../pages/product/productUpload/ProductUpload";
import ProfileDetail from "../pages/profile/profileDetail/ProfileDetail";
import ProfileUpload from "../pages/profile/profileUpload/ProfileUpload";
import Search from "../pages/search/Search";
import SignIn from "../pages/sign/SignIn";
import Splash from "../pages/splash/Splash";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" />
      <Route path="/onboarding" element={<Onboarding />} />

      <Route path="/" element={<Header />}>
        {/* HOME */}
        <Route path="home" element={<Feed />} />
        <Route element={<TabBar />}>
          <Route path="search" element={<Search />} />
          <Route path="newsletter" element={<Feed />} />
        </Route>

        {/* CHAT */}
        <Route path="chat/*" element={<Outlet />}>
          <Route element={<TabBar />}>
            <Route path="" element={<ChatList />} />
            <Route path="list" element={<ChatList />} />
          </Route>
          <Route path="room" element={<ChatRoom />} />
        </Route>

        {/* POST */}
        <Route path="post/*" element={<Outlet />}>
          <Route path=":postId">
            <Route path="" element={<PostDetail />} />
            <Route path="edit" element={<PostUpload />} />
          </Route>
          <Route path="upload" element={<PostUpload />} />
        </Route>

        {/* PROFILE */}
        <Route path="profile/*" element={<Outlet />}>
          <Route path="" element={<SignIn />} />
          <Route path=":account/*" element={<Outlet />}>
            <Route element={<TabBar />}>
              <Route path="" element={<ProfileDetail />} />
              <Route path=":view" element={<ProfileDetail />} />
            </Route>
            <Route path="follower" element={<Follow />} />
            <Route path="following" element={<Follow />} />
            <Route path="upload" element={<ProfileUpload />} />
            <Route path="edit" element={<ProfileUpload />} />
          </Route>
        </Route>

        {/* PRODUCT */}
        <Route path="product/*" element={<Outlet />}>
          <Route path=":account" element={<ProductDetail />} />
          <Route path="upload" element={<ProductUpload />} />
          <Route path=":productId/edit" element={<ProductUpload />} />
        </Route>
      </Route>
    </Routes>
  );
}
