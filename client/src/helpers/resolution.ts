import Resolution, { UnsLocation } from "@unstoppabledomains/resolution";

export const reverseUrl = (address:any): Promise<any> => {
  return new Promise((resolve, reject) => {
    const resolution = new Resolution();
    resolution
      .reverse(address, { location: UnsLocation.Layer2 })
      .then((domain) => {
        resolve(domain);
      })
      .catch(console.error);
  });
};
