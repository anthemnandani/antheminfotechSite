"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import AlbumItemTwo from "./AlbumItemTwo";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import Loader from "../Loader/Loader";

const AlbumGallery = ({ classOption }) => {
  const [loading, setLoading] = useState(true);
  const [visibleData, setVisibleData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const allImages = [
    { image: "/images/gallery/gallery-2.jpg", title: "Project Alpha" },
    { image: "/images/gallery/gallery-2.jpg", title: "Project Alpha" },
    { image: "/images/gallery/gallery-1.jpg", title: "Project Alpha" },
    { image: "/images/gallery/gallery-1.jpg", title: "Project Alpha" },
    { image: "/images/gallery/gallery-1.jpg", title: "Project Alpha" },
    { image: "/images/gallery/gallery-1.jpg", title: "Project Alpha" },
    { image: "/images/gallery/gallery-1.jpg", title: "Project Alpha" },
    { image: "/images/gallery/gallery-1.jpg", title: "Project Alpha" },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });

    setTimeout(() => {
      setVisibleData(allImages.slice(0, 6));
      setLoading(false);
    }, 1000);
  }, []);

  const loadMoreData = () => {
    if (visibleData.length >= allImages.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisibleData(prev => allImages.slice(0, prev.length + 3));
    }, 600);
  };

  const openModal = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % visibleData.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? visibleData.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!modalOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen]);

  return (
    <div className={`section section-padding-t90-b100 ${classOption}`}>
      <div className="container">
        <SectionTitle
          headingOption="title fz-32"
          title="Crafting Effective Digital Marketing, Web Development, <br> Video Content and Communication Design"
        />

        <div className="row align-items-center">
          <div className="col-lg-5">
            <SectionTitleTwo subTitle="Gallery" title="Our Gallery" />
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <InfiniteScroll
            dataLength={visibleData.length}
            next={loadMoreData}
            hasMore={hasMore}
            loader={
              <div className="d-flex justify-content-center w-100">
                <BeatLoader color="#0a507a" />
              </div>
            }
            endMessage={
              <div className="d-flex justify-content-center w-100">
                <p className="text-primary fw-bold">
                  You have reached the end of this section.
                </p>
              </div>
            }
          >
            {/* 🔥 Masonry Container */}
            <div className="masonry">
              {visibleData.map((item, index) => (
                <div key={index} className="masonry-item" data-aos="fade-up">
                  <AlbumItemTwo
                    data={item}
                    onPreview={() => openModal(index)}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>

      {/* Modal Viewer */}
      {modalOpen && (
        <div
          className="gallery-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "28px",
              color: "#fff",
              background: "transparent",
              border: "none",
            }}
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "20px",
              fontSize: "40px",
              color: "#fff",
              background: "transparent",
              border: "none",
            }}
          >
            ❮
          </button>

          <img
            src={visibleData[activeIndex].image}
            style={{
              maxWidth: "85%",
              maxHeight: "85%",
              borderRadius: "10px",
              objectFit: "contain",
            }}
          />

          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "20px",
              fontSize: "40px",
              color: "#fff",
              background: "transparent",
              border: "none",
            }}
          >
            ❯
          </button>
        </div>
      )}

      {/* Masonry CSS */}
      <style>{`
        .masonry {
          column-count: 3;
          column-gap: 20px;
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 20px;
        }

        @media (max-width: 992px) {
          .masonry {
            column-count: 2;
          }
        }

        @media (max-width: 576px) {
          .masonry {
            column-count: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AlbumGallery;
