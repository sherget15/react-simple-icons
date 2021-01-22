import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mathworks = forwardRef(function Mathworks(
  { color = 'currentColor', size = 24, title = 'Mathworks', ...others },
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
      <path d="M4.323 16.25C3.13 15.354 1.64 14.31 0 13.12l5.814-2.237 2.386 1.79c-1.79 2.086-2.982 2.831-3.877 3.577zm15.952-6.261c-.447-1.193-.745-2.385-1.193-3.578-.447-1.343-.894-2.535-1.64-3.579-.299-.447-.895-1.49-1.64-1.49-.15 0-.299.148-.448.148-.447.15-1.043 1.043-1.193 1.64-.447.745-1.342 1.938-1.938 2.683-.149.299-.447.597-.596.746-.447.298-.894.745-1.491 1.043-.15 0-.298.149-.447.149-.447 0-.745.298-1.043.447-.447.447-.894 1.043-1.342 1.49 0 .15-.15.299-.298.448l2.236 1.64c1.64-1.938 3.578-3.876 4.92-7.603 0 0-.448 4.026-4.026 8.349-2.236 2.534-4.025 3.876-4.324 4.174 0 0 .597-.149 1.194.15 1.193.446 1.789 2.087 2.236 3.279.298.894.745 1.64 1.043 2.534 1.193-.298 1.938-.745 2.683-1.491.745-.746 1.491-1.64 2.236-2.385 1.342-1.64 2.982-3.728 5.069-2.684.298.15.745.447.894.596.447.298.745.596 1.193 1.043.745.597 1.043 1.044 1.64 1.343-1.491-2.982-2.534-5.964-3.727-9.094z" />
    </svg>
  );
});

Mathworks.propTypes = {
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

export default Mathworks;
