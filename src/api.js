import axios from 'axios';

export const followAccount = async (follow) => {
    try {
      const { data } = await axios.post("/api/followers", follow);
      return data;
    } catch (error) {
      console.log('Follower', error);
    }
  };
  
  export const followingAccount = async (follow) => {
    try {
      const { data } = await axios.post("/api/followings", follow);
      return data;
    } catch (error) {
      console.log('followings', error);
    }
  };
  
  export const unfollowAccount = async (follow) => {
    try {
      const { data } = await axios.delete(
        "/api/followers/" + follow.id + "?userId=" + follow.userId
      );
      return data;
    } catch (error) {
      console.log('unfollow', error);
    }
  };
  
  export const unfollowingAccount = async (follow) => {
    try {
      const { data } = await axios.delete(
        "/api/followings?followingId=" + follow.id + "&userId=" + follow.userId
      );
      return data;
    } catch (error) {
      console.log('unfollowAccount', error);
    }
  };

  export const addComment = async (commentData) => {
    try {
      const { data } = await axios.post(
        "/api/comments/" + commentData.id,
        commentData
      );
      return data;
    } catch (error) {
      console.log('addComment', error);
    }
  };
  
  export const likeOrDislikePost = async (postData) => {
    try {
      const { data } = await axios.post("/api/posts/likes", postData);
      return data;
    } catch (error) {
      console.log('likeOrDislike', error);
    }
  };
  
  export const deletePost = async (postData) => {
    try {
      const { data } = await axios.delete(`/api/posts/${postData.id}`);
      return data;
    } catch (error) {
      console.log('Delete', error);
    }
  };
  