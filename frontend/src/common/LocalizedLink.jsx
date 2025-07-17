import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { getFullLocalizedPath } from "../../utils/urlMapping";

/**
 * LocalizedLink component that automatically generates localized URLs
 * @param {Object} props - Component props
 * @param {string} props.to - The English URL path
 * @param {string} props.lang - Optional language override
 * @param {React.ReactNode} props.children - Link content
 * @param {Object} props.otherProps - Other props to pass to Link
 */
export function LocalizedLink({ to, lang, children, ...otherProps }) {
  const { i18n } = useTranslation();

  // Use provided lang or current language
  const currentLang = lang || i18n.language;

  // Generate the localized path
  const localizedPath = getFullLocalizedPath(to, currentLang);

  return (
    <Link to={localizedPath} {...otherProps}>
      {children}
    </Link>
  );
}

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
  lang: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LocalizedLink;
