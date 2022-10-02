import { Box } from "@mui/material";
import React from "react";

import Post from "./Post";
import { dummyData } from "./dummyData";

const Posts = dummyData.map((postData) => (
  <Post key={postData} postData={postData} />
));

function Feed() {
  return (
    <Box flex={4} p={2}>
      {Posts}
    </Box>
  );
}

export default Feed;
