// index.js

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Getter methods
    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return Math.PI * this.diameter;  // or Math.PI * 2 * this.radius
    }

    get area() {
        return Math.PI * this.radius * this.radius;  // π * r²
    }

    // Setter methods
    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2);
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}

// Export for testing
if (typeof module !== 'undefined') {
    module.exports = Circle;
}