import {
  FALHA,
  SENHA_ERRADA,
  USUARIO_NAO_ENCONTRADO,
} from '../messages/mensagens';
import { RetornoTipo } from '../messages/retornoMensagem';
import { USUARIO_DESABILITADO } from '../messages/mensagens';

export default class Utils {
  static obterStatusRetorno(mensagem: string = '') {
    let error = '';

    switch (mensagem) {
      case RetornoTipo.SENHA_ERRADA:
        error = SENHA_ERRADA;
        break;

      case RetornoTipo.USUARIO_NAO_ENCONTRADO:
        error = USUARIO_NAO_ENCONTRADO;
        break;

      case RetornoTipo.USUARIO_DESABILITADO:
        error = USUARIO_DESABILITADO;
        break;

      default:
        error = FALHA;
        break;
    }
    return error;
  }
}
