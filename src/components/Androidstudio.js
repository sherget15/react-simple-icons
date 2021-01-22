import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Androidstudio = forwardRef(function Androidstudio(
  { color = 'currentColor', size = 24, title = 'Android Studio', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M12 0C6.07 0 1.254 4.816 1.254 10.746c0 3.29 1.482 6.237 3.814 8.21l4.51-7.8-.393-.39c-.115-.115-.173-.213-.175-.303a.239.239 0 010-.03H9V7.876c0-.615.51-1.123 1.125-1.123h.635V4.738h2.49v2.014h.625c.625 0 1.125.508 1.135 1.133v2.539H15v.01h-.002c-.003.087-.051.2-.174.322l-.01.01-.39.39 1.933 3.342a5.755 5.755 0 001.397-3.752h2.004a7.75 7.75 0 01-2.356 5.561l1.53 2.65a10.727 10.727 0 003.814-8.21C22.756 4.806 17.94 0 12 0zm6.932 18.957a10.791 10.791 0 01-1.653 1.15l1.52 2.628a.569.569 0 00.197.205l1.504 1.025c.059.04.127.04.185.01a.192.192 0 00.088-.166l-.156-1.806a.691.691 0 00-.088-.274l-1.597-2.771zm-1.653 1.15l-1.498-2.589a7.693 7.693 0 01-3.771.986 7.693 7.693 0 01-3.772-.986l-1.5 2.598A10.686 10.686 0 0012 21.495c1.918 0 3.72-.505 5.28-1.387zm-10.54.009a10.788 10.788 0 01-1.67-1.16L3.47 21.719a.694.694 0 00-.088.274l-.137 1.816c-.01.069.03.127.088.166.059.04.127.03.185-.01l1.504-1.015a.777.777 0 00.196-.205zm5.26-12.387v.02a1.49 1.49 0 00-1.493 1.5A1.501 1.501 0 0012 10.745h.01a1.508 1.508 0 001.494-1.498 1.51 1.51 0 00-1.494-1.5zm-.946 4.904L9.234 15.78a5.707 5.707 0 002.766.713 5.635 5.635 0 002.756-.704l-1.815-3.15-.375.375a.76.76 0 01-.556.234h-.02a.793.793 0 01-.556-.234z" />
    </svg>
  );
});

Androidstudio.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Androidstudio;
