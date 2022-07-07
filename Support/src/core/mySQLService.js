import mysql from 'mysql2/promise';


export class MySQLService {
  static singleton = null;

  async connection() {
    if (MySQLService.singleton != null) {
      return MySQLService.singleton;
    }

    this.#connection = await mysql.createConnection({ user: 'test', database: 'test' });
    MySQLService.singleton = MySQLService();
  }

}
