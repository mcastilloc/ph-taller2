import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Cita } from '../modelos/citas';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  private sqlite = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;

  private async ensureWebStore() {
    if (!customElements.get('jeep-sqlite')) {
      console.error('JeepSqlite no está registrado aún');
    }
}

  constructor() {}

  async init() {
    await this.ensureWebStore();
    console.log(document.querySelector('jeep-sqlite'));

    this.db = await this.sqlite.createConnection(
      'citas.db',
      false,
      'no-encryption',
      1,
      false
    );
    
    console.log('DB creada');
    await this.db.open();
    console.log('DB abierta');

    const schema = `
      CREATE TABLE IF NOT EXISTS citas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        frase TEXT NOT NULL,
        autor TEXT NOT NULL
      );
    `;

    await this.db.execute(schema);
    console.log('Tabla lista');
  }

  async getCitas(): Promise<Cita[]> {
    const res = await this.db.query(`SELECT * FROM citas`);
    return res.values ?? [];
  }

  async addCita(cita: Cita) {
    const sql = `INSERT INTO citas (frase, autor) VALUES (?, ?)`;
    const res = await this.db.run(sql, [cita.frase, cita.autor]);

    console.log('Insert result:', res);
  }

  async deleteCita(id: number) {
    await this.db.run(`DELETE FROM citas WHERE id = ?`, [id]);
  }

  async getRandomCita(): Promise<Cita | null> {
    const res = await this.db.query(`
      SELECT * FROM citas ORDER BY RANDOM() LIMIT 1
    `);

    return res.values?.[0] ?? null;
  }

  async close() {
    await this.db.close();
  }
}