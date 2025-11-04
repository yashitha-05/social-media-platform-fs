import React, { useEffect, useState } from "react";
import { Avatar, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FollowUserAction, searchUser } from "../Store/Auth/Action";

const Messages = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((s) => s);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Try to fetch some users for suggestions
    dispatch(searchUser(query || "a"));
  }, [dispatch]);

  const handleFollow = (id) => {
    dispatch(FollowUserAction(id));
  };

  return (
    <div className="py-6">
      <h1 className="text-xl font-bold mb-4">Messages</h1>
      <div className="mb-6">
        <TextField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={() => dispatch(searchUser(query))}
          size="small"
          placeholder="Search people to message"
        />
      </div>

      <h2 className="font-semibold mb-2">Inbox</h2>
      <p className="text-gray-500 mb-6 text-sm">No messages yet.</p>

      <h2 className="font-semibold mb-2">People you may follow</h2>
      <div className="space-y-3">
        {auth.searchResult?.map((u) => (
          <div key={u.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar src={u.image} alt={u.fullName} />
              <div>
                <div className="font-medium">{u.fullName}</div>
                <div className="text-sm text-gray-500">@{u.fullName?.split(" ").join("_").toLowerCase()}</div>
              </div>
            </div>
            <Button variant="outlined" size="small" onClick={() => handleFollow(u.id)}>
              {u.followed ? "Unfollow" : "Follow"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;


