import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {TestDbDataService} from '../../../services/test-db-data.service';

@Component({
  selector: 'ngx-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent implements OnInit {
  constructor(private service: TestDbDataService) {
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
      confirmCreate: true,
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
        title: 'No',
        type: 'number',
        editable: false,
        editor: {
          type: 'checkbox',
        },
      },
      MemberName: {
        title: '사용자명',
        type: 'string',
      },
      MemberId: {
        title: '사용자 ID',
        type: 'string',
      },
      MemberRegDate: {
        title: '가입일',
        type: 'string',
        editable: false,
        editor: {
          type: 'checkbox',
        },
      },
      MemberUpdDate: {
        title: '변경일',
        type: 'string',
        editable: false,
        editor: {
          type: 'checkbox',
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  onDeleteConfirm(event): void {
    if (window.confirm('선택한 정보를 삭제합니다. 진행하시겠습니까?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  onCreateConfirm(event): void {
    if (window.confirm('입력한 정보로 생성하시겠습니까?')) {
      // event.confirm.resolve(event.newData);
      this.service.createData(event.newData).subscribe(res => {
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

}
