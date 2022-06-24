
/**
 * @interface {IPersistent}
 */
export class IPersistent {
  filterBy() {
    throw new Error('Not implemented');
  }

  create() {
    throw new Error('Not implemented');
  }

  remove() {
    throw new Error('Not implemented');
  }

  update() {
    throw new Error('Not implemented');
  }

}