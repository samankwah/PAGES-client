import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";

const videoData = [
  {
    id: 1,
    title: "Exemple de vidéo 1",
    url: "https://www.youtube.com/watch?v=QxeP_QyNJA8",
    thumbnail: "https://img.youtube.com/vi/g5yNsYwuNZM/hqdefault.jpg", // Example thumbnail URL
  },
  {
    id: 2,
    title: "Exemple de vidéo 2",
    url: "https://www.youtube.com/watch?v=Kc-zDo2ojpIs",
    thumbnail: "https://img.youtube.com/vi/g5yNsYwuNZM/hqdefault.jpg", // Example thumbnail URL
  },
  {
    id: 3,
    title: "Exemple de vidéo 3",
    url: "https://www.youtube.com/watch?v=QxeP_QyNJA8",
    thumbnail: "https://img.youtube.com/vi/g5yNsYwuNZM/hqdefault.jpg", // Example thumbnail URL
  },
  {
    id: 4,
    title: "Exemple de vidéo 4",
    url: "https://www.youtube.com/watch?v=Kc-zDo2ojpI",
    thumbnail: "https://img.youtube.com/vi/g5yNsYwuNZM/hqdefault.jpg", // Example thumbnail URL
  },
  // Add more videos as needed
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="flex flex-col items-center h-full p-4 bg-gray-100 rounded-lg shadow-lg">
      <h4 className="font-bold text-2xl mb-4">Vidéos</h4>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="relative cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <FaPlayCircle className="absolute text-6xl text-gray-700" />
            </div>
            <p className="mt-2 text-center font-semibold">{video.title}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h5 className="font-bold text-xl mb-4">{selectedVideo.title}</h5>
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <ReactPlayer
                url={selectedVideo.url}
                className="absolute top-0 left-0 w-full h-full overflow-x-hidden"
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
