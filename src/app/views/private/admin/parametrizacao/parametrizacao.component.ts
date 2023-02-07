import { MenuService } from './../../../../security/services/menu.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiReturn } from 'src/app/security/interfaces/apiReturn';
import {
  Item,
  Menu,
  Modulo,
  SubItem,
} from '../../../../security/interfaces/menu';
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

  save() {
    // this.loading = true;
    let menu = this.makeEntity();

    this.menuService.cadastrar(menu).subscribe({
      next: (res: ApiReturn) => {
        this.buscarItems();
        // this.loading = false;
        // this.notificationService.enviarNotificacaoAtualizarPagina(
        //   'Tudo certo!',
        //   `Menu atualizado`,
        //   'success'
        // );
      },
      error: (error: any) => {
        // this.loading = false;
        // this.notificationService.enviarNotificacao(
        //   'Ops!',
        //   `${error}`,
        //   'warning'
        // );
      },
    });
  }
  makeEntity() {
    let menu = new Menu();

    let modulos: Modulo[] = [];
    this.getFormArray().forEach((m) => {
      let modulo = new Modulo();

      modulo.id = m.get('id')!.value;
      modulo.nome = m.get('nome')!.value;
      modulo.icone = m.get('icone')!.value;
      modulo.ativo = m.get('ativo')!.value;
      modulo.path = m.get('path')!.value;

      let itens: Item[] = [];
      (m.get('itens') as FormArray).controls.forEach((i) => {
        let item = new Item();

        item.id = i.get('id')!.value;
        item.nome = i.get('nome')!.value;
        item.icone = i.get('icone')!.value;
        item.ativo = i.get('ativo')!.value;
        item.path = i.get('path')!.value;

        let subItens: SubItem[] = [];
        (i.get('subItens') as FormArray).controls.forEach((si) => {
          let subItem = new SubItem();

          subItem.id = si.get('id')!.value;
          subItem.nome = si.get('nome')!.value;
          subItem.icone = si.get('icone')!.value;
          subItem.ativo = si.get('ativo')!.value;
          subItem.path = si.get('path')!.value;

          subItens.push(subItem);
        });
        item.subItens = subItens;

        itens.push(item);
      });
      modulo.itens = itens;

      modulos.push(modulo);
    });
    menu.modulos = modulos;

    return menu;
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
