export default (variables) => {
  return {
    paper: {
      lineHeight: 'inherit',
      boxSizing: 'border-box',
      backgroundColor: variables.paperBackgroundColor
    },
    elevation: [
      { boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.156), 0 0 0 1.5px rgba(0, 0, 0, 0.055)' },
      { boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)' },
      { boxShadow: '0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' },
      { boxShadow: '0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)' },
      { boxShadow: '0 16px 28px 0 rgba(0, 0, 0, 0.22), 0 25px 55px 0 rgba(0, 0, 0, 0.21)' },
      { boxShadow: '0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22)' }
    ],
    padded: {
      padding: '16px 24px'
    },
    divider: {
      boxSizing: 'border-box',
      boxShadow: '0 0.5px 0 0 rgba(0, 0, 0, 0.156), 0 1.5px 0 0 rgba(0, 0, 0, 0.055)'
    }
  }
}
