import React from "react";
import styled from "styled-components";
import PostList_Item from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

function PostList(props) {
  const { posts, it_click } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostList_Item
            key={post.id}
            post={post}
            onClick={() => {
              it_click(post);
            }}
          />
        );
      })}
    </Wrapper>
  );
}

export default PostList;
