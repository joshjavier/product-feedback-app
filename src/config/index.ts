import 'dotenv/config'

function processEnvRequired(key: string, message?: string) {
  const value = process.env[key];

  if (value === undefined || value === null || value === '') {
    throw new Error(message || `KeyError: ${key} not found`);
  }

  return value;
}

export const express = {
  port: process.env.PORT || '3000',
  // secret: processEnvRequired('SECRET_KEY'),
};

export const mongodb = {
  uri: processEnvRequired('MONGODB_URI', 'Please define the MONGODB_URI environment variable inside .env'),
}
