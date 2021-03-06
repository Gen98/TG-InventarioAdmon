import { Injectable } from '@angular/core';
import { Registro } from '../interfaces/registro.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  getItems():Registro[]{
    return JSON.parse(localStorage.getItem('inventariado')!) || [];
  }

  addItem( item: Registro ) {
    let storage: Registro[] = this.getItems();
    let duplicado = storage.findIndex(function(e) {
      return e.code == item.code && e.lote == item.lote
    });
    if (duplicado != -1) {
      storage[duplicado].cant = Number(storage[duplicado].cant) + item.cant;
      let actualizado = storage[duplicado];
      storage = storage.filter(function(el) {
        return !(el.lote === item.lote && el.code === item.code);
      });
      storage.unshift(actualizado);
    } else {
      storage.unshift(item);
    }
    localStorage.setItem('inventariado', JSON.stringify(storage))
  }

  deleteItems(): void {
    localStorage.removeItem('inventariado');
  }

  deleteItem( item: Registro ): void{
    let storage: Registro[] = this.getItems();

    let index = storage.findIndex(function(e) {
      return e.code == item.code && e.lote == item.lote
    });

    if (storage[index].cant - item.cant <= 0 || item.cant == 0) {
      storage = storage.filter(function(el) {
        return !(el.lote === item.lote && el.code === item.code);
      });
    } else {
      storage[index].cant = item.cant;
    }
    localStorage.setItem('inventariado', JSON.stringify(storage))
  }

  verificarLimiteRegistros(): boolean {
    let total = this.getItems();
    if (total.length <= 199) return true;
    return false;
  }  
}
