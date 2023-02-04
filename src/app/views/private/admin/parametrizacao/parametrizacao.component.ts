import { MenuService } from './../../../../security/services/menu.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiReturn } from 'src/app/security/interfaces/apiReturn';
import { Modulo } from './model/menu';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'adv-parametrizacao',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './parametrizacao.component.html',
  styleUrls: ['./parametrizacao.component.scss'],
})
export class ParametrizacaoComponent {
  modulos!: Modulo[];
  form!: FormGroup;

  constructor(private fb: FormBuilder, private menuService: MenuService) {
    this.buscarItems();
  }

  buscarItems() {
    this.menuService.buscarAdmin().subscribe({
      next: (res: ApiReturn) => {
        this.modulos = res.return.modulos;
        this.buildForm();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  buildForm() {
    this.form = this.fb.group({});

    const modulosArray = this.fb.array([]) as FormArray;

    this.modulos.forEach((modulo) => {
      const itensArray = this.fb.array([]) as FormArray;

      if (modulo.itens!.length > 0) {
        modulo.itens!.forEach((item) => {
          const subItensArray = this.fb.array([]) as FormArray;

          if (item.subItens!.length > 0) {
            item.subItens!.forEach((subItem) => {
              subItensArray.push(
                this.fb.group({
                  id: [subItem.id],
                  nome: [subItem.nome],
                  icone: [subItem.icone],
                  ativo: [subItem.ativo],
                  path: [subItem.path],
                })
              );
            });
          }

          itensArray.push(
            this.fb.group({
              id: [item.id],
              nome: [item.nome],
              icone: [item.icone],
              ativo: [item.ativo],
              path: [item.path],
              subItens: subItensArray,
            })
          );
        });
      }

      modulosArray.push(
        this.fb.group({
          id: [modulo.id],
          nome: [modulo.nome],
          icone: [modulo.icone],
          ativo: [modulo.ativo],
          path: [modulo.path],
          itens: itensArray,
        })
      );
    });

    this.form.setControl('modulos', modulosArray);
  }

  getFormArray() {
    return (this.form.get('modulos') as FormArray).controls;
  }

  getItemFormArray(m: number) {
    return (this.getFormArray()[m].get('itens') as FormArray).controls;
  }

  getSubItemFormArray(m: number, i: number) {
    return (this.getItemFormArray(m)[i].get('subItens') as FormArray).controls;
  }

  addModulo() {
    (this.form.get('modulos') as FormArray).push(
      this.fb.group({
        id: [null],
        nome: [''],
        icone: [''],
        ativo: [true],
        path: [''],
        itens: this.fb.array([]) as FormArray,
      })
    );
  }

  deleteModulo(m: number) {
    (this.form.get('modulos') as FormArray).removeAt(m);
  }

  addItem(m: number) {
    (this.getFormArray()[m].get('itens') as FormArray).push(
      this.fb.group({
        id: [null],
        nome: [''],
        icone: [''],
        ativo: [true],
        path: [''],
        subItens: this.fb.array([]) as FormArray,
      })
    );
  }

  deleteItem(m: number, i: number) {
    (this.getFormArray()[m].get('itens') as FormArray).removeAt(i);
  }

  addSubItem(m: number, i: number) {
    (this.getItemFormArray(m)[i].get('subItens') as FormArray).push(
      this.fb.group({
        id: [null],
        nome: [''],
        icone: [''],
        ativo: [true],
        path: [''],
      })
    );
  }

  deleteSubItem(m: number, i: number, si: number) {
    (this.getItemFormArray(m)[i].get('subItens') as FormArray).removeAt(si);
  }
}
