
export const getCurrentLocation = (
    sucessCallback: (latitude:number, longitude: number) => void,
    errorCallback: (errpr:string) => void
) => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                sucessCallback(latitude,longitude);
            },
            (error) => {
                errorCallback(error.message);
            }
        );
    }else {
        errorCallback("Geolocalização não é suportada por este navegador.")
    }
};