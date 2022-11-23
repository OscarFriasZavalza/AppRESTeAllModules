import * as PeriodosService from '../services/periodos.service';
import boom from '@hapi/boom';

//FIC: API GET 
 
export const getPeriodosList = async (req, res, next) => { 
    try{ 
      const periodosList = await PeriodosService.getPeriodosList(); 
      if (!periodosList) { 
        throw boom.notFound('No se encontraron periodos registrados.'); 
      } else if (periodosList) { 
        res.status(200).json(periodosList); 
      }  

      } catch(error) { 
        next(error); 
      } 
    };

    export const getPeriodosItem = async (req, res, next) => {
      try{
        const { id } = req.params;
        const keyType = req.query.keyType || 'OK';
        const periodosItem = await PeriodosService.getPeriodosItem(id, keyType);
        if(!periodosItem){
          throw boom.notFound('No se encontraron periodos registrados');
        }else if(periodosItem){
          res.status(200).json(periodosItem);
        }
      }catch(error){
        next(error);
      }
    }

    export const postPeriodosItem = async (req, res, next) => { 
      try { 
        const paPeriodosItem = req.body; 
        const newPeriodosItem = await PeriodosService.postPeriodosItem(paPeriodosItem); 
        if (!newPeriodosItem) { 
          throw boom.badRequest('No se pudo crear el periodo.'); 
        } else if (newPeriodosItem) { 
          res.status(201).json(newPeriodosItem); 
        } 
      } catch (error) { 
        console.log(error); 
        next(error); 
      } 
    };

    export const putPeriodosItem = async (req, res, next) => {
      try {
        const { id } = req.params;
        const puPeriodosItem = req.body;
        const updatedPeriodosItem = await PeriodosService.putPeriodosItem(id, puPeriodosItem );
        if (!updatedPeriodosItem) {
          throw boom.badRequest('No se pudo actualizar el Periodo.');
        } else if (updatedPeriodosItem) {
          res.status(200).json(updatedPeriodosItem);
        }
      } catch (error) {
        next(error);
      }
    };


    export const deletePeriodosItem = async (req, res, next) => {
      try {
        const { id } = req.params;
        const deletedPeriodosItem = await PeriodosService.deletePeriodosItem(id);
        if (!deletedPeriodosItem) {
          throw boom.notFound(`No se encontró el periodo con id ${req.params.id}.`);
        } else if (deletedPeriodosItem) {
          res.status(200).json(deletedPeriodosItem);
        }
      } catch (error) {
        next(error);
      }
    };