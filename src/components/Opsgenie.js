import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Opsgenie = forwardRef(function Opsgenie(
  { color = 'currentColor', size = 24, title = 'opsgenie', ...others },
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
      <path d="M12.002 0a5.988 5.988 0 1 1 0 11.975 5.988 5.988 0 0 1 0-11.975zm9.723 13.026h-.03l-4.527-2.242a.671.671 0 0 0-.876.268 22.408 22.408 0 0 1-4.306 5.217 22.407 22.407 0 0 1-4.286-5.2.671.671 0 0 0-.876-.269l-4.535 2.226h-.03a.671.671 0 0 0-.248.902 28.85 28.85 0 0 0 4.55 5.933l-.002.001c.024.025.05.048.075.072.335.335.676.664 1.027.981.081.074.165.144.247.217.315.278.632.555.96.82.144.117.295.227.441.341.277.216.552.434.837.639.44.318.888.625 1.346.917a.963.963 0 0 0 1.007.017c.487-.312.962-.64 1.428-.98.068-.05.132-.103.2-.153.358-.266.713-.537 1.06-.82.234-.19.46-.39.688-.588.17-.147.34-.291.506-.442.295-.268.58-.545.864-.825.061-.06.127-.118.188-.179l-.004-.002a28.852 28.852 0 0 0 4.565-5.949.671.671 0 0 0-.269-.902z" />
    </svg>
  );
});

Opsgenie.propTypes = {
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

export default Opsgenie;
