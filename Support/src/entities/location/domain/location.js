


/**
 * @interface {User}
 * 
 * @status {boolean} Whether the
 * @name {string} Name of the user
 */
class Location {
  constructor({ coordinates, name }) {
    this.coordinates = coordinates;
    this.name = name;
  }
}

/**
 * @interface {User}
 * 
 * @status {boolean} Whether the
 * @name {string} Name of the user
 */
const Location = function ({ coordinates, name }) {
  this.coordinates = coordinates;
  this.name = name;
}

