import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";

type TProperty = "body" | "header" | "params" | "query";

type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

type TAllSchemas = Record<TProperty, Schema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation =
  (getAllSchemas) => async (request, response, next) => {
    const schemas = getAllSchemas((schema) => schema);

    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
      try {
        schema.validateSync(request[key as TProperty], { abortEarly: true });
      } catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach((erro) => {
          if (erro.path === undefined) return;
          errors[erro.path] = erro.message;
        });

        errorsResult[key] = errors;
      }
    });

    if (Object.keys(errorsResult).length > 0) {
      response.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    } else {
      next();
    }
  };
