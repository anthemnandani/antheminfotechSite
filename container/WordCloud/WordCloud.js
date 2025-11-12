"use client";

import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import { getToken } from "../../services/tokenservice";
import { getProjects } from "../../services/projectsservices";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

const WordCloud = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const svgRef = useRef(null);
  const router = useRouter();

  // Fetch token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        if (data?.token) setToken(data.token);
      } catch (err) {
        console.error("Token fetch error:", err);
      }
    };
    fetchToken();
  }, []);

  // Fetch projects
  useEffect(() => {
    if (!token) return;
    const fetchProjects = async () => {
      try {
        const data = await getProjects(token);
        const uniqueTechnologies = new Set();
        data.forEach((project) => {
          if (project.technolgies) {
            project.technolgies
              .split(",")
              .map((tech) => tech.trim())
              .forEach((tech) => uniqueTechnologies.add(tech));
          }
        });

        const words = Array.from(uniqueTechnologies).map((tech) => ({
          text: tech,
          size: Math.floor(Math.random() * 40) + 20, // random font size
        }));

        setProjects(words);
      } catch (err) {
        console.error("Project fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [token]);

  // Generate D3 word cloud
  useEffect(() => {
    if (projects.length === 0 || loading) return;

    const width = 900;
    const height = 500;

    const layout = cloud()
      .size([width, height])
      .words(projects.map((d) => ({ text: d.text, size: d.size })))
      .padding(5)
      .rotate(() => (Math.random() > 0.5 ? 0 : 90))
      .font("sans-serif")
      .fontSize((d) => d.size*0.4)
      .on("end", draw);

    layout.start();

    function draw(words) {
      const svg = d3
        .select(svgRef.current)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("width", "100%")
        .attr("height", "100%")
        .style("cursor", "pointer")
         .style("font-weight", "bold");
      svg.selectAll("*").remove(); // clear old

      const group = svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      group
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-family", "sans-serif")
        .style("fill", () => d3.schemeCategory10[Math.floor(Math.random() * 10)])
        .style("font-size", (d) => `${d.size}px`)
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text((d) => d.text)
        .on("mouseover", function () {
          d3.select(this)
            .transition()
            .duration(200)
            .style("font-size", function () {
              const size = parseInt(d3.select(this).style("font-size"));
              return `${size * 1.5}px`;
            })
            // .style("fill", "#000");
        })
        .on("mouseout", function () {
          d3.select(this)
            .transition()
            .duration(200)
            .style("font-size", (d) => `${d.size}px`)
            .style("fill", () => d3.schemeCategory10[Math.floor(Math.random() * 10)]);
        })
        .on("click", (event, d) => {
          const slug = d.text.toLowerCase().replace(/\s+/g, "-");
          router.push(`/OurWork/${slug}`);
        });
    }
  }, [projects, loading]);

  return (
    <div
      className={`section section-padding-t90-b100 svg-height-500 ${classOption}`}
      style={{ margin: "0 auto" }}
    >
      <div className="container">
       <SectionTitle
          headingOption="title fz-32"
          title="Anthem Infotech Leverages Innovative Technologies, Latest Tools, and Platforms to Deliver Scalable, Efficient Business Solutions"
        />
       
        {loading ? (
          <Loader />
        ) : projects.length > 0 ? (
          <div className="wordcloud-bg flex justify-center">
            <svg ref={svgRef}></svg>
          </div>
        ) : (
          <p className="text-center">No technologies available.</p>
        )}

         
      </div>
    </div>
  );
};

export default WordCloud;

























// "use client";

// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { getToken } from "../../services/tokenservice";
// import { getProjects } from "../../services/projectsservices";
// import "tippy.js/dist/tippy.css";
// import "tippy.js/animations/scale.css";
// import SectionTitle from "../../components/SectionTitles/SectionTitle";
// import Loader from "../Loader/Loader";
// import { useRouter } from "next/navigation";

// // Dynamic import for ReactWordcloud (no SSR)
// const ReactWordcloud = dynamic(
//   () => import("react-wordcloud").then((mod) => mod.default),
//   { ssr: false }
// );

// const WordCloud = ({ classOption }) => {
//   const [token, setToken] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isClient, setIsClient] = useState(false); // <-- check for window
//   const router = useRouter();

//   // Ensure we're on client
//   useEffect(() => {
//     setIsClient(typeof window !== "undefined");
//   }, []);

//   // Fetch token
//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const data = await getToken();
//         if (data?.token) setToken(data.token);
//       } catch (err) {
//         console.error(err.message);
//       }
//     };
//     fetchToken();
//   }, []);

//   // Fetch projects
//   useEffect(() => {
//     if (!token) return;

//     const fetchProjects = async () => {
//       try {
//         const data = await getProjects(token);
//         console.log("Fetched projects:", data);
//         const uniqueTechnologies = new Set();
//         data.forEach((project) => {
//           if (project.technolgies) {
//             project.technolgies
//               .split(",")
//               .map((tech) => tech.trim())
//               .forEach((tech) => uniqueTechnologies.add(tech));
//           }
//         });

//         const wordArray = Array.from(uniqueTechnologies).map((tech) => ({
//           text: tech,
//           value: Math.floor(Math.random() * 96) + 5,
//         }));

//         setProjects(wordArray);
//       } catch (err) {
//         console.error("Error fetching projects:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, [token]);

//   const options = {
//     rotations: 5,
//     rotationAngles: [0, -90],
//     fontFamily: "sans-serif",
//     fontWeight: "normal",
//     padding: 5,
//     fontSizes: [30, 60],
//     scale: "sqrt",
//     spiral: "archimedean",
//     transitionDuration: 1000,
//     enableTooltip: false,
//     tooltipOptions: { theme: "custom" },
//     svgAttributes: { className: "svg-hover" },
//     textAttributes: { className: "wordcloud-text" },
//   };

//   const getCallback = (callbackName) => (word, event) => {
//     const isActive = callbackName !== "onWordMouseOut";
//     const element = event.target;

//     element.addEventListener("click", () => {
//       if (isActive) {
//         const slug = word.text.toLowerCase().replace(/\s+/g, "-");
//         router.push(`/OurWork/${slug}`);
//       }
//     });

//     element.style.transition = "all 0.3s ease";
//     element.style.fontSize = isActive ? "300%" : "";
//     element.style.zIndex = isActive ? "999" : "0";
//     element.style.cursor = "pointer";
//     element.style.textDecoration = "none";
//     element.style.color = "#000";
//   };

//   const callbacks = {
//     getWordTooltip: (word) => word.text,
//     onWordClick: getCallback("onWordClick"),
//     onWordMouseOut: getCallback("onWordMouseOut"),
//     onWordMouseOver: getCallback("onWordMouseOver"),
//   };

//   return (
//     <div
//       className={`section section-padding-t90-b100 svg-height-500 ${classOption}`}
//       style={{ margin: "0 auto" }}
//     >
//       <div className="container">
//         <SectionTitle
//           headingOption="title fz-32"
//           title="Anthem Infotech Leverages Innovative Technologies, Latest Tools, and Platforms to Deliver Scalable, Efficient Business Solutions"
//         />
//         {loading ? (
//           <Loader />
//         ) : isClient && projects?.length > 0 ? (
//           <div className="wordcloud-bg">
//             <ReactWordcloud words={projects} options={options} callbacks={callbacks} />
//           </div>
//         ) : (
//           <p className="text-center">No technologies available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WordCloud;