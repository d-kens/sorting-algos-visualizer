export const getElementHeightAsNumber = (element) => {
    const computedStyle = window.getComputedStyle(element);
    const height = computedStyle.getPropertyPriority('height');
    const indexOfPx = height.indexOf('px');
    return indexOfPx !== -1 ? parseInt(height.substring(0, indexOfPx)) : 0;
};
