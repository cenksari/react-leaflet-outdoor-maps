export interface IMyLocation {
  error?: string;
  status: boolean;
  latitude?: number;
  longitude?: number;
}

/**
 * Retrieves the user's current geolocation coordinates.
 *
 * @return {Promise<IMyLocation>} A promise that resolves to an object containing the user's longitude, latitude, and status.
 */
const getUserLocation = async (): Promise<IMyLocation> => {
  if ('geolocation' in navigator) {
    try {
      const position: any = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      return {
        status: true,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error: any) {
      return {
        error,
        latitude: 0,
        longitude: 0,
        status: false,
      };
    }
  } else {
    return {
      latitude: 0,
      longitude: 0,
      status: false,
      error: 'Geolocation is not supported by this browser.',
    };
  }
};

/**
 * Checks if the browser has geolocation permission.
 *
 * @return {Promise<boolean>} A promise that resolves to a boolean indicating whether the browser has geolocation permission.
 */
const checkPermission = async (): Promise<boolean> => {
  let status = false;

  if ('geolocation' in navigator) {
    try {
      const permission = await navigator.permissions.query({ name: 'geolocation' });

      if (permission != null && permission.state === 'granted') {
        status = true;
      }
    } catch {
      status = false;
    }
  } else {
    return false;
  }

  return status;
};

const Geo = {
  getUserLocation,
  checkPermission,
};

export default Geo;
