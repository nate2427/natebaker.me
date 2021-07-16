import { Helmet } from "react-helmet";
import axios from "axios";
import Disqus from "disqus-react";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import Layout from "../components/Layout";

function BlogDetails(props) {
  const [content, setContent] = useState("");
  const blogId = props.match.params.id;
  const blogFile = props.match.params.title;

  useEffect(() => {
    axios.get(require(`../blog/${blogFile}.md`)).then((result) => {
      setContent(result.data);
    });
  }, [content, blogFile]);

  const disqusShortname = "Nate-react"; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: "https://tf-react-Nate.now.sh/", //Homepage link of this site.
    identifier: blogId,
    title: blogFile,
  };

  return (
    <Layout lightMode={props.lightMode}>
      <Helmet>
        <title>Blog Details - Nate Personal Portfolio </title>
        <meta
          name="description"
          content="Nate Personal Portfolio  Blog Details Page"
        />
      </Helmet>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
          <div className="mi-blog-details-comments mt-30">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
