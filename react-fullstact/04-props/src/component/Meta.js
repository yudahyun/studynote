import React from "react";
import { Helmet } from "react-helmet";
import Sample from "../assets/img/sample.png";

const Meta = (props) => {
  return (
    <Helmet>
      <meta charset="uft-8" />
      <title>{props.title}</title>
      {/* SEO 태그 */}
      <meta name="description" content="{props.description}" />
      <meta name="keywords" content="{props.keywords}" />
      <meta name="author" content="{props.autor}" />
      <meta property="og:url" content="{props.url)" />
      <meta property="og:title" content="{props. " />
      <meta property="og:type" content="{props.website" />
      <meta property="og:description" content="{props. 160" />
      <meta property="og:image" content="{props. URL" />
      <link rel="icon" href=" favicon" type="image/png" />
      <link rel="shortcut icon" href=" favicon" type="image/png" />{" "}
      <link rel="apple-touch-icon" href=" favicon" type="image/png" />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "React Example",
  description: "React.js 예제입니다",
  keywords: "React",
  author:"다현",
  image:Sample,
  url :window.location.href

};

export default Meta;
