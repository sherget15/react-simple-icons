import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bit = forwardRef(function Bit({ color = 'currentColor', size = 24, title = 'bit', ...others }, ref) {
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
      <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-1.144-10.93c0-1.292-.763-2.019-1.858-2.019-.341 0-.637.072-.862.224V9.552c0-.323-.197-.485-.601-.485s-.601.162-.601.485v4.533c0 .305 0 .601.413.835.359.206.826.305 1.328.305 1.4 0 2.181-.844 2.181-2.154zm-2.72 1.05v-1.921a.923.923 0 0 1 .565-.18c.556 0 .924.413.924 1.131 0 .709-.359 1.104-.942 1.104-.206 0-.395-.045-.548-.135zm4.968-4.254c0-.413-.296-.691-.709-.691s-.709.278-.709.691c0 .413.296.7.709.7s.709-.287.709-.7zm-.108 1.669c0-.323-.197-.485-.601-.485s-.601.162-.601.485v3.186c0 .323.197.485.601.485s.601-.162.601-.485v-3.186zm3.64 2.594c-.072 0-.135.018-.206.036-.081.018-.18.045-.278.045-.153 0-.269-.054-.332-.18-.081-.153-.081-.386-.081-.548v-1.346h.754c.323 0 .485-.162.485-.503s-.162-.503-.485-.503h-.754v-.79c0-.323-.197-.485-.601-.485s-.601.162-.601.485v.79h-.314c-.323 0-.485.162-.485.503s.162.503.485.503h.314v1.346c0 .413.018.799.197 1.122.197.359.583.619 1.23.619.35 0 .691-.081.889-.197.171-.099.215-.224.215-.35 0-.197-.099-.548-.431-.548z" />
    </svg>
  );
});

Bit.propTypes = {
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

export default Bit;
