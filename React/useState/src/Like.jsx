import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  }

  return (
    <div>
      <button onClick={handleLike}>
        {liked ? "Unlike" : "Like"}
      </button>
      <p>{likeCount} Likes</p>
    </div>
  );
}
export default LikeButton