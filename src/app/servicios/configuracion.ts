import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private KEY = 'config';

  async guardarConfig(config: any): Promise<void> {
    await Preferences.set({
      key: this.KEY,
      value: JSON.stringify(config)
    });
  }

  async obtenerConfig(): Promise<any> {
    const { value } = await Preferences.get({ key: this.KEY });

    return value
      ? JSON.parse(value)
      : { borrarInicio: false };
  }
}