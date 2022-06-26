import { POINTER_NAME } from "../constants"
import { v4 as uuidv4 } from 'uuid';

export class CityStatisticsFactory {
  constructor({
    coordinates,
    city,
    content
  }){
    this.type = 'Feature';
    this.geometry = {
      type: 'Point',
      coordinates
    };
    this.properties = {
      id: uuidv4(),
      [POINTER_NAME]: city,
      content
    }
  }
}