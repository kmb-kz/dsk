import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() page: number = 1;
  @Input() total: number;
  @Input() size: number = 5;
  @Input() disabled: boolean;
  @Output() change = new EventEmitter<number>();
  pageCount: number;

  ngOnInit() {

  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes['total'] && this.total) {
      this.pageCount = parseInt(((this.total + this.size - 1) / this.size).toString());
    }
  }
  setPage(n: number): void {
    if (n <= this.pageCount && n > 0 && n != this.page) {
      this.page = n;
      this.change.emit(n);
    }
  }
  pages(): number[] {
    var pages: number[] = [];
    let startPage: number, endPage: number;
    if (this.pageCount <= 5) {
      startPage = 1;
      endPage = this.pageCount;
    } else {
      if (this.page <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (this.page + 2 >= this.pageCount) {
        startPage = this.pageCount - 4;
        endPage = this.pageCount;
      } else {
        startPage = this.page - 2;
        endPage = this.page + 1;
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
}
