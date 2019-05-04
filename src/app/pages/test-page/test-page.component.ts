import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {GetDbDataService} from '../../../services/get-db-data.service';

@Component({
  selector: 'ngx-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  constructor(private service: GetDbDataService) {
  }

  ngOnInit(): void {
    this.test();
  }

  private async test(): Promise<any> {
    const data = await this.service.getData();
    this.source.load(data.members);
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      MemberNo: {
        title: 'ID',
        type: 'number',
      },
      memberName: {
        title: 'First Name',
        type: 'string',
      },
      memberId: {
        title: 'Last Name',
        type: 'string',
      },
      memberRegDate: {
        title: 'Username',
        type: 'string',
      },
      memberUpdDate: {
        title: 'E-mail',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }

}
