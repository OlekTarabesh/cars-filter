import { axiosInstance } from '../axios';

export async function getCars() {
  try {
    const response = await axiosInstance.get(
      'GetMakesForVehicleType/car?format=json'
    );

    if (!response) {
      throw new Error('Failed to fetch car paths');
    }

    return response;
  } catch (error) {
    console.error('Error fetching car paths:', error);
    return [];
  }
}

export async function getTypeCars(makeId, year) {
  try {
    const response = await axiosInstance.get(
      `GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );

    if (!response) {
      if (response.status === 404) {
        throw new Error('Car not found');
      } else {
        throw new Error('Failed to fetch car data');
      }
    }
    return response;
  } catch (error) {
    console.error(
      `Error fetching data for car ${makeId} in year ${year}:`,
      error
    );
    throw error;
  }
}
