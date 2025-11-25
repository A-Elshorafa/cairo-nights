export interface IDriverData {
  rate: number
  trips: number
  imgSrc: string
  nickName: string
  fullName: string
}

export const driverRepo : Array<IDriverData> = [
  {
    rate: 5,
    trips: 16,
    nickName: "يحيا باشا",
    fullName: "يحيي إسلام",
    imgSrc: new URL("../public/data/driver/driver.png", import.meta.url).href,
  },
  {
    rate: 5,
    trips: 16,
    nickName: "يحيا باشا",
    fullName: "يحيي إسلام",
    imgSrc: new URL("../public/data/driver/driver.png", import.meta.url).href,
  },
  {
    rate: 5,
    trips: 16,
    nickName: "يحيا باشا",
    fullName: "يحيي إسلام",
    imgSrc: new URL("../public/data/driver/driver.png", import.meta.url).href,
  },
];