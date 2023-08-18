export const flattenArray = (array) => array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), [])

export default flattenArray