/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import {
  getPairForBlog,
  getPairForNotification,
} from "@/data/blogQcoInterlinkMap";

/**
 * Bi-directional interlink between Blog pages and QCO Notification pages.
 *
 * Renders nothing if the pair cannot be resolved, so callers don't need to
 * handle the "no match" case themselves.
 *
 * Usage on a Blog page:
 *   <InterlinkSection type="blog" blogUrl="/blogs/isi-products/storage-unit-is-17634" />
 *
 * Usage on a QCO Notification page:
 *   <InterlinkSection type="qco" matchKey={notification.subHeading} />
 */
const InterlinkSection = ({ type, blogUrl, matchKey, className }) => {
  const pair =
    type === "blog"
      ? getPairForBlog(blogUrl)
      : getPairForNotification(matchKey);

  if (!pair) return null;

  const label =
    type === "blog"
      ? `Also read the QCO Notification for ${pair.productName}${
          pair.isNumber ? ` (${pair.isNumber})` : ""
        }`
      : `BIS Certificate for ${pair.productName}${
          pair.isNumber ? ` (${pair.isNumber})` : ""
        }`;

  const target = type === "blog" ? pair.qcoUrl : pair.blogUrl;

  return (
    <p
      className={
        className || "text-gray-600 text-base font-geist mb-4 mt-2"
      }
    >
      <Link to={target} className="text-blue-700 hover:underline">
        {label}
      </Link>
    </p>
  );
};

export default InterlinkSection;
