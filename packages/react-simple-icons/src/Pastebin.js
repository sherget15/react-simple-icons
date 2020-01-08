import React from 'react';
import PropTypes from 'prop-types';

const Pastebin = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M17.02 0a2.096 2.096 0 00-.723.123L2.623 5.003A2.101 2.101 0 001.35 7.69l5.324 14.916a2.101 2.101 0 002.685 1.272l7.746-2.765c.792-.307 1.345-.534 1.464-.608.543-.314.962-.817 1.964-2.334.904-1.362 1.859-3.323 2.097-4.28.24-.97.239-1.48-.502-3.675h.001l-3.147-8.82A2.102 2.102 0 0017.02 0zm-.084.414c.72-.031 1.4.403 1.657 1.12l3.147 8.82.008-.003c.271.763.497 1.415.526 1.54.102.433-.282 1.147-.737 1.35-.2.1-.71.293-1.142.429-1.397.464-2.05.879-2.458 1.548-.363.591-.315 1.18.16 2.377.462 1.142.533 1.864.225 2.4-.113.188-.301.322-1.354.733l-.002-.005-7.746 2.765a1.68 1.68 0 01-2.157-1.022L1.74 7.55a1.68 1.68 0 011.022-2.157L16.436.513c.165-.06.334-.092.5-.099zM15.9 2.25l-.708.515-.495.37.113.314.074.205.523-.316.4 1.112.403 1.123-.359.129-.337.12c.045.145.216.642.238.664l2.166-.779-.238-.663-.244.088-.443.16-.334-.93zm-3.29 1.182l-.709.515-.494.37.113.314.073.205.524-.316.4 1.112.403 1.123-.36.129-.337.121c.046.144.216.64.238.663l2.167-.778-.238-.663-.244.087-.443.16-.334-.93zM9.084 4.786a1.532 1.532 0 00-.8.223c-.732.448-.85 1.383-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.399 1.085-2.95-.307-.66-.837-1.036-1.415-1.046zm-.191.672c.168-.009.357.085.539.279.145.155.347.51.437.787.35.998.164 1.688-.414 1.546C8.854 7.93 8.21 6 8.62 5.585a.407.407 0 01.273-.127zm-3.765.75a1.532 1.532 0 00-.8.223c-.732.448-.85 1.382-.332 2.557.337.777.873 1.218 1.462 1.215 1.344-.007 1.86-1.398 1.085-2.95-.307-.66-.838-1.036-1.415-1.045zm-.192.672c.168-.01.358.085.54.278.145.155.347.51.437.787.35.999.164 1.689-.415 1.547-.6-.141-1.243-2.072-.834-2.485a.407.407 0 01.272-.127zm13.362.655a1.533 1.533 0 00-.8.223c-.732.448-.85 1.382-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.399 1.085-2.95-.307-.66-.837-1.036-1.415-1.046zm-.191.672c.168-.009.357.085.539.278.145.155.347.51.437.787.35.999.164 1.689-.414 1.547-.601-.141-1.244-2.072-.835-2.485a.407.407 0 01.273-.127zm-3.766.75a1.532 1.532 0 00-.8.222c-.73.448-.848 1.383-.331 2.558.337.776.873 1.218 1.462 1.215 1.344-.007 1.86-1.398 1.085-2.95-.307-.66-.838-1.036-1.416-1.045zm-.19.671c.167-.009.357.085.539.279.145.155.347.51.437.787.35.998.164 1.688-.415 1.547-.6-.142-1.244-2.072-.835-2.485a.408.408 0 01.273-.128zm-3.746.743a1.533 1.533 0 00-.8.223c-.732.448-.85 1.382-.332 2.557.337.777.873 1.219 1.462 1.216 1.345-.007 1.86-1.399 1.085-2.951-.307-.66-.838-1.036-1.415-1.045zm-.192.672c.169-.01.358.085.54.278.145.155.347.51.437.787.35.999.164 1.689-.414 1.547-.601-.141-1.244-2.072-.835-2.485a.407.407 0 01.272-.127zm-3.515.616l-.708.515-.495.369.113.314.074.206.524-.316.399 1.112.403 1.122-.359.13-.337.12c.045.145.216.641.238.663l2.166-.778-.238-.663-.244.088-.443.159-.334-.93zm15.664 1.33c.034 0 .049.047.064.135.023.11-.064.545-.195.957-.469 1.436-2.052 4.224-3.079 5.397l-.408.47.051-.667c.03-.567-.016-.812-.377-1.71-.496-1.263-.533-1.73-.158-2.31.341-.514 1.028-.907 2.448-1.371.72-.238 1.175-.463 1.385-.664.132-.145.207-.22.253-.235a.05.05 0 01.015-.003zm-6.429 1.477l-.708.515-.495.37.113.314.074.205.523-.316.4 1.112.403 1.123-.359.129-.337.12c.045.145.216.642.238.664l2.166-.779-.238-.662-.244.087-.443.16-.334-.93zm-3.579 1.33a1.532 1.532 0 00-.8.223c-.731.448-.849 1.382-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.399 1.086-2.95-.307-.66-.838-1.036-1.416-1.046zm-.191.672c.168-.009.358.085.54.279.144.154.346.51.437.787.35.998.164 1.688-.415 1.546-.6-.141-1.244-2.072-.835-2.485a.407.407 0 01.273-.127zm-3.515.616l-.71.515-.494.37.113.313.074.206.524-.316.4 1.112.403 1.122-.36.13-.337.12c.045.145.216.642.238.664l2.166-.779-.238-.663-.244.088-.443.16-.334-.93z" />
    </svg>
  );
};

Pastebin.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pastebin.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Pastebin;
