import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Airbus = forwardRef(function Airbus({ color = 'currentColor', size = 24, title = 'airbus', ...others }, ref) {
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
      <path d="M11.062 11.294c0 .74-.389 1.162-.993 1.305-.007 0 .967 1.53.967 1.53h-1.18L8.43 11.853h1.006c.435 0 .597-.24.597-.532 0-.285-.156-.532-.59-.532H8.266v3.342H7.228V9.867h2.206c1.096 0 1.628.616 1.628 1.427M5.49 14.13h1.038V9.867H5.49zM2.174 9.867L0 14.13h1.168l.352-.714h1.75l-.435-.895h-.873l.646-1.312h.013l1.453 2.92h1.194L3.095 9.868zm12.679 2.05c.409.144.688.52.688 1.02 0 .72-.577 1.194-1.46 1.194h-2.525V9.867h2.428c.863 0 1.376.461 1.376 1.148-.001.428-.176.72-.507.902m-2.258-.396h1.382a.368.368 0 00.376-.376.367.367 0 00-.37-.376h-1.388zm1.414 1.714a.435.435 0 00.448-.441c0-.247-.195-.428-.448-.428h-1.414v.869h1.414m4.808-.986c0 .647-.298 1.006-.89 1.006-.583 0-.881-.36-.881-1.006V9.867h-1.064v2.304c0 1.317.694 2.05 1.946 2.05s1.953-.733 1.953-2.05V9.867h-1.064zm3.834-.689c-.985-.24-1.2-.263-1.2-.545 0-.218.246-.324.662-.324.55 0 1.139.138 1.473.344l.331-.869c-.428-.227-1.058-.389-1.791-.389-1.097 0-1.713.545-1.713 1.278 0 .79.46 1.11 1.518 1.338.824.182.999.295.999.526 0 .25-.227.363-.675.363a3.565 3.565 0 01-1.706-.415l-.318.908c.513.273 1.278.448 2.05.448 1.077 0 1.719-.5 1.719-1.337.001-.673-.433-1.105-1.35-1.326" />
    </svg>
  );
});

Airbus.propTypes = {
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

export default Airbus;
