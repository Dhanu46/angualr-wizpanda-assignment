import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
const materials = [
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
