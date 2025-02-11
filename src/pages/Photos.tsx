import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const containerStyle = css`
  display: flex;
  flex-wrap: wrap; /* Allows images to wrap to the next line */
  justify-content: center; /* Centers images when not filling the row */
  width: 100vw;
  min-height: 100vh;
  background: black;
  overflow-y: auto; /* Enables scrolling */
  padding: 5px;
`;

const imageStyle = css`
  flex: 1 1 50%;
  max-width: 50%;
  padding: 2px; /* Adds a small gap */
  box-sizing: border-box;

  @media (max-width: 1268px) {
    flex: 1 1 100%;
    max-width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border: 2px solid;
  }
`;

const homeIconStyle = css`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  color: black;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const photos = [
  {
    src: "https://images.unsplash.com/photo-1739218729104-c2f4c604b079?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kyoto, Bamboo Forest",
  },
  {
    src: "https://images.unsplash.com/photo-1739218643259-ad9370a4f495?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Train Station, Miyajima",
  },
  {
    src: "https://images.unsplash.com/photo-1739218697154-830901ac6522?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tori Gate, Miyajima",
  },
  {
    src: "https://images.unsplash.com/photo-1739218704370-3877110c554d?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Miyajima Island",
  },
  {
    src: "https://images.unsplash.com/photo-1739218719256-3744d8e1cb42?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tori Gate at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1739219062425-d596d6099289?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Greek Flag, Athens",
  },
  {
    src: "https://images.unsplash.com/photo-1739218671474-c66c20c1c833?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Naousa, Paros",
  },
  {
    src: "https://images.unsplash.com/photo-1739219071803-78fc3796f7c9?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Church, Paros",
  },
];

const Photos = () => {
  return (
    <div className={containerStyle}>
      <Link to="/">
        <FaHome size={38} className={homeIconStyle} />
      </Link>
      {photos.map((photo, index) => (
        <div key={index} className={imageStyle}>
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};

export default Photos;
