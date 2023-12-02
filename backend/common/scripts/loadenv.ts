import dotenv from 'dotenv';

function loadEnv() {
  const dotenvResult = dotenv.config();
  if (dotenvResult.error) {
    console.log("dotenv failed to env");
  }
}

export default loadEnv;