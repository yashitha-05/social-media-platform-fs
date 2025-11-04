import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersTweets } from "../Store/Tweet/Action";
import TwitCard from "./Home/MiddlePart/TwitCard/TwitCard";

const Notifications = () => {
  const dispatch = useDispatch();
  const { auth, twit } = useSelector((s) => s);

  useEffect(() => {
    if (auth.user?.id) {
      dispatch(getUsersTweets(auth.user.id));
    }
  }, [auth.user?.id, dispatch]);

  return (
    <div className="py-6">
      <h1 className="text-xl font-bold mb-4">Notifications</h1>
      <p className="text-sm mb-4 text-gray-500">Your mood sharing history</p>
      <div className="space-y-4">
        {twit.twits?.map((t) => (
          <TwitCard key={t.id} twit={t} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;


