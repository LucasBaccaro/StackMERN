import React from "react";
import ReactPlayer from "react-player";
import {useHistory} from 'react-router-dom'
import { toast } from "react-toastify";

import * as videoService from "./VideoService";
import { Video } from "./Video";

import "./VideoItem.css";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = (props: Props) => {
  const { video, loadVideos } = props;
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideoById(id);
    toast.error("Video eliminado")
    loadVideos();
  };

  return (
   
    <div className="col-md-4 p-2">
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/update/${video._id}`)}
      >
        <p>{video.description}</p>
        <h5>{video.title}</h5>
        <div className="d-flex">
          <ReactPlayer url={video.url} />
        </div>
      </div>
      <div className="d-flex justify-content-between">
          
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => video._id && handleDelete(video._id)}
          >
            Eliminar
          </span>
        </div>
    </div>
  );
};

export default VideoItem;