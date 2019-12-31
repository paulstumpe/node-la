import React from 'react';
import Typography from '@material-ui/core/Typography';


const Post = () => {
  return (
    <div>
      <Typography variant="h3" style={{ fontWeight: "bolder", textAlign: "center", color: "white" }}>Post View</Typography>
      <Login />
    </div>
  );
}

export default Post;