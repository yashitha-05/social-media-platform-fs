import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findTwitsById } from "../../../Store/Tweet/Action";
import TwitCard from "./TwitCard/TwitCard";

const TwitDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { twit } = useSelector((s) => s);

  useEffect(() => {
    if (id) dispatch(findTwitsById(id));
  }, [id, dispatch]);

  return (
    <div className="py-6">
      <h1 className="text-xl font-bold mb-4">Mood Sharing</h1>
      {twit.twit && <TwitCard twit={twit.twit} />}
    </div>
  );
};

export default TwitDetail;