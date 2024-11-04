/* eslint-disable react/display-name */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const React = require('react')

module.exports = {
  motion: {
    div: React.forwardRef((props, ref) => <div {...props} ref={ref} />),
    span: React.forwardRef((props, ref) => <span {...props} ref={ref} />),
    a: React.forwardRef((props, ref) => <a {...props} ref={ref} />),
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}
