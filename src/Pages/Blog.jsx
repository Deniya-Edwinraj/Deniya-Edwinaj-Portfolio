import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import BlogCard from "../Components/BlogCard";
import fallbackImage from "../assets/Images/6.png";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Loading state

  useEffect(() => {
    function extractImageFromContent(html) {
      const match = html.match(/<img.*?src="(.*?)"/);
      const imageUrl = match ? match[1] : null;

      return imageUrl || fallbackImage;
    }

    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deniyaedwinraj"
      )
      .then((response) => {
        const items = response.data.items;
        const formatted = items.map((item) => ({
          title: item.title,
          image: extractImageFromContent(item.content),
          category: item.categories[0] || "Medium Blog",
          time: `${Math.ceil(item.content.length / 1000)} min read`,
          link: item.link,
        }));
        setPosts(formatted);
        setLoading(false); // ✅ Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching Medium posts", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" className="text-light py-5 mt-5">
      <div className="container text-center">
        <p className="text-danger">Visit my blog and keep your feedback</p>
        <h1 className="display-4 fw-bold">My Blog</h1>

        {loading ? (
          <p className="mt-4 text-muted">Blogs are loading...</p>
        ) : (
          <div className="mt-5 d-flex flex-wrap gap-4 justify-content-center">
            {posts.map((card, index) => (
              <BlogCard key={index} {...card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
