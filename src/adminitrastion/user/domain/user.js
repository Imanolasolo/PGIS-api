
export const Permissions = Object.freeze({
  administration: 1,
  client: 2,
})

/**
 * @interface {User}
 * 
 * @status {boolean} Whether the
 * @name {string} Name of the user
 * @permissions {Permissions} Name of the user
 */
export function User({ status, permissions, name, direction }) {
  this.status = status;
  this.name = name;
  if (!(permissions in Permissions))
    throw new Error('permissions must be one of ' + Object.keys(Permissions).join(', '));
  this.permissions = permissions;
  this.direction = direction;
}


