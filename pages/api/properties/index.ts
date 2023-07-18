import { NextRequest, NextResponse } from "next/server";
import { Property } from "../../../app/models/property.model";

// export async function GET(req: NextRequest) {
//   const response = NextResponse

//   const { searchParams } = new URL(req.url)
//   const state = searchParams.get('state')
//   const city = searchParams.get('city')

//   const allProperties: Property[] = require('../../../data/properties.json');

//   const filteredProperties: Property[] = allProperties.filter(function (property) {
//     if(city) {
//       return property.city.toLowerCase() === city.toLowerCase()
//     } else {
//       return allProperties
//     }
//   })



//   return response.json({ filteredProperties })
// }

export default function handler(req: any, res: any) {

  const { method, query } = req;

  switch (method) {
    case 'GET':
      const state = query.state
      const city = query.city

      const allProperties: Property[] = require('../../../app/data/properties.json');

      const filteredProperties: Property[] = allProperties.filter(function (property) {
        if (city) {
          return property.city.toLowerCase() === city.toLowerCase()
        } else {
          return allProperties
        }
      })

      return res.json({ filteredProperties })
  }

}