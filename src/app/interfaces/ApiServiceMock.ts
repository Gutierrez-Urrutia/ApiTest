import { Observable, of } from "rxjs"
import { Usuario } from "./usuario"
import { mockUsuariosResponseService } from "../mock/usuarios.mock"

export const ApiServiceMock: {
    obtenerUsuarios: () => Observable<Usuario[]>
} = {
    obtenerUsuarios: () => of(mockUsuariosResponseService)
}