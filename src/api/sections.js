export const getSections = async () => {
  const URL =
    'https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica';

  try {
    const response = await fetch(URL);

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
