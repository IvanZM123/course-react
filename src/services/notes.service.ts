import { ServiceMethods } from "../declarations";
import { environments } from "../environments/environments";

export interface Note {
  id: number;
  title: string;
  description: string;
}

export class NoteService implements Partial<ServiceMethods<Note>> {
  private readonly url: string = `${environments.url}/notes`;

  async list(): Promise<Note[]> {
    const res = await fetch(this.url);
    return res.json();
  }

  async create(data: Partial<Note>): Promise<Note> {
    const res = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.json();
  }
}
