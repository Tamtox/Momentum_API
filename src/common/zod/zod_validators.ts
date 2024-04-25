import { z } from 'zod';

export const createStringValidator = (
  name: string,
  options?: { minLength?: number; maxLength?: number },
) => {
  let validator = z.string({
    invalid_type_error: `${name} must be a string`,
    required_error: `${name} is required`,
  });
  if (options?.minLength)
    validator = validator.min(options.minLength, {
      message: `${name} must be at least ${options.minLength} characters long`,
    });
  if (options?.maxLength)
    validator = validator.max(options.maxLength, {
      message: `${name} must be at most ${options.maxLength} characters long`,
    });
  return validator;
};

export const createNumberValidator = (
  name: string,
  options?: { min?: number; max?: number },
) => {
  let validator = z.number({
    invalid_type_error: `${name} must be a number`,
    required_error: `${name} is required`,
  });
  if (options?.min)
    validator = validator.min(options.min, {
      message: `${name} must be at least ${options.min}`,
    });
  if (options?.max)
    validator = validator.max(options.max, {
      message: `${name} must be at most ${options.max}`,
    });
  return validator;
};

export const createDateTimeValidator = (name: string) => {
  return z.date({
    invalid_type_error: `${name} must be a date`,
    required_error: `${name} is required`,
  });
};

export const createBooleanValidator = (name: string) => {
  return z.boolean({
    invalid_type_error: `${name} must be a boolean`,
    required_error: `${name} is required`,
  });
};

export const createArrayValidator = <T>(
  name: string,
  itemSchema: z.ZodType<T>,
  options?: { minLength?: number; maxLength?: number },
) => {
  let validator = z.array(itemSchema, {
    invalid_type_error: `${name} must be an array`,
    required_error: `${name} is required`,
  });
  if (options?.minLength)
    validator = validator.min(options.minLength, {
      message: `${name} must have at least ${options.minLength} items`,
    });
  if (options?.maxLength)
    validator = validator.max(options.maxLength, {
      message: `${name} must have at most ${options.maxLength} items`,
    });
  return validator;
};

export const createPasswordValidator = (
  name: string,
  options?: { minLength?: number; maxLength?: number },
) => {
  const validator = createStringValidator(name, options);
  return validator.regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number and one special character',
  );
};
