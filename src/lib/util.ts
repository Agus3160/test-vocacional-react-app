import { PhoneNumberUtil } from 'google-libphonenumber';
import { RespuestasSchemaType } from './definitions';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  const message =
    "Are you sure you want to leave this page? Unsaved changes will be lost.";
  event.preventDefault();
  return message;
};

const calculateScores = (respuestas: RespuestasSchemaType) => {  
  let scores:Record<string, number> = {
    "ARTE Y CREATIVIDAD": 0,
    "CIENCIAS SOCIALES": 0,
    "ECONOMICA ADMINISTRATIVA Y FINANCIERA": 0,
    "CIENCIAS Y TECNOLOGIA": 0,
    "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD": 0,
  }
  respuestas.respuestas.forEach((resp) => {
    scores[resp.area] += resp.puntaje;
  })

  return scores
}

const getTheResult = (scores: Record<string, number>) => {
  let max = 0;
  let result = "";
  Object.keys(scores).forEach((key) => {
    if (scores[key] > max) {
      max = scores[key];
      result = key;
    }
  });
  return result;
}


export { handleBeforeUnload, isPhoneValid, calculateScores, getTheResult };
