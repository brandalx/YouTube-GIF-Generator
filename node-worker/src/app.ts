import "reflect-metadata";
import { createConnection } from "typeorm";
import dbConnection from "./db/connection";

class App {
  public env: string;

  constructor() {
    this.env = process.env.NODE_ENV || "development";
  }

  public async initializeApp() {
    await this.connectToDatabase();
  }

  private async connectToDatabase() {
    try {
      const connection = await createConnection(dbConnection);
      await connection.driver.afterConnect();
      console.info("🟢 The database is connected.");
    } catch (err) {
      console.error(`🔴 Unable to connect to the database: ${err}.`);
    }
  }
}

export default App;