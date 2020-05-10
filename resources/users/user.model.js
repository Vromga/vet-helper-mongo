const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  patronymic: { type: String, required: false },
  passportNumber: { type: String, required: false },
  mobilePhone: { type: String, required: true },
  homePhone: { type: String, required: false },
  workPhone: { type: String, required: false },
  email: { type: String, required: false },
  discount: { type: Number, required: false },
  numberInDocument: { type: String, required: false },
  typeOrReception: { type: String, required: false },
  howToFindClinic: { type: String, required: false },
  unsubscribe: { type: String, required: true, default: false },
  clientInBlackList: { type: String, required: true, default: false },
  typeCity: { type: String, required: true },
  cityName: { type: String, required: true },
  typeStreet: { type: String, required: true },
  streetName: { type: String, required: true },
  numberHouse: { type: String, required: true },
  zipCode: { type: String, required: false },
  clientDescription: { type: String, required: false }
});

clientSchema.statics.toResponse = (client) => {
  const {
    _id,
    name,
    surname,
    patronymic,
    passportNumber,
    mobilePhone,
    homePhone,
    workPhone,
    email,
    discount,
    numberInDocument,
    typeOrReception,
    howToFindClinic,
    unsubscribe,
    clientInBlackList,
    typeCity,
    cityName,
    typeStreet,
    streetName,
    numberHouse,
    zipCode,
    clientDescription
  } = client;
  return {
    _id,
    name,
    surname,
    patronymic,
    passportNumber,
    mobilePhone,
    homePhone,
    workPhone,
    email,
    discount,
    numberInDocument,
    typeOrReception,
    howToFindClinic,
    unsubscribe,
    clientInBlackList,
    typeCity,
    cityName,
    typeStreet,
    streetName,
    numberHouse,
    zipCode,
    clientDescription
  };
};

module.exports = model('Client', clientSchema);
