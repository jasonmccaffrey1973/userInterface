export const titleCase = (str) => {
    const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'in', 'of'];
  
    return str.toLowerCase().replace(/\b\w+/g, function(match) {
      return exceptions.includes(match) ? match : match.charAt(0).toUpperCase() + match.slice(1);
    });
  }

export default titleCase;

  