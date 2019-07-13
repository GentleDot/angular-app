import {Component, OnInit, ViewChild} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {TestDbDataService} from '../../../services/test-db-data.service';
import {NbWindowRef, NbWindowService} from '@nebular/theme';
import {Member} from '../../../model/member';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent implements OnInit {
  @ViewChild('newUserComponent') newUserComponent: NbWindowRef;

  member: Member;
  memberForm: FormGroup;

  constructor(
    private service: TestDbDataService,
    private modalService: NbWindowService,
  ) {
  }

  ngOnInit(): void {
    this.test();
    this.member = new Member();
    this.memberForm = new FormGroup({
      'userId': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
      'userName':
        new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z가-힣]+$/),
        ])
    })
    ;
  }


  private async test(): Promise<any> {
    const data = await this.service.getData();
    this.source.load(data.members);
  }

  // private async reload(): Promise<any> {
  //   const data = await this.service.getData();
  //   this.source.refresh();
  // }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: true,
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmCreate: true,
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
      MemberNo: {
        title: 'No',
        type: 'number',
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
      },
      MemberUpdDate: {
        title: '변경일',
        type: 'string',
      },
    },
    pager: {
      display: true,
      perPage: 10,
    },
  };

  source: LocalDataSource = new LocalDataSource();


  // onDeleteConfirm(event): void {
  //   if (window.confirm('선택한 정보를 삭제합니다. 진행하시겠습니까?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }


  onCreateConfirm(): void {
    if (window.confirm('입력한 정보로 생성하시겠습니까?')) {
      // event.confirm.resolve(event.newData);
      this.service.createData(this.member).subscribe(res => {
        console.log('생성완료!');
        // window.location.reload();
        this.test();
        this.setLastPage();
        this.newUserComponent.close();
      });
    } else {
      console.log('생성실패!');
    }
  }

  popupOpen(content) {
    this.newUserComponent = this.modalService.open(content,
      {title: '맴버 입력', context: {text: '맴버 입력 테스트'}},
    )
  }

  btnConfirm(userId: string, userNm: string) {
    this.member.MemberId = userId;
    this.member.MemberName = userNm;
    this.onCreateConfirm();
  }

  setLastPage(): void {
    const dataCnt = this.source.count();
    const perPageNum = this.settings.pager.perPage;
    let lastPage = 0;

    // Math.ceil(dataCnt / perPageNum);
    if (dataCnt === 0 || perPageNum === 0) {
      lastPage = 1;
    } else {
      lastPage = Math.ceil(dataCnt / perPageNum);
    }

    this.source.setPage(lastPage, true);
  }

}
