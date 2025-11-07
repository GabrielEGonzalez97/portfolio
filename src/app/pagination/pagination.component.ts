import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Input() onPageChange!: (page: number) => void;

  public pageNumbers: (number | string | undefined)[] = [];

  private totalSlots: number = 5;

  public ngOnChanges(): void {
    this.pageNumbers = this.getPageNumbers();
  }

  private isPageNumber(page: any): page is number {
    return typeof page === 'number' && !isNaN(page);
  }

  public changePage(page: any): void {
    if (!this.isPageNumber(page)) return;
    if (page < 1 || page > this.totalPages) return;
    this.onPageChange(page);
  }

  private getPageNumbers(): (number | string | undefined)[] {
    const { currentPage, totalPages, totalSlots } = this;
    const slots: (number | string | undefined)[] = [];

    if (totalPages <= totalSlots) {
      for (let i = 1; i <= totalPages; i++) slots.push(i);
      return slots;
    }

    const leftSide: number = 2;
    const rightSide: number = 2;
    let start: number = Math.max(1, currentPage - leftSide);
    let end: number = Math.min(totalPages, currentPage + rightSide);

    if (start === 1) end = Math.min(totalPages, start + (totalSlots - 1));
    if (end === totalPages) start = Math.max(1, end - (totalSlots - 1));

    for (let i = start; i <= end && slots.length < totalSlots; i++) {
      slots.push(i);
    }

    if (start > 1) {
      slots[0] = 1;
      slots[1] = '...';
    }

    if (end < totalPages) {
      slots[totalSlots - 2] = '...';
      slots[totalSlots - 1] = totalPages;
    }

    while (slots.length < totalSlots) {
      slots.push(undefined);
    }

    return slots;
  }
}
