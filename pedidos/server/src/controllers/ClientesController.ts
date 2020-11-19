import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import Cliente from '../database/entities/Cliente';

class ClientesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const clientesRepository = getRepository(Cliente);

    const { nome, salario, data_nascimento, ativo } = request.body;

    const cliente = clientesRepository.create({
      nome,
      salario,
      data_nascimento,
      ativo,
    });

    await clientesRepository.save(cliente);

    return response.status(201).json(cliente);
  }
}

export default ClientesController;
