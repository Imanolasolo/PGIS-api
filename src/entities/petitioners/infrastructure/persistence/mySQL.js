import { MySQLService } from "../../../../core/mySQLService";
import { IPersistent } from "../../../../interfaces/persistence.interface";

export class MySQL extends IPersistent {
  async filterBy(database, filter) {
    const mySQLService = await MySQLService();
    const query = `SELECT * FROM ${database} WHERE ${filter}`;
    const [rows, fields] = await mySQLService.connection.execute(query);
  }


  create() {


  }

  remove() {

  }

  update() {

  }

}