import { Pipe, PipeTransform } from '@angular/core';

import { Doctor } from '../models/doctor';

@Pipe({
  name: 'specialtySelect'
})
export class SpecialtySelectPipe implements PipeTransform {

  transform(doctors: Doctor[], specialty: string): Doctor[] {
    return doctors.filter(doc => specialty === "" || doc.typeofDoctor === specialty);
  }

}
