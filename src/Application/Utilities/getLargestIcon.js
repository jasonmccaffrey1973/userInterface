/** -------------------------------------------------------------------
 * @param {*} data 
 * @returns 
 * -------------------------------------------------------------------- */
export const getLargestIcon = (data) => {
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const largestIconSize = data.reduce((maxSize, item) => {
        const iconSize = parseFloat(item?.icon?.props?.size);
        
        if (!isNaN(iconSize)) {
            if (item?.icon?.props?.size.includes('rem')) {
                const sizeInPixels = iconSize * baseFontSize;
                return Math.max(maxSize, sizeInPixels);
            }
            return Math.max(maxSize, iconSize);
        }
        
        return maxSize;
    }, 0);
    
    return largestIconSize / baseFontSize;
};

export default getLargestIcon;
