import React, { useEffect, useState } from "react";
import "./Grid.css";

interface DataItem {
  href: string;
  data: Array<{
    description: string;
    title: string;
    description_508: string;
    media_type: string;
  }>;
  links: Array<{
    href: string;
  }>;
}

interface GridProps {
  data: DataItem[];
  loading: boolean;
  onSort: (field: keyof DataItem["data"][0]) => void;
}

const Grid: React.FC<GridProps> = ({ data, loading, onSort }) => {
  const [videoLinks, setVideoLinks] = useState<{ [key: number]: string }>({});
  const [audioLinks, setAudioLinks] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchMediaLinks = async () => {
      const videoLinks: { [key: number]: string } = {};
      const audioLinks: { [key: number]: string } = {};

      for (let i = 0; i < data.length; i++) {
        const card = data[i];

        // Verificar y obtener el enlace del video
        if (card.data && card.data[0]?.media_type === "video") {
          try {
            const response = await fetch(encodeURI(card.href));
            const videoData: string[] = await response.json();
            const videoUrl = videoData.find((url) => url.endsWith("~orig.mp4"));
            if (videoUrl) {
              videoLinks[i] = videoUrl;
            }
          } catch (error) {
            console.error(`Error fetching video link for card ${i}:`, error);
          }
        }

        // Verificar y obtener el enlace de audio MP3
        if (card.data && card.data[0]?.media_type === "audio") {
          try {
            const response = await fetch(encodeURI(card.href));
            const audioData: string[] = await response.json();
            const audioUrl = audioData.find((url) => url.endsWith(".mp3"));
            if (audioUrl) {
              audioLinks[i] = audioUrl;
            }
          } catch (error) {
            console.error(`Error fetching audio link for card ${i}:`, error);
          }
        }
      }

      setVideoLinks(videoLinks);
      setAudioLinks(audioLinks);
    };

    fetchMediaLinks();
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="body">
      <section>
        <div className="container">
          <div className="cards">
            {data.map((card, index) => {
              // Validar que 'card.data' y 'card.data[0]' estén definidos
              const cardData = card.data && card.data[0];
              if (!cardData) {
                return null; // Si no hay datos, no renderizar el elemento
              }

              const { title, description, description_508, media_type } =
                cardData;

              return (
                <div key={index} className="card">
                  <div className="media-content">
                    {media_type === "video" && videoLinks[index] ? (
                      <video controls>
                        <source src={videoLinks[index]} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : media_type === "image" ? (
                      <img src={card.links[0].href} alt={title} />
                    ) : media_type === "audio" && audioLinks[index] ? (
                      <audio controls>
                        <source src={audioLinks[index]} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    ) : (
                      <p>Media not supported</p>
                    )}
                  </div>
                  <label>Tipo: {media_type}</label>
                  <br />
                  <h3>{title}</h3>
                  <p>{description_508 || description}</p>
                  <br />
                  <div
                    className="btn-container"
                    style={{ textAlign: "center" }}
                  >
                    <a
                      href={card.href}
                      className="btn-footer"
                      style={{ display: "inline-block" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Más links
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grid;
