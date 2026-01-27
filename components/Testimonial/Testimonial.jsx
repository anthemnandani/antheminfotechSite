import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";

const Testimonial = ({ data }) => {
  return (
    <div className="static-testimonial mb-6">
      <div className="testimonial-image">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}${data.image}`}
          alt={data.name}
          width={100} // adjust width according to your design
          height={100} // adjust height
          loading="lazy"
          className="rounded-full" // optional styling
        />
      </div>
      <div className="testimonial-content">
        {/* <p>{data.desc}</p> */}
        <p title={data.desc}>
  {data.desc.length > 140
    ? data.desc.slice(0, 140) + "..."
    : data.desc}
</p>

      </div>
      <div className="author-info">
        <div className="cite">
          <h6 className="name">{data.name}</h6>
          <span className="position">{data.position}</span>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default Testimonial;
