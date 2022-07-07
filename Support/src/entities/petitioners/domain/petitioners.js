
/**
 * @interface {User}
 * 
 * @status {boolean} Whether the
 * @name {string} Name of the user
 */
export function Petitioners({
  id,
  name,
  status_id,
  pac,
  tin,
  city_id,
  address,
  georeference_id,
  phone,
  cell_phone,
  name_contact,
  lastname_contact,
  email,
  working_hours,
  service_id,
  updated_at,
  created_at,
}) {
  this.id = id;
  this.name = name;
  this.status_id = status_id;
  this.pac = pac;
  this.tin = tin;
  this.city_id = city_id;
  this.address = address;
  this.georeference_id = georeference_id;
  this.phone = phone;
  this.cell_phone = cell_phone;
  this.name_contact = name_contact;
  this.lastname_contact = lastname_contact;
  this.email = email;
  this.working_hours = working_hours;
  this.service_id = service_id;
  this.updated_at = updated_at;
  this.created_at = created_at;
}

