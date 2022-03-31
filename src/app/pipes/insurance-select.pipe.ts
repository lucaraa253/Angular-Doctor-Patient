import { Pipe, PipeTransform } from '@angular/core';

import { Doctor } from '../models/doctor';

@Pipe({
  name: 'insuranceSelect'
})
export class InsuranceSelectPipe implements PipeTransform {

  transform(doctors: Doctor[], insurance: string): Doctor[] {
    return doctors.filter(doc => insurance === "" || doc.insuranceProvider == insurance);
  }

}
