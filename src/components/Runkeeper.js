import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Runkeeper = forwardRef(function Runkeeper(
  { color = 'currentColor', size = 24, title = 'runkeeper', ...others },
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
      <path d="M2.429 10.42c-.52 0-1.091.318-1.45.619l.029.04c.556-.39 1.33-.644 1.544-.263.112.201-.079.607-.348.928.065-.142.022-.414-.353-.414-.624 0-1.851.826-1.851 1.672 0 .339.235.56.622.56 1.035 0 2.44-1.698 2.44-2.551 0-.301-.173-.59-.633-.59zm8.738.714v1.903h.454v-.306l.345-.229.628.535h.626l-.91-.764.891-.595h-.68l-.9.619v-1.163zm-7.464.19v1.712h.453v-.543h.98l.546.544h.58l-.589-.575a.773.773 0 0 0 .399-.196.485.485 0 0 0 .14-.357.495.495 0 0 0-.23-.433c-.152-.102-.363-.153-.634-.153zm-1.853.207c.297 0 .274.265.1.492l-.096.106c-.345.34-.664.52-.88.52v-.001c-.179 0-.265-.138-.22-.297.093-.33.69-.82 1.096-.82zm17.228.09a1.29 1.29 0 0 0-.012 0 1.251 1.251 0 0 0-.403.063.76.76 0 0 0-.292.166v-.172h-.45v1.902h.455v-.711a.778.778 0 0 0 .293.163 1.262 1.262 0 0 0 .397.061 1.29 1.29 0 0 0 .498-.092.816.816 0 0 0 .349-.26.648.648 0 0 0 0-.769.82.82 0 0 0-.349-.259 1.29 1.29 0 0 0-.486-.092zm-9.133 0a1.103 1.103 0 0 0-.011 0 .96.96 0 0 0-.44.096.71.71 0 0 0-.29.258v-.297h-.432v1.359h.454v-.568a.453.453 0 0 1 .081-.271.494.494 0 0 1 .22-.17.82.82 0 0 1 .312-.057.561.561 0 0 1 .261.06.441.441 0 0 1 .18.167.475.475 0 0 1 .065.248v.59h.456v-.663a.71.71 0 0 0-.117-.414.707.707 0 0 0-.314-.254 1.103 1.103 0 0 0-.425-.084zm6.667 0a1.487 1.487 0 0 0-.523.094.867.867 0 0 0-.364.263.594.594 0 0 0-.132.378.6.6 0 0 0 .133.385.849.849 0 0 0 .385.26c.168.061.366.092.594.091a2.573 2.573 0 0 0 .418-.03c.123-.02.256-.049.397-.085v-.33a5.593 5.593 0 0 1-.398.087 2.366 2.366 0 0 1-.4.03c-.178 0-.328-.024-.45-.073-.12-.049-.195-.12-.224-.213l1.569.003v-.078a.687.687 0 0 0-.131-.42.813.813 0 0 0-.36-.27 1.487 1.487 0 0 0-.514-.092zm7.388 0a1.465 1.465 0 0 0-.582.111c-.165.072-.279.167-.342.284v-.338h-.449v1.359h.454v-.5a.387.387 0 0 1 .144-.306.897.897 0 0 1 .357-.18 1.493 1.493 0 0 1 .418-.052zm-9.66 0a1.488 1.488 0 0 0-.524.094.87.87 0 0 0-.363.263.594.594 0 0 0-.133.378.601.601 0 0 0 .134.385.85.85 0 0 0 .385.26c.168.061.366.092.594.092a2.575 2.575 0 0 0 .418-.03c.123-.021.255-.05.397-.086v-.33a5.19 5.19 0 0 1-.398.087 2.367 2.367 0 0 1-.4.03c-.178 0-.328-.024-.45-.072-.12-.05-.195-.12-.224-.213l1.569.002v-.078a.687.687 0 0 0-.131-.42.813.813 0 0 0-.36-.27 1.488 1.488 0 0 0-.515-.092zm6.958 0a1.488 1.488 0 0 0-.523.094.87.87 0 0 0-.364.263.594.594 0 0 0-.132.378.601.601 0 0 0 .134.385.85.85 0 0 0 .385.26c.168.061.366.092.594.092a2.574 2.574 0 0 0 .418-.03c.123-.021.255-.05.397-.086v-.33c-.147.037-.28.067-.398.087a2.367 2.367 0 0 1-.4.03 1.23 1.23 0 0 1-.45-.072c-.12-.05-.195-.12-.224-.213l1.569.002v-.078a.687.687 0 0 0-.131-.42.813.813 0 0 0-.36-.27 1.488 1.488 0 0 0-.515-.092zm-17.142.057h1.15a.72.72 0 0 1 .304.054.183.183 0 0 1 .115.177c0 .08-.038.14-.115.176a.703.703 0 0 1-.304.056h-1.15zm3.837 0v.645a.359.359 0 0 1-.07.222.455.455 0 0 1-.197.146.75.75 0 0 1-.287.052.71.71 0 0 1-.279-.052.447.447 0 0 1-.192-.148.365.365 0 0 1-.07-.22v-.645h-.456v.645a.688.688 0 0 0 .123.407.781.781 0 0 0 .35.268c.15.063.327.095.53.095.204 0 .38-.032.532-.095a.786.786 0 0 0 .35-.268.687.687 0 0 0 .122-.407v-.645zm6.343.243c.14 0 .258.028.354.083a.345.345 0 0 1 .178.217h-1.09a.352.352 0 0 1 .188-.22c.1-.053.224-.08.37-.08zm2.272 0c.14 0 .258.028.355.083a.345.345 0 0 1 .177.217h-1.09a.352.352 0 0 1 .189-.22c.1-.053.223-.08.37-.08zm4.687 0c.14 0 .258.028.354.083a.345.345 0 0 1 .177.217h-1.089a.356.356 0 0 1 .188-.22c.1-.053.223-.08.37-.08zm-2.293.033a.866.866 0 0 1 .29.05.46.46 0 0 1 .203.143.331.331 0 0 1 .071.209.335.335 0 0 1-.07.211.458.458 0 0 1-.204.142.867.867 0 0 1-.312.05 1.004 1.004 0 0 1-.305-.044.52.52 0 0 1-.227-.137.313.313 0 0 1-.086-.222.305.305 0 0 1 .086-.22.541.541 0 0 1 .228-.135.981.981 0 0 1 .304-.047.866.866 0 0 1 .022 0z" />
    </svg>
  );
});

Runkeeper.propTypes = {
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

export default Runkeeper;
