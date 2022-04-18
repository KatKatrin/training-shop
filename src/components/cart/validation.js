import * as Yup from 'yup';

export const validationDelivery = () => {

  return(
    Yup.object({
      deliveryMethod: Yup.string(),
      phone: Yup.string()
               .matches(/\d/gm, "Введите цифры")
               .matches(/^\+375\([25,29,33,44]/, 'Неверный код')
               .max(15, 'Максимум 9 символов для заполнения')
               .min(15, 'Минимум 9 символов для заполнения')
               .required('Обязательное поле!'),
      email: Yup.string()
              .email('Неправильный email адрес')
              .matches(/\.[a-z, A-Z]{2,63}$/, 'Неверный домен')
              .required('Обязательное поле!'),
      country: Yup.string()
              .matches(/\D/gm, "Неверные данные")
              .required('Обязательное поле!'),
      city: Yup.string()
              .when('deliveryMethod', {
                is: (deliveryMethod) => (deliveryMethod === 'pickup from post offices' || deliveryMethod === 'express delivery'),
                then: Yup.string().matches(/\D/gm, "Неверные данные").required('Обязательное поле!') }),
      street: Yup.string()
              .when('deliveryMethod', {
                is: (deliveryMethod) => (deliveryMethod === 'pickup from post offices' || deliveryMethod === 'express delivery'),
                then: Yup.string().matches(/\D/gm, "Неверные данные").required('Обязательное поле!') }),
      house: Yup.string()
            .when('deliveryMethod', {
              is: (deliveryMethod) => (deliveryMethod === 'pickup from post offices' || deliveryMethod === 'express delivery'),
              then: Yup.string().required('Обязательное поле!') }),
      postcode: Yup.string()
                  .when('deliveryMethod', {
                  is: 'pickup from post offices',
                  then: Yup.string().matches(/[0-1]/gm, "Неверные данные").required('Обязательное поле!') }),
      storeAddress: Yup.string()
                    .when('deliveryMethod', {
                      is: 'store pickup',
                      then: Yup.string().required('Обязательное поле!')
                                        .max(24, 'Магазин не найден') }),
      terms: Yup.boolean()
              .required('Необходимо согласие')
              .oneOf([true], "Необходимо согласие") })
  )
};


export const validationPayment = () => {

  return(
    Yup.object({
        
      card: Yup.string()
        .when('paymentMethod', {
          is: paymentMethod => (paymentMethod === 'visa' || paymentMethod === 'master'),
          then: Yup.string()
                .matches(/\d/gm, "Введите цифры")
                .length(16, 'Введите 16 символов')
                .required('Обязательное поле!'),
          }),   

      cardDate:Yup.string()
        .when('paymentMethod', {
            is: paymentMethod => (paymentMethod === 'visa' || paymentMethod === 'master'),
            then: Yup.string()
              .matches(/(([0]{1}[1-9]{1}|[1]{1}[1-2]{1}).[2-4]{1}[3-9]{1})|(([0]{1}[4-9]{1}|[1]{1}[1-2]{1}).[2]{1}[2]{1})/, "Неверная дата")
              .required('Обязательное поле!'),
          }),

      cardCVV:Yup.string()
        .when('paymentMethod', {
            is: paymentMethod => (paymentMethod === 'visa' || paymentMethod === 'master'),
            then: Yup.string()
                  .matches(/^[0-9,*]+$/, 'Введите цифры')
                  .required('Обязательное поле!'),
          }),   
              
      cashEmail:Yup.string()
          .when('paymentMethod', {
            is: 'PayPall',
            then: Yup.string()
                      .email('Неправильный email адрес')
                      .matches(/\.[a-z, A-Z]{2,63}$/, 'Неверный домен')
                      .required('Обязательное поле!'),
          }),
    }))
}