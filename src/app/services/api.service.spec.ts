import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { mockUsuariosResponseService } from '../mock/usuarios.mock';
import { of } from 'rxjs';

describe('ApiService (with spies)', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ApiService;
  let mock = mockUsuariosResponseService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ApiService(httpClientSpy);
    TestBed.configureTestingModule({
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('obtener usuarios', (done: DoneFn) =>{
    httpClientSpy.get.and.returnValue(of(mock));
    service.obtenerUsuarios().subscribe({
      next: (response) => {
        expect(response).toEqual(mock);
        expect(httpClientSpy.get.calls.count()).toBe(1);
        done();
      }
    })
  })

  
});
