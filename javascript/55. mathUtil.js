//Used in pair with #55 JS exercise
//"export" has to be written in order to import it somewhere else
export const PI = 3.14159;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}

export function getVolume(radius) {
    return (4/3) * PI * Math.pow(radius, 3);
}