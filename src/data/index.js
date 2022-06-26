import { CityStatisticsFactory } from '../utils/CityStatisticsFactory'

const Kyiv = new CityStatisticsFactory({
  coordinates: [
    30.52675157811433, 50.414611244597324
  ],
  city: 'Kyiv',
  content: 'hello Kyiv feature'
})


const Vinnytsa = new CityStatisticsFactory({
  coordinates: [
    28.513156561836155, 49.188618041051

  ],
  city: 'Vinnytsa',
  content: 'hello Vinnytsa feature'
})

export const data = {
  'type': 'FeatureCollection',
  'features': [
      Kyiv,
      Vinnytsa
  ]
}
