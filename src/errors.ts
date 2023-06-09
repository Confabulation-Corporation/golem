import logger from './logger';

export class GolemError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GolemError';
  }
}

export function handleGolemError(error: GolemError): void {
  logger.error(`[${error.name}] ${error.message}`);
}