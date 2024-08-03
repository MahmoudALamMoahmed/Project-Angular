import { Injectable } from '@angular/core';
import { Electronic } from './products/electronic';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {
 electronic :Electronic[]=
 [{
  "_id": 1,
  "title" : "Canon EOS Rebel T100",
  "description" : "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
  "price" : 559.99,
  "ratings" : 4.5,
  "image" : "https://i.ibb.co/1r28gMk/1.webp",
  "brand" : "Canon"
  } ,
  {
  "_id": 2,
  "title" : "DJI Air",
  "description" : "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
  "price" : 999.00,
  "ratings" : 4.8,
  "image" : "https://i.ibb.co/qdfB3s6/2.webp",
  "brand" : "DJI"
  },
  {
    "_id": 3,
    "title" : "Canon EOS Rebel T100",
    "description" : "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
    "price" : 559.99,
    "ratings" : 4.5,
    "image" : "https://i.ibb.co/1r28gMk/1.webp",
    "brand" : "Canon"
    } ,
    {
    "_id": 4,
    "title" : "DJI Air",
    "description" : "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
    "price" : 999.00,
    "ratings" : 4.8,
    "image" : "https://i.ibb.co/qdfB3s6/2.webp",
    "brand" : "DJI"
    },
    {
      "_id": 5,
      "title" : "Canon EOS Rebel T100",
      "description" : "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
      "price" : 559.99,
      "ratings" : 4.5,
      "image" : "https://i.ibb.co/1r28gMk/1.webp",
      "brand" : "Canon"
      } ,
      {
      "_id": 6,
      "title" : "DJI Air",
      "description" : "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
      "price" : 999.00,
      "ratings" : 4.8,
      "image" : "https://i.ibb.co/qdfB3s6/2.webp",
      "brand" : "DJI"
      },
      {
        "_id": 7,
        "title" : "Canon EOS Rebel T100",
        "description" : "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
        "price" : 559.99,
        "ratings" : 4.5,
        "image" : "https://i.ibb.co/1r28gMk/1.webp",
        "brand" : "Canon"
        } ,
        {
        "_id": 8,
        "title" : "DJI Air",
        "description" : "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
        "price" : 999.00,
        "ratings" : 4.8,
        "image" : "https://i.ibb.co/qdfB3s6/2.webp",
        "brand" : "DJI"
        },
    ]
}
